const express = require('express');
// const landmarks = require('./handlers/landmarksHelper');
// const campgrounds = require('./handlers/campgroundsHelper');
// const geocode = require('./handlers/gHelpers');
// const util = require('./utilities');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv').config();
// const trail = require('../db/scripts/storeTrails.js')
const bodyParser = require('body-parser');
const path = require('path');
// const cg = require('../db/scripts/storeCampgrounds')
const app = express();
const port = 3000;
// const db = require('../db/index.js');
// const data = require('../../data/ourNationalParks.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, '../client/public')));

// app.get('/api/parks', (req, res) => {
// 	// db.db.query('SELECT * from parks')
// 	// .then((result) => {
// 	// 	res.status(201).send(result)
// 	// })
// 	// .catch((err) => {
// 	// 	res.status(404).send('There was an error retrieving all the parks data');
// 	// })
// // 	res.send(data.ourNationalParks);

// });

// app.get('/api/park', (req, res) => {
// 	// db.db.query('SELECT * from parks WHERE parkcode = $1', [req.query.parkcode])
// 	// .then((result) => {
// 	// 	res.status(201).send(result)
// 	// })
// 	// .catch((err) => {
// 	// 	res.status(404).send('There was an error retrieving park data');
// 	// })
// // 	var parks = data.ourNationalParks;
// // 	for(var i = 0; i < parks.length; i++){
// // 		if(parks[i].parkCode === req.query.parkcode){
// // 			res.status(200).send(parks[i]);
// // 		}
// // 	}
// })
  
app.get('/', (req, res) => {
  res.status(200).send('hello world!!!');
//   cg.storeParks();
//   cg.storeCampgrounds();

});

// app.get('*', (req, res) => {
// 	res.redirect('/');
// })


app.listen(process.env.PORT || port, () => {
  console.log('App is listening to port ' + port);
});

module.exports = app;

// app.get('/campgrounds', (req, res) => {

//   campgrounds.csvToArray(function(campgroundsData) {
// 		campgrounds.checkBoundaries(campgroundsData, function (boundaries) {
//               res.send(boundaries);
//          })
//     })
// });
	



// // testing and development routes

// app.get('/landmarks', (req, res) => {
// 	let landmarksData = landmarks.landmarkQuery();
// 	console.log(landmarksData.length)
// 	landmarks.geocodeLandmarks(landmarksData, function(data) {
// 		res.send(data)
// 	});
// });


// 	// geocode.geocode(landmarksData, function(data) {
// 	// 	console.log(data);
// 	// 	res.send(data);
// 	// })



