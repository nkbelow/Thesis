const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const db = require('../db/index.js');
const data = require('../../data/ourNationalParks.js');
const individualParkData = require('../db/models/getIndividualParksInfo.js');


app.use('/', express.static(path.join(__dirname, '../client/public')));



app.get('/', (req, res) => {
  res.status(200).send('hello world!!!');

});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/parks', (req, res) => {
	// db.db.query('SELECT * from parks')
// 	.then((result) => {
// 		res.status(201).send(result)
// 	})
// 	.catch((err) => {
// 		res.status(404).send('There was an error retrieving all the parks data');
// 	})

	res.send(data.ourNationalParks);


});

app.get('/api/park', (req, res) => {
	individualParkData(req.query.parkcode)
	.then((data) => {
		console.log(data);
		let park = data;
		res.status(200).send(data);
	});
})

app.get('*', (req, res) => {
	res.redirect('/');
})

app.listen(port, () => {
  console.log('App is listening to port ' + port);
});

module.exports = app;


