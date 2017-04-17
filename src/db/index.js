const promise = require('bluebird');
const createTables = require('./tablesConfig.js');
const databaseName = 'thesis';
const parks = require('../../data/ourNationalParks.js');
const options = {
	promiseLib: promise
};
const pgp = require('pg-promise')(options);

if (process.env.DATABASE_URL) {
  pgp.pg.defaults.ssl = true;

  let db = pgp(process.env.DATABASE_URL);
  module.exports.db = db;
} 
else {
  let database = pgp({})
  // check if database exists
  database.query('SELECT count(*) FROM pg_catalog.pg_database WHERE DATNAME = \'thesis\'').then(function (response) {
    
    const databaseExists = parseInt(response[0].count)
    
    if(!databaseExists) {
     return database.query('CREATE DATABASE thesis'); 
    } else {
      return databaseExists;
    }

  // instantiate a new instance with the created database thesis
  }).then(function () {

    return db = pgp({database: databaseName})
  
  // create tables, run script in other file (see above)
  }).then(function(db) {

    return createTables(db)

  // instantiate final connection with the updated database
  }).then(function() {

    const connection = {
        host: 'localhost',
        port: 5432,
        database: databaseName,
        user: '',
        password: ''
    }

    const db = pgp(connection);
    module.exports.db = db;
    return db

  // run any scripts to store data
  }).then(function() {

      parks.ourNationalParks.forEach((park) => {
        db.query('INSERT INTO parks(id, parkcode, name, description, latitude, longitude, visitors) VALUES($1, $2, $3, $4, $5, $6, $7)', [ park['id'], park['parkcode'], park['fullName'], park['description'], park['latitude'], park['longitude'], park['visitors']])   
      });

  })

}


