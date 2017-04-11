const express = require('express');
const dotenv = require('dotenv').config();
const trail = require('../db/scripts/storeTrails.js')
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const db = require('../db/index.js');

app.use(express.static(path.join(__dirname, '../client/public')));
app.get('/', (req, res) => {
  trail.storeTrails();
  res.status(200);
});

app.get('/api/parks', (req, res) => {
	db.db.query('SELECT * from parks')
	.then((result) => {
		res.status(201).send(result)
	})
	.catch((err) => {
		res.status(404).send('There was an error retrieving park data');
	})
});

app.listen(process.env.PORT || port, () => {
  console.log('App is listening to port ' + port);
});

module.exports = app;
