var promise = require('bluebird');
var createTables = require('./tablesConfig.js');
var databaseName = 'thesis';
var options = {
	promiseLib: promise
};

var pgp = require('pg-promise')(options);

var database = pgp({})

database.query('DROP DATABASE IF EXISTS thesis').then(function () {
	return database.query('CREATE DATABASE thesis')
}).then(function () {
	pgp.end();
	db = pgp({database: databaseName})
	return db;
	
}).then(function(db) {
	createTables(db);
	pgp.end();
	return db
})


var connection = {
	host: 'localhost',
    port: 5432,
    database: databaseName,
    user: '',
    password: ''
}
// re-establish a connection to export as a module
// will come back to re-factor to connecting pgp once

module.exports.db = pgp(connection)
pgp.end()
