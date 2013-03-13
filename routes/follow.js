exports.follow= function(req, res){
	//database
	var loginUser='';
	//database
	followers='';
var username=req.query.followingusername;
          if(loginUser!=username) 
         followers.push({username:username,follower:loginUser});
         res.redirect('/dashboard');    
  }