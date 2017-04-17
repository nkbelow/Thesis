const db = require('../index.js').db;

module.exports = (id) => {
	console.log(id)
	let query1 = 'SELECT * from campgrounds where park_id = $1';
	return db.tx(t => {
		return t.any(query1, id)
	})
	.then(data => {
		console.log('this is the data', data);
		return data;
	})
	.catch(err => {
    console.log(err, 'campgrounds error')
  }); 
}