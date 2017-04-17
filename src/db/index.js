const promise = require('bluebird');
const createTables = require('./tablesConfig.js');
const databaseName = 'thesis';
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
    pgp.end();
    db = pgp({database: databaseName})
    return db;
  }).then(function(db) {
    createTables(db); 
    pgp.end();
    return db;
  })

  const connection = {
      host: 'localhost',
      port: 5432,
      database: databaseName,
      user: '',
      password: ''
  }

  module.exports.db = pgp(connection);
  pgp.end();
}


