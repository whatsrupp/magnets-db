var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema(
  {
    title: {type: String, required: true, max: 100},
    content: {type: String, required: true},
    updated: { type: Date, default: Date.now },
  }
);

var PostModel = mongoose.model('Post', PostSchema);
export default PostModel