const db = require('../index.js').db;

module.exports = (parkCode) => {
  console.log('park code: ',parkCode)
  let query1 = 'SELECT activity FROM activities \
   inner join activities_parks on \
   (activities_parks.activity_id = activities.id AND activities_parks.park_id \
   = (select id from parks where parkcode = $1))'; 
  let query2 = 'SELECT * FROM parks where parkcode =$1';
  // let query3 = 'SELECT * FROM campground where park_id = $1';
  // let query4 = 'SELECT * FROM trails where park_id = $1';
  return db.tx(t => {
    return t.batch([
      t.any(query1, parkCode),
      t.any(query2, parkCode)
      ])
  })
  .then(data => {
    console.log('this is the data', data);
    return data;
  })
  .catch(err => {
    console.log(err, 'this is the error')
  });   
}