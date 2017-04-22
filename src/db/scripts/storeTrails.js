const database = require('../index.js');
const data = require('../../../data/ourNationalParks.js');
const Promise = require('bluebird');
const trailsHelper = require('../../server/handlers/trailsHelper.js')
const polygon = require('../../../pointInPolygon.js')

const db = database.db;


const storeTrails = function() {
  data.ourNationalParks.forEach(function(park) {
    trailsHelper.trails({lat: park.latitude, lng: park.longitude}).then(function(trails) {   
      trails.forEach(function(trail) {
        trail.name = trail.name || null;
        trail.city = trail.city || null;
        trail.state = trail.state || null;
        trail.lat = trail.lat || null;
        trail.lon = trail.lon || null;
        trail.activities = trail.activities || [{}];
        trailLength = (!!trail.activities[0].length === false) ? 0 : trail.activities[0].length;
        trailDescription = (!!trail.activities[0].description === false) ? null : trail.activities[0].description;
        trail.directions = trail.directions || null;
        park.parkcode = park.parkcode || null;
        const queryParameters = [trail.name, trail.city, trail.state, trail.lat, trail.lon, trailLength, trailDescription, trail.directions, park.parkcode]
        db.query('INSERT INTO trails (name, city, state, latitude, longitude, length, description, directions, park_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, (SELECT id from parks WHERE parkcode=$9))', queryParameters)
      })
    })
  })
}

module.exports = {
  storeTrails: storeTrails
}

storeTrails();