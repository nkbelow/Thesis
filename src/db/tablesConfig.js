module.exports = function (db) {
	console.log('start parks table')
	return db.query('\
		CREATE TABLE IF NOT EXISTS parks ( \
		id SERIAL PRIMARY KEY, \
		parkcode VARCHAR(255),\
		name VARCHAR(50), \
		description VARCHAR(500), \
		popularity VARCHAR(255), \
		size INTEGER, \
		latitude DOUBLE PRECISION, \
		longitude DOUBLE PRECISION \
		); \
	').then(function () {
		console.log('start activities table')
		return db.query('\
				CREATE TABLE IF NOT EXISTS activities ( \
				id SERIAL PRIMARY KEY, \
				name VARCHAR(255), \
				park_id INTEGER references parks(id) \
				); \
			')
	}).then(function () {
		console.log('start cg table')
		return db.query(' \
				CREATE TABLE IF NOT EXISTS campgrounds ( \
				id SERIAL PRIMARY KEY, \
				name VARCHAR(255), \
				park_id INT references parks(id), \
				latitude DOUBLE PRECISION, \
				longitude DOUBLE PRECISION \
				); \
			')
	}).then(function () {
		console.log('start images table')
		return db.query(' \
			CREATE TABLE IF NOT EXISTS images ( \
			id SERIAL PRIMARY KEY, \
			url VARCHAR(50) \
			); \
		')
	}).then(function() {
		console.log('start trails table')
			return db.query (' \
				CREATE TABLE IF NOT EXISTS trails ( \
				id SERIAL PRIMARY KEY, \
				name VARCHAR(50), \
				city VARCHAR (25), \
				state VARCHAR (25), \
				latitude DOUBLE PRECISION, \
				longitude DOUBLE PRECISION, \
				length DOUBLE PRECISION, \
				description VARCHAR (5000), \
				directions VARCHAR (5000), \
				activities VARCHAR (100) [], \
				park_id INTEGER references parks(id), \
				campground_id INTEGER references campgrounds(id) \
				); \
			')
		}).then(function () {
		console.log('start lodging table')
		return db.query('\
				CREATE TABLE IF NOT EXISTS lodging ( \
				id SERIAL PRIMARY KEY, \
				name VARCHAR(255), \
				park_id INTEGER references parks(id) \
				); \
			')
})} 