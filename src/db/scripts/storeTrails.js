const database = require('../index.js');
const data = require('../../../data/ourNationalParks.js');
const Promise = require('bluebird');
const trailsHelper = require('../../server/handlers/trailsHelper.js')
const polygon = require('../../../pointInPolygon.js')

const db = database.db;


exports.storeTrails = function() {
  data.ourNationalParks.forEach(function(park) {
    trailsHelper.trails({lat: 44.30777545, lng: -68.30063316}).then(function(trails) {   
      trails.forEach(function(trail) {
        trail.name = trail.name || null;
        trail.city = trail.city || null;
        trail.state = trail.state || null;
        trail.lat = trail.lat || null;
        trail.lon = trail.lon || null;
        trail.activities = trail.activities || [{}];
        trailLength = (!!trail.activities[0].length === false) ? null : trail.activities[0].length;
        trailDescription = (!!trail.activities[0].description === false) ? null : trail.activities[0].description;
        trail.directions = trail.directions || null;
        park.parkCode = trail.directions || null;
        activities = [];
        for (let i = 0; i < trail.activities.length; i++) {
          activities.push(trail.activities[i].activity_type_name);
        };
        const queryParameters = [trail.name, trail.city, trail.state, trail.lat, trail.lon, trailLength, trailDescription, trail.directions, activities, park.parkCode]
        db.query('INSERT INTO trails (name, city, state, latitude, longitude, length, description, directions, activities, park_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, (SELECT id from parks WHERE parkcode=$10))', queryParameters)
      })
    })
  })
}