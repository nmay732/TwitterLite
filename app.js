
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , login = require('./routes/login')
  , verify = require('./routes/loginverify')
  , dashboard=require('./routes/dashboard')
  , dashboardhandler=require('./routes/dashboardhandler')
  , TweetMessage = require('./routes/TweetMessage')
  , TweetMessageHandler = require('./routes/TweetMessageHandler')
  , profile = require('./routes/profile')
  , follow = require('./routes/follow')
  , logout = require('./routes/logout')
  , http = require('http')
  , path = require('path')
  , fs = require('fs');


var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});




http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

//<<<<<<< HEAD




//   I add this variable for public acess, not just Login function
//   may add more information inside as we intergrade it
//   adit by Billy
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

  
// add by Billy
app.get('/',function(req,res){
       res.redirect('/login');
});
//=======
//Login function
//edit by Billy
var loginCount=0;
 //app.get('/login',function(req,res)
  app.get ('/login' , login.login);
  app.get ('/loginverify' , verify.loginverify);
  app.get ('/logout' , logout.logout);
  app.get ('/dashboard' , dashboard.dashboard);

  app.get ('/dashboardhandler' , dashboardhandler.dashboardhandler);
  app.get ('/TweetMessage' , TweetMessage.TweetMessage);
  app.get('/TweetMessageHandler' ,TweetMessageHandler.TweetMessageHandler);
  app.get('/profile',  profile.profile );
  app.get('/follow',  follow.follow );

  app.get ('/dahsboardhandler' , dashboardhandler.dashboardhandler);
  app.get ('/tweetMessage' , TweetMessage.TweetMessage);

//logout fuction
// app.get('/logout',function(req,res){
//    loginUser=null;
//    res.redirect('/login');
// });


// we need a way to add tweet
// add by Billy
// app.get('/TweetMessage', function (req, res) {
//    var message=req.query.Message;
//   var c ={username:loginUser,tweet:message};
//      Tweet.push(c);
//      for(var i=0;i<Tweet.length;i++)
//       console.log(Tweet[i].tweet);
//      res.redirect('/dashboard');
// });

app.get('/TweetMessage', function (req, res) {
   var message=req.query.Message;
  var c ={username:loginUser,tweet:message};
     Tweet.push(c);
     for(var i=0;i<Tweet.length;i++)
      console.log(Tweet[i].tweet);
     res.redirect('/dashboard');
});



// update the tweet 
// add by Billy
// app.get('/UpdateMessage', function (req, res) {
//   var message=req.query.Message;
//   var c ={'user':loginUser,tweet:message};
//      Tweet.push(c);
//      for(var i=0;i<Tweet.length;i++)
//       console.log(Tweet[i].tweet);
//      res.redirect('/TweetMessage');
// });



// app.get('/gettweets', function (req, res) {

//     //makes a call to the database to get the most recent tweets from username 
//     //inputs: req.params.username 
//     //returns tweets as JSON strings
//     var message='Here are the Tweets User psot  <br/>   ';
//     //name=req.query.username;
//     for(var i=Tweet.length-1;i>=0;i--) 
//     if(Tweet[i].username===loginUser)
//       message+=Tweet[i].tweet+' <br/>  ';
//     res.send(message);
// });

// app.get('/dashtweets', function (req, res) {

//     //makes two calls to the database, the first to get the followers list, the second gets the mos recent tweets of those users
//     //inputs: req.params.username
//     //returns tweets as one json 
//     user=req.query.name;

// });

// app.get('/messages', function (req, res) {

//     //makes a call to the database getting all messages sent to the user
//     //inputs: req.params.username
//     //returns a json string

// });

app.get('/search', function (req, res) {

//=======
  res.writeHead(200, {'content-type': 'text/json' });
      res.write( JSON.stringify({text: "my name is " + req.params.username}) );
      res.end('\n');
});



app.get('/tweets', function (req, res) {

    //makes a call to the database to get the most recent tweets from username 
    //inputs: req.params.username 
    //returns tweets as JSON strings
 res.send('Not yet implement');

});

app.get('/dashtweets', function (req, res) {

    //makes two calls to the database, the first to get the followers list, the second gets the mos recent tweets of those users
    //inputs: req.params.username
    //returns tweets as one json string
 res.send('Not yet implement');
});

app.get('/messages', function (req, res) {

    //makes a call to the database getting all messages sent to the user
    //inputs: req.params.username
    //returns a json string
 res.send('Not yet implement');
});

app.get('/search', function (req, res) {

//>>>>>>> 2e465266b4f942c2f256fff387245cae8d6d42b6
    //makes a call to the database, checks the first character of the input, differentiating between # and @ symbols. 
    //If a # make a request the the database searching for that # tag
    //If it is an @ symbol, search the user names 
    //inputs: req.params.query
    //returns the results as a json string
 res.send('Not yet implement');
});

// app.get('/profile', function (req, res) {

//     //calls the /tweets function, inputing the user name
//     //inputs: req.params.query
//      res.send('Not yet implement');
// });


// add by Billy
// app.get('/follow', function (req, res) {
//         var username=req.query.followingusername;
//           if(loginUser!=username) 
//          followers.push({username:username,follower:loginUser});
//          res.redirect('/dashboard');    
// });

// edit by Billy
// app.get('/profile', function (req, res) {
//       var content='';
//     for(var i=0;i<info.length;i++)
//        if(info[i].username==loginUser){
//         content+='User       '+info[i].username+'</br>';
//         content+='Password   ' + info[i].password+'</br>';
//         content+='hometown   ' + info[i].hometown+'</br>';
//         content+='Birthday   ' + info[i].birthday+'</br>';
//        }
//       content += '<form method="get" action="/dashboard">' +
//         '<input type="submit" value="Return to Dashboard"/>'
//         '</dashboard></br>'; 
//    res.send(content);
//   });


// add by Billy
/*app.get('/follow', function (req, res) {
        var username=req.query.followingusername;
          if(loginUser!=username) 
         followers.push({username:username,follower:loginUser});
         res.redirect('/dashboard');    
});

// edit by Billy
app.get('/profile', function (req, res) {
      var content='';
    for(var i=0;i<info.length;i++)
       if(info[i].username==loginUser){
        content+='User       '+info[i].username+'</br>';
        content+='Password   ' + info[i].password+'</br>';
        content+='hometown   ' + info[i].hometown+'</br>';
        content+='Birthday   ' + info[i].birthday+'</br>';
       }
      content += '<form method="get" action="/dashboard">' +
        '<input type="submit" value="Return to Dashboard"/>'
        '</dashboard></br>'; 
   res.send(content);
  });

*/