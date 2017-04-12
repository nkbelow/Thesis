const express = require('express');

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
