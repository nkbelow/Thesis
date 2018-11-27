const db = require('../index.js').db;

module.exports = (id) => {
  return db.query('SELECT * FROM trails WHERE park_id = $1', id)
  .then((trails) => {
    return trails;
  })
  .catch((err) => {
    console.log(err);
  })
}