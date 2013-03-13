
exports.dashboardhandler= function(req, res){
	var content='';

   var choice=req.query.decision;
    if(choice ==1)
    {
       content+='<h1> Please enter a Message you want to tweet </h1> </br>';
       content += '<form method="get" action="/TweetMessage">' +
        'Tweet: <input type="text" name="Message"/><br/>' +
        '<input type="submit" value="Send"/>'
        '</TweetMessage></br>';
            res.send(content);
    }
   else if(choice==2){
    content+='<h1> Please enter a friend name that you want to follow</h1> </br>';
  content += '<form method="get" action="/follow">' +
        'Follow: <input type="text" name="followingusername"/><br/>' +
        '<input type="submit" value="Follow"/>'
        '</follow></br>';
            res.send(content); }

      else if (choice==3){
        content+='<h1> Please enter a friend name that you want to unfollow</h1> </br>';
       content += '<form method="get" action="/unfollow">' +
        'Unollow: <input type="text" name="unfollowingusername"/><br/>' +
        '<input type="submit" value="Unfollow"/>'
        '</unfollow></br>';
            res.send(content); 
      }

      else if(choice==4){
      res.redirect('/profile') ;}
      else if (choice==5){
        loginCount=0;
        res.redirect('/logout'); 
      }

      else
        res.redirect('/dashboard');   
}