var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    text: {type: String, required: true, max: 100},
    updated: { type: Date, default: Date.now },
  }
);

var PostModel = mongoose.model('Post', PostSchema);
module.exports = PostModel;