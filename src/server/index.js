const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const pgSession = require('connect-pg-simple')(session);
const cookieParser = require('cookie-parser');


const db = require('../db/index.js');
const data = require('../db/activities_parks_data/ourNationalParks.js');
const individualParkData = require('../db/models/getIndividualParksInfo.js');
const campgroundsData = require('../db/models/getCampgroundsInfo.js');
const trails = require('../db/models/getTrailsInfo.js');
const handlers = require('./handlers/handlers.js')

const app = express();
const port = process.env.PORT || 3000;

const keyPublishable = process.env.STRIPE_PUBLISHABLE_KEY;
const keySecret = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(keySecret);
const fitbitStrategy = require('./passport/fitbitConfig.js');
const passport = require('passport');
const fitbitHelper = require('./handlers/fitbitHelper.js')

app.use('/', express.static(path.join(__dirname, '../client/public')));

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



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
app.use(passport.session());

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

app.get('/auth/fitbit',
  passport.authenticate('fitbit', { scope: ['activity','heartrate','location','profile'] }
));

app.get('/auth/fitbit/callback', fitbitAuthenticate);

app.get('/api/fitbit', (req, res) => {
<<<<<<< HEAD
	if(req.user){
		fitbitHelper(req.user.profile.id, req.user.accessToken)
		.then((result)=> {
			res.status(200).send('' + result);
		})		
	} else {
		res.status(200).send();
	}

||||||| merged common ancestors
	console.log(req.user, 'this the user');
	fitbitHelper(req.user.profile.id, req.user.accessToken)
	.then((result)=> {
		res.status(200).send('' + result);
	})
=======
	fitbitHelper(req.user.profile.id, req.user.accessToken)
	.then((result)=> {
		res.status(200).send('' + result);
	})
>>>>>>> feat add extra google places functionality
})




app.get('/api/sendEmail', handlers.emailHandler);

app.get('/api/shoppingcart', function(req, res, next) {
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

app.get('/api/parks/getparksbyactivity', (req, res) => {
  handlers.getParkIdsByActivities(JSON.parse(req.query.activitiesHoverState)).then((results) => {
    res.status(200).send(results)
  })
})

app.post('/api/park/tenDayForecast', handlers.tenDayWeatherForecast);


app.get('/api/trails', (req, res) => {
	trails(req.query.parkId).then((trails) => {
		res.status(200).send(trails);
	})
})

app.get('/api/historicalWeatherData', handlers.historicalWeatherData);

app.get('/api/park/lodgings', (req, res) => {
	handlers.gHandlers.places({lat: req.query.lat, lng: req.query.lon})
	.then((result) => {
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
		handlers.filters.activities(filterNames).then((response) => {
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
