exports.dashboard = function(req, res){
 var users=[
      {username:'bob',password:'b'},
      {username:'alice',password:'a'},
      {username:'jack',password:'j'},
      {username:'mick',password:'m'} 
      ]

    // we can call addfollowers function to add more followers
    // add by Billy
    var followers=[
    {username:'bob',follower:'alice'},
    {username:'bob',follower:'jack'},
    {username:'bob',follower:'mick'},
    ]

// we may add more tweet by enter text in broser 
// we need this function
  var Tweet=[
      {username:'bob',  tweet:"How are you ?"},
      {username:'alice',tweet:"What are you doing ?"},
      {username:'jack', tweet:"Are you going to party tonight?"},
      {username:'mick', tweet:"Are you going tonight?"}
  ]

  // we can add information to user profile
  var info=[
         {username:'bob',password:'b',hometown:'China',birthday:'12/12/1987'},
          {username:'alice',password:'a',hometown:'U S',birthday:'10/10/1991'},
           {username:'jack',password:'j',hometown:'China',birthday:'12/12/1978'},
            {username:'mick',password:'m',hometown:'England',birthday:'01/01/1990'}
  ]


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
       // content+=' Here is a series of cammand you can use in this app </br>';
       // content+=' /logout          logging out the user </br>';
       // content+= ('/tweetMessage   TweetMessage.TweetMessage </br>');





       content += '<form method="get" action="/dashboardhandler">' +
        'Decision: <input type="text" name="decision"/><br/>' +
        '<input type="submit" value="Enter"/>'
        '</dashboardhandler></br>';
        res.send(content); 
}