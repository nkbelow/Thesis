const express = require('express');
const session = require('express-session');
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
const getHistoricalData = require('./handlers/weatherHandlers/historicalWeatherData.js')

const app = express();

const keyPublishable = process.env.STRIPE_PUBLISHABLE_KEY;
const keySecret = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(keySecret);

app.use(session({
	store: new pgSession({
		pg: db.pgp.pg,
		conString: process.env.DATABASE_URL || db.connection
	}),
	secret: 'Victoria\'s',
	resave: false,
	saveUninitialized: true,
	cookie: {maxAge: new Date(Date.now() + 600000) }
}))

const session = require('express-session');
const cookieParser = require('cookie-parser');
const fitbitStrategy = require('./passport/fitbitConfig.js');
const passport = require('passport');
const fitbitHelper = require('./handlers/fitbitHelper.js')


app.use('/', express.static(path.join(__dirname, '../client/public')));


app.use(cookieParser());
app.use(bodyParser());

app.use(session({ secret: 'keyboard cat' }));

app.use(passport.initialize());
app.use(passport.session({
  resave: false,
  saveUninitialized: true
}));

passport.use(fitbitStrategy);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

var fitbitAuthenticate = passport.authenticate('fitbit', {
  successRedirect: '/auth/fitbit/success',
  failureRedirect: '/auth/fitbit/failure'
});



app.get('/api/sendEmail', sendEmail);

app.get('/api/shoppingcart', function(req, res, next) {
  console.log('get api shoppingcart received!!!')
  res.status(200).send(req.session.shoppingcart)
});

app.post('/api/shoppingcart', function(req, res, next) {
  req.session.shoppingcart = req.body.params
  console.log(req.session)
  res.status(200).send('works!')
});


app.post("/charge", (req, res) => {
  
  console.log(req.body, 'req.body req.body req.body req.body req.body' )
  sendEmail(req, res)
  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken,
    
  })
  .then(customer => {
    stripe.charges.create({
        amount: req.body.amount,
        description: "Sample Charge",
        currency: "usd",
        customer: customer.id
      })
    .then((charge) => {
      console.log(charge, 'CHARGE CHARGE CHARGE')
      res.status(200).send();
    })
  })
});

app.get('/auth/fitbit',
  passport.authenticate('fitbit', { scope: ['activity','heartrate','location','profile'] }
));

app.get('/auth/fitbit/callback', fitbitAuthenticate);

app.get('/api/fitbit', (req, res) => {
	res.send(fitbitHelper(req.user.profile.id, req.user.accessToken));
})


app.post('/api/park/tenDayForecast', tenDayForecast.getForecast);

app.get('/api/trails', (req, res) => {
	trails(req.query.parkId).then((trails) => {
		res.status(200).send(trails);
	})
})

app.get('/api/historicalWeatherData', getHistoricalData);

app.get('/api/park/lodgings', (req, res) => {
	googleHelpers.places({lat: req.query.lat, lng: req.query.lon})
	.then((result) => {
		res.status(201).send(result);
	})
})

app.get('/api/park/', (req, res) => {
  console.log(req.session.id, 'SESSION ID IS THIS ONE')
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

  console.log(req.query.filters)

	const filtersState = req.query.filters.map((filter) => {
		return JSON.parse(filter)
	}) 

	const filtersArray = filtersState.filter((filter) => {
		return filter.isSelected === true && filter.name !== 'Most Visited' && filter.name !== 'Least Visited';
	})

	const filterNames = filtersArray.map((filter) => {
		return filter.name
	})

	if (filterNames.length > 0) {
		filters.activities(filterNames).then((response) => {
			res.status(200).send(response);
		})
		.catch((error) => {
			console.log(error)
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
