var Post = require('./postModel');

var postController = {
    getPosts: function(req, res){
        Post.find({}, function(err,posts){
            if(err) {
                res.json({status: false, error: "Something went wrong"})
                return;
            }
            res.json({status:true, post: posts})
        })
    },
    postPost: function(req, res){
        var post = new Post(req.body);
        post.save(function(err, post){
          if(err) {
            res.json({status: false, error: err});
            return;
          }
          res.json({status: true, message: "Post Saved!!"});
        });
    },
}

module.exports = postController