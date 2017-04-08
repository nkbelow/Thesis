const express = require('express');
const app = express()

const port = 3000;

app.get('/', function (req, res) {
  res.status(200).send('hello world!!!')
})


let server = app.listen(process.env.PORT || port, function() {
  console.log('App is listening to port ' + port)
});

module.exports = server;

