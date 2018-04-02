var express = require('express')
var router = express()

require('dotenv').load();
require('./setupMongoose').setupMongoose();

bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
router.use(bodyParser.json()); // Send JSON responses

router.listen(8000, function () {
  console.log('Magnets Backend is set up on port 8000')
})

