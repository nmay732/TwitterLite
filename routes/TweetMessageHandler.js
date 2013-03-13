exports.TweetMessageHandler = function(req, res){
	var Tweet=[
      {username:'bob',  tweet:"How are you ?"},
      {username:'alice',tweet:"What are you doing ?"},
      {username:'jack', tweet:"Are you going to party tonight?"},
      {username:'mick', tweet:"Are you going tonight?"}
  ]
  
var message=req.query.Message;
  var c ={username:loginUser,tweet:message};
     Tweet.push(c);

     for(var i=0;i<Tweet.length;i++)
      console.log(Tweet[i].tweet);
    res.redirect('/dashboard');
}