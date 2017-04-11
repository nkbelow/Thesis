const database = require('../index.js');
const data = require('../../../data/ourNationalParks.js');
const Promise = require('bluebird');
const trailsHelper = require('../../trailsHelper.js')

// const db = database.db;


data.ourNationalParks.forEach(function(park) {
  new Promise(trailsHelper.trails({lat: park.latitude, lng: park.longitude})).then(function() {
    db.query('INSERT INTO trails (name, lat, lng, park_id) VALUES ($1, $2, $3)', [trails.])
  })

})
