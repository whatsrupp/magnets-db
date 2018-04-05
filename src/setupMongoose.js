var mongoose = require('mongoose');

function selectDatabaseUrl(){
    return 'mongodb://127.0.0.1/magnets_development'
}

var db
exports.setupMongoose = function() {
    var mongoDB = selectDatabaseUrl();
    mongoose.connect(mongoDB);
    mongoose.Promise = global.Promise;
    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    return db
}

exports.db = db