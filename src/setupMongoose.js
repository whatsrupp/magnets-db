var mongoose = require('mongoose');

function selectDatabaseUrl(){
    return 'mongodb://127.0.0.1/magnets_development'
}

exports.setupMongoose = function() {
    var mongoDB = selectDatabaseUrl();
    mongoose.connect(mongoDB);
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

}
