const database = require('../index.js');
const parks = require('../../../data/parksWithCampgrounds.js').parks
const ourParks =require('../../../data/ourNationalParks.js')

const db = database.db;

exports.storeParks = function() {
	ourParks.storeParks();
}

exports.storeCampgrounds = function() {
	for (let i = 0; i<parks.length; i++) {
		let park = parks[i];
		if (park.campgrounds) {
		for (campground of park.campgrounds) {
		let name = campground.name
		let lat = Number(campground.lat)
		let lon = Number(campground.lon)
		
		let queryParameters = [name, park.parkCode, lat, lon]
        db.query('INSERT INTO campgrounds (name, park_id, latitude, longitude) VALUES ($1, (SELECT id FROM parks WHERE parkcode=$2), $3, $4)', queryParameters)
    }
}
	}
}

exports.storeCampgrounds()
