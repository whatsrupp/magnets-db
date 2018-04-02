var express = require('express')
var app = express()

require('dotenv').load();
require('./setupMongoose').setupMongoose();

app.get('/', function (req, res) {
  res.send('Magnets')
})

app.listen(8000, function () {
  console.log('Magnets Backend is set up on port 8000')
})
