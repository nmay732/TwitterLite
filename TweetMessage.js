exports.TweetMessage = function(req, res){
var message=req.query.Message;
  var c ={username:loginUser,tweet:message};
     Tweet.push(c);
     for(var i=0;i<Tweet.length;i++)
      console.log(Tweet[i].tweet);
     res.redirect('/dashboard');
}