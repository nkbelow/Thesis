var express = require('express');
var app = express()

var port = 3000;

app.get('/', function (req, res) {
  res.send('hello world!!!')
})

app.listen(process.env.PORT || port, function() {
  console.log('App is listening to port ' + port)
})

