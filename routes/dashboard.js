<<<<<<< HEAD
var lib=require('../lib');
 var users=lib.users;
 var followers=lib.followers;
 var Tweet=lib.Tweet;
 
exports.dashboard = function(req, res){
   var loginUser=null;

	var content='<h1> Welcome to User Dashboard </h1>';

  
    content+='User :'+loginUser+'</br>';
    var followerlist=[{username:null,follower:null}];
    var followinglist=[{username:null,follower:null}];
    var usertweets=[{username:null,tweet:null}];
    var followerstweets=[{username:null,tweet:null}];
    var followingstweets=[{username:null,tweet:null}];
   
   // get followerlist
    for(var i=0;i<followers.length;i++)
       if(followers[i]!=null)
      if(followers[i].username==loginUser)
        followerlist.push(followers[i]);

    // for User Tweet History
      for(var i=0;i<Tweet.length;i++)
      if(Tweet[i].username==loginUser)
        usertweets.push(Tweet[i]);

     // for followerstweet History
      for(var i=0;i<followerlist.length;i++)
        for(var j=0;j<Tweet.length;j++)
           if(followerlist[i].follower===Tweet[j].username)
               followerstweets.push(Tweet[j]);

    

      //get the followingList
      for(var i=0;i<followers.length;i++)
        if(followers[i]!=null)
      if(followers[i].follower==loginUser)
        followinglist.push(followers[i]);

      // for following list
     for(var i=0;i<followinglist.length;i++)
        for(var j=0;j<Tweet.length;j++)
           if(followinglist[i].username===Tweet[j].username)
               followingstweets.push(Tweet[j]);



 
      content+='<h2> User Tweet History </h2> </br>';
       for(var i=0;i<usertweets.length;i++)
        if(usertweets[i].username!=null)
        content+=usertweets[i].tweet+'</br>';

      content+='<h2> Followers List </h2> </br>';
        for(var i=0;i<followerlist.length;i++)
          if(followerlist[i].username!=null)
            content+=followerlist[i].follower+'</br>';

      content+='<h2> Followers Tweets History</h2> </br>';
        for(var i=0;i<followerstweets.length;i++)
          if(followerstweets[i].username!=null)
            content+=followerstweets[i].username+'    :    '+followerstweets[i].tweet+'</br>';

       content+='<h2> Following List </h2> </br>';
        for(var i=0;i<followinglist.length;i++)
          if(followinglist[i].username!=null)
            content+=followinglist[i].username+'</br>'; 

       content+='<h2> Followings Tweets History</h2> </br>';
        for(var i=1;i<followingstweets.length;i++)
            content+=followingstweets[i].username+'  :     '+followingstweets[i].tweet+' </br>';
             

            content+='</br>';
            content+='</br>';
            content+='</br>';

       content+=' Please make a decision of what you want to do </br>';
       content+=' 1 for Tweet a message </br>';
       content+=' 2 for follow a friend </br>';
       content+=' 3 for unfollow a friend </br>';
       content+=' 4 for go into user profile </br>';
       content+=' 5 for logout </br>';
  
=======

exports.dashboard = function(req, res){

login_handler = require('./login-handler');

var users=[
      {username:'bob',password:'b'},
      {username:'alice',password:'a'},
      {username:'jack',password:'j'},
      {username:'mick',password:'m'} 
      ]

    // we can call addfollowers function to add more followers
    // add by Billy
var followers=[
    {username:'bob',follower:'mick'},
    {username:'bob',follower:'alice'},
    {username:'alice',follower:'mick'},
    {username:'alice',follower:'bob'},
    {username:'jack',follower:'mick'},
    {username:'jack',follower:'bob'},
    {username:'mick',follower:'jack'}
    ]

// we may add more tweet by enter text in broser 
// we need this function
var Tweet=[
    {username:'bob',  tag: "alice", text:"@alice How was class today?"},
    {username:'bob',  tag: null, text:"Too sick to go to class today :("},
    {username:'alice', tag: null, text:"I am so happy!!!"},
    {username:'alice', tag: null, text:"I love my sorority sisters!!!"},
    {username:'jack', tag: null, text:"Dinner at bubs"},
    {username:'jack', tag: null, text:"Anyone want to go to High Horse tonight?"},
    {username:'mick', tag: null, text:"The forest speaks to me sometimes.."},
    {username:'mick', tag: null, text:"I am always listening"}
    ]

var loginUser=null; //TODO: Get users from cookies

//Until we get the flash function working we won't know what user is logged in. change it manually here
res.render('dashboard.ejs', {user: 'bob', followers: followers, tweets: Tweet});
>>>>>>> 551c0017c0cc7606aa01ba75d3ffe70219d8ece2

}
