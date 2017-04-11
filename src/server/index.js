const express = require('express');

const dotenv = require('dotenv').config();

const trailsHelper = require('./handlers/trailsHelper.js')

const app = express();
const port = 3000;

const coordinates = {
  latitude: 40.49354575,
  longitude: -121.4075993
}

app.get('/', (req, res) => {
  console.log(trailsHelper.trails({lat: coordinates.latitude, lng: coordinates.longitude}));
  res.status(200).send('hello world!!!');
});


const server = app.listen(process.env.PORT || port, () => {
  console.log('App is listening to port ' + port);
});

module.exports = server;
