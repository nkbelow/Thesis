module.exports = function (db) {
	console.log('start table')
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
				name VARCHAR(25), \
				park_id INT references parks(id), \
				location DECIMAL [] \
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
	}).then(function () {
		console.log('start campgrounds table')
		return db.query(' \
			CREATE TABLE IF NOT EXISTS campgrounds ( \
			id SERIAL PRIMARY KEY, \
			name VARCHAR(25), \
			park_id INTEGER references parks(id),  \
			campground_id INTEGER references campgrounds(id),  \
			location DECIMAL [] \
			); \
		')
	}).then(function() {
		console.log('start trails table')
			return db.query (' \
				CREATE TABLE IF NOT EXISTS trails ( \
				id SERIAL PRIMARY KEY, \
				name VARCHAR(50), \
				latitude DECIMAL(25), \
				longitude DECIMAL (25), \
				length DECIMAL (25), \
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