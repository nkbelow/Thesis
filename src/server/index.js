const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const db = require('../db/index.js');
const data = require('../../data/ourNationalParks.js')



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
	// db.db.query('SELECT * from parks WHERE parkcode = $1', [req.query.parkcode])
	// .then((result) => {
	// 	res.status(201).send(result)
	// })
	// .catch((err) => {
	// 	res.status(404).send('There was an error retrieving park data');
	// })
	var parks = data.ourNationalParks;
	for(var i = 0; i < parks.length; i++){
		if(parks[i].parkCode === req.query.parkcode){
			res.status(200).send(parks[i]);
		}
	}
})

app.get('*', (req, res) => {
	res.redirect('/');
})

app.listen(port, () => {
  console.log('App is listening to port ' + port);
});

module.exports = app;
