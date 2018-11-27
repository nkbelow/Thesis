const db = require('../index.js').db;

const insertUser = (id, token, steps, name) => {
	return db.query('INSERT INTO fitbit_users (user_id, average_steps, name) VALUES($1, $2, $3)', [id, steps, name])
  .then(data => {
      console.log(data); // printing successful transaction output;
  })
  .catch(error => {
      console.log(error); // printing the error;
  });
}

const updateUser = (id, token, steps) => {
	return db.query('UPDATE fitbit_users SET average_steps=$1 WHERE user_id=$2) VALUES($1, $2) ',[steps, id])
  .then(data => {
      console.log(data); // printing successful transaction output;
  })
  .catch(error => {
      console.log(error); // printing the error;
  });
}

const findUser = (id) => {
	return db.query('SELECT * from fitbit_users WHERE user_id = $1', [id])
  .then(data => {
      return data;
  })
  .catch(error => {
      console.log(error); // printing the error;
  });
}

module.exports = {
	updateUser,
	insertUser,
	findUser
}