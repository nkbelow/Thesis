const db = require('../index.js').db;

module.exports = (id) => {
  return db.query('SELECT * FROM trails WHERE id = $1', id)
  .then((trails) => {
    console.log(trails);
    return trails;
  })
  .catch((err) => {
    console.log(err);
  })
}