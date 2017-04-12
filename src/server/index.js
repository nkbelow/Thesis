const express = require('express');
const landmarks = require('./handlers/landmarksHelper');
const campgrounds = require('./handlers/campgroundsHelper');
const geocode = require('./handlers/gHelpers');
const util = require('./utilities');
const fs = require('fs');
const path = require('path');



const dotenv = require('dotenv').config();

const trail = require('../db/scripts/storeTrails.js')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  trail.storeTrails();
  res.status(200).send('hello world!!!');
});


app.listen(process.env.PORT || port, () => {
  console.log('App is listening to port ' + port);
});

module.exports = app;

app.get('/campgrounds', (req, res) => {

		campgrounds.csvToArray(function(campgroundsData) {
			campgrounds.checkBoundaries(campgroundsData, function (boundaries) {
				res.send(boundaries);
			})
})
	});
	



// testing and development routes

app.get('/landmarks', (req, res) => {
	let landmarksData = landmarks.landmarkQuery();
	console.log(landmarksData.length)
	landmarks.geocodeLandmarks(landmarksData, function(data) {
		res.send(data)
	});
});


	// geocode.geocode(landmarksData, function(data) {
	// 	console.log(data);
	// 	res.send(data);
	// })



