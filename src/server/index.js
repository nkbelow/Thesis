const express = require('express');
const session = require('express-session');
const passport = require('./passport/passport.js')
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;
const pgSession = require('connect-pg-simple')(session);

const db = require('../db/index.js');
const data = require('../../data/ourNationalParks.js');
const filters = require('./handlers/filtersRequestHelper.js')
const individualParkData = require('../db/models/getIndividualParksInfo.js');
const tenDayForecast = require('./handlers/weatherHandlers/tenDayForecastHandler.js')
const googleHelpers = require('./handlers/gHelpers.js')
const campgroundsData = require('../db/models/getCampgroundsInfo.js');
const trails = require('../db/models/getTrailsInfo.js');
const sendEmail = require('./handlers/emailHandler.js');

const app = express();



app.use('/', express.static(path.join(__dirname, '../client/public')));

app.use(session({
	store: new pgSession({
		pg: db.pgp.pg || db.pgp,
		conString: process.env.DATABASE_URL || db.connection
	}),
	secret: 'Victoria\'s',
	resave: false,
	saveUninitialized: true,
	cookie: {maxAge: new Date(Date.now() + 600000) }
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/sendEmail', sendEmail);
app.post('/api/park/tenDayForecast', tenDayForecast.getForecast);

app.get('/api/trails', (req, res) => {
	trails(req.query.parkId).then((trails) => {
		res.status(200).send(trails);
	})
})

// app.get('api/historicalWeatherData', )

app.get('/api/park/lodgings', (req, res) => {
	googleHelpers.places({lat: req.query.lat, lng: req.query.lon})
	.then((result) => {
		res.status(201).send(result);
	})
})

app.get('/api/park/', (req, res) => {
	console.log(req.session, 'this is the session');
	console.log(req.session.ID, 'this is the session id');
	console.log(req.session.views, 'these are the views');
	console.log(req.cookies, 'these are the cookies');
	individualParkData(req.query.parkcode)
	.then((data) => {
		let park = data;
		res.status(200).send(data);
	})
})

app.get('/api/parks', (req, res) => {

	const filtersState = req.query.filters.map((filter) => {
		return JSON.parse(filter)
	}) 

	const filtersArray = filtersState.filter((filter) => {
		
		return filter.isSelected === true && filter.name !== 'Most Visited' && filter.name !== 'Least Visited';
	})

	const filterNames = filtersArray.map((filter) => {
		return filter.name
	})

	console.log(filterNames, 'FILTERS FILTERS FILTERS')
	if (filterNames.length > 0) {
		filters.activities(filterNames).then((response) => {
			res.status(200).send(response);
		})
	} else {
		db.db.query('SELECT * from parks')
		.then((result) => {
			res.status(201).send(result)
		})
		.catch((err) => {
			res.send(data.ourNationalParks)
			// res.status(404).send(err + 'there was an error');
		})
	}
})

app.get('/api/campgrounds', (req, res) => {
	campgroundsData(req.query.parkId)
	.then((data) => {
			res.status(203).send(data)
	})
})


app.get('*', (req, res) => {
	res.redirect('/');
})

app.listen(port, () => {
  console.log('App is listening to port ' + port);
})

module.exports = app;
