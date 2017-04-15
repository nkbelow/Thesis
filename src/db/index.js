var promise = require('bluebird');
var createTables = require('./tablesConfig.js');
var databaseName = 'thesis';
var options = {
	promiseLib: promise
};
// let db;
var pgp = require('pg-promise')();
const database = 'thesis';

// var database = pgp({})

// comment out when you run test
// database.query('SELECT count(*) FROM pg_catalog.pg_database WHERE DATNAME = \'thesis\'').then(function (response) {
//   const databaseExists = parseInt(response[0].count)
//   if(!databaseExists) {
//     console.log('create database')
// 	 return database.query('CREATE DATABASE thesis'); 
//   } else {
//     return databaseExists;
//   }
// }).then(function () {
// 	pgp.end();
// 	db = pgp({database: databaseName})
// 	return db;
// }).then(function(db) {
//   createTables(db); 
//   console.log('tables')
//   pgp.end();
//   return db;
// })



// var connection = {
// 	  host: 'localhost',
//     port: 5432,
//     database: databaseName,
//     user: '',
//     password: ''
// }
// re-establish a connection to export as a module
// will come back to re-factor to connecting pgp once

// module.exports.db = pgp(connection)
// pgp.end()


// NEW CODE STARTS HERE
  console.log('database url ' + process.env.DATABASE_URL);
  console.log('heroku url ' + process.env.HEROKU);
if (process.env.DATABASE_URL) {
  pgp.pg.defaults.ssl = true;

  let db = pgp(process.env.DATABASE_URL);

  module.exports.db = db;
} else {
  let db = pgp({
    database: database
  });

  module.exports.db = db;
}


