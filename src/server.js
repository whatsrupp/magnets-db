var express = require('express')
var router = express()

require('dotenv').load();
require('./setupMongoose').setupMongoose();

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
router.use(bodyParser.json()); // Send JSON responses

var graphqlHTTP = require('express-graphql');

import schema from './graphQLSchema'
import { connect } from 'tls';

router.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

router.listen(8000, function () {
  console.log('Magnets Backend is set up on port 8000')
})

