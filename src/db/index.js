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

  database.query('SELECT count(*) FROM pg_catalog.pg_database WHERE DATNAME = \'thesis\'').then(function (response) {
    
    const databaseExists = parseInt(response[0].count)
    
    if(!databaseExists) {
     return database.query('CREATE DATABASE thesis'); 
    } else {
      return databaseExists;
    }

  }).then(function () {

    db = pgp({database: databaseName})
    return db;

  }).then(function(db) {

    return createTables(db)

  }).then(function() {

    const connection = {
        host: 'localhost',
        port: 5432,
        database: databaseName,
        user: '',
        password: ''
    }

    module.exports.db = pgp(connection);
    pgp.end();

  }).then(function() {

      parks.ourNationalParks.forEach((park) => {
        db.query('INSERT INTO parks(id, parkcode, name, description, latitude, longitude, visitors) VALUES($1, $2, $3, $4, $5, $6, $7)', [ park['id'], park['parkcode'], park['fullName'], park['description'], park['latitude'], park['longitude'], park['visitors']])   
      });
      
  })

}


