const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('./passport/passport.js')
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const db = require('../db/index.js');
const data = require('../../data/ourNationalParks.js');
const filters = require('./handlers/filtersRequestHelper.js')
const individualParkData = require('../db/models/getIndividualParksInfo.js');
const tenDayForecast = require('./handlers/weatherHandlers/tenDayForecastHandler.js')
const googleHelpers = require('./handlers/gHelpers.js')
const campgroundsData = require('../db/models/getCampgroundsInfo.js');

app.use('/', express.static(path.join(__dirname, '../client/public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/api/park/tenDayForecast', tenDayForecast.getForecast);

// app.get('/api/trails', )

app.get('/api/park/lodgings', (req, res) => {
	googleHelpers.places({lat: req.query.lat, lng: req.query.lon})
	.then((result) => {
		console.log(result)
		res.status(201).send(result);
	})
})

app.get('/api/park/', (req, res) => {
	individualParkData(req.query.parkcode)
	.then((data) => {
		let park = data;
		res.status(200).send(data);
	})
})

app.get('/api/parks', (req, res) => {
	console.log(req.query, 'REQUEST FILTERS REQUEST FILTERS')

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
