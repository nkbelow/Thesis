module.exports = function (db) {
	console.log('start parks table')
	return db.query('\
		CREATE TABLE IF NOT EXISTS parks ( \
		id INTEGER PRIMARY KEY, \
		parkcode VARCHAR(255),\
		name VARCHAR(50), \
		description VARCHAR(500), \
		popularity VARCHAR(255), \
		size INTEGER, \
		latitude DOUBLE PRECISION, \
		longitude DOUBLE PRECISION, \
		visitors INTEGER \
		); \
	').then(function () {
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
				name VARCHAR (100), \
				city VARCHAR (50), \
				state VARCHAR (50), \
				latitude DOUBLE PRECISION, \
				longitude DOUBLE PRECISION, \
				length DOUBLE PRECISION, \
				description VARCHAR (5000), \
				directions VARCHAR (3000), \
				park_id INTEGER references parks(id) \
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
		}).then(function () {
			console.log('start activities table')
			return db.query('\
				CREATE TABLE IF NOT EXISTS activities ( \
				id INTEGER PRIMARY KEY, \
				activity VARCHAR(255) \
				); \
			')
		}).then(function () {
			console.log('start activities_parks table')
			return db.query('\
				CREATE TABLE IF NOT EXISTS activities_parks ( \
				park_id INTEGER NOT NULL, \
				activity_id INTEGER NOT NULL \
				); \
			')
		}).then(function () {
			console.log('start session table')
			return db.query('\
				CREATE TABLE IF NOT EXISTS session ( \
				"sid" varchar NOT NULL COLLATE "default", \
				"sess" json NOT NULL, \
				"expire" timestamp(6) NOT NULL \
				); \
			')
		})
	} 