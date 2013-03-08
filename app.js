
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
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

// app.get('/', routes.index);
// app.get('/users', user.list);

// app.get('/test', function(req, res){
//       res.writeHead(200, {'content-type': 'text/json' });
//       res.write( JSON.stringify({text: "my name is " + req.params.name}) );
//       res.end('\n');
// });

// /*
// Description:  Public Function called by the content module, returns the revision history for a particular form based on its FormID.
// calls getRevisions(form)
// */

// app.get('/getFormHistory', function(req, res) {
//       var formHistory = getRevisions(req.params.token, req.params.formID)

//       res.writeHead(200, {'content-type': 'text/json' });
//       res.write( JSON.stringify(formHistory) );
//       res.end('\n');
// });


// /*
// Description:  Public Function called by the content module, returns the comments for a particular form based on its FormID.
// calls getForm(form)
// */

// app.get('/getFormComments', function(req, res){
//       var formComments = getForm(req.params.token, req.params.formID);

//       res.writeHead(200, {'content-type': 'text/json' });
//        res.write( JSON.stringify(formComments) );
//        res.end('\n');
// });


// /*
// Description:  Public Function called by the content module, returns the full set of forms for a particular Application based on its ApplicationID.
// calls retrieveAllFormsForApplication()
// */

// app.get('/getApplicationForms', function(req, res){
//       var forms = retrieveAllFormsForApplication(req.params.token, req.params.applicationID);
    
//   res.writeHead(200, {'content-type': 'text/json' });
//       res.write( JSON.stringify(forms) );
//       res.end('\n');
// });

// /*
// Description:  Public Function called by the content module, sends pertinent information to function handler for creating a new application.
// calls createNewApplication() and
// */

// app.get('/createApplication', function(req, res){
//       var result = createNewApplication(req.params.token);

// res.writeHead(200, {'content-type': 'text/json' });
//       res.write( JSON.stringify(result) );
//       res.end('\n');
// });


// /*
// Description:  Public Function called by the content module, passes updated form with associated ID and data to the function handler which updates the corresponding form associated with the given applicationID.
// calls saveForm(form,formObjectJSON)
// */

// app.get('/saveForm', function(req, res){
//       var result = saveForm(req.params.token, req.params.form.formID, req.params.form);
      
// res.writeHead(200, {'content-type': 'text/json' });
//       res.write( JSON.stringify(result) );
//       res.end('\n');
// });

// /*
// Description:  Public function called by the content module, passes username, applicationID and formID  to request handler which associates the username as a CI on the given application  with read/write privileges to the forms in formID
// calls delegateApplication(user_a, user_b, applicationID)
// */

// app.get('/delegateApplication', function(req, res){
//   var result = delegateApplication(req.params.token, req.params.username, req.params.applicationID, req.params.formID);

//   res.writeHead(200, {'content-type': 'text/json' });
// if (result.code == 1){
//         res.write( JSON.stringify(result) );
//   }
//   else{
//         res.write( JSON.stringify(sendNotification(req.params.username, 'request_ci') ) );
//             }
// res.end('\n');
// });


// /*
// Description:  Public function called by the content module, passes applicationID and list of CIs to be added to the request handler which associates the users in the list as CIs on the given application.
// calls editUser(username, userObjectJSON) and createNewUser(username, userObjectJSON)
// */

// app.get('/AddCIs', function(req, res){
//       var result = addCIs(req.params.Token, req.params.ApplicationID, req.params.CIList);

//   res.writeHead(200, {'content-type': 'text/json' });
// if (result.code == 1){
//         res.write( JSON.stringify(result) );
//   }
//   else{
//         res.write( JSON.stringify(sendNotification(req.params.CIList, 'Added as CI') ) );
//             }
// res.end('\n');
// });


// /*
// Description:  Public function called by the content module, passes applicationID and list of forms to be removed to the request handler which removes the forms in the list from the given application.
// calls removeForms()
// */

// app.get('/RemoveForms', function(req, res){
//       var result = removeForms(req.params.token, req.params.applicationID, req.params.formIDs);

//       res.writeHead(200, {'content-type': 'text/json' });
//       res.write( JSON.stringify(result) );
//       res.end('\n');
// });


// /*
// Description:  Public function called by the content module, passes applicationID to the request handler which updates the status of the application to accepted.
// calls changeApplicationStatus(applicationID, status)
// */

// app.get('/AcceptApplication', function(req, res){
//       var result = changeApplicationStatus(req.params.token, req.params.applicationID, "Accepted");

// res.writeHead(200, {'content-type': 'text/json' });

//       if (result.code = 1){
//     res.write( JSON.stringify(result) );
// }
// else{
// var PI = getPIOfApp(req.params.token, req.params.applicationID);
// if (PI.code == 1){
//   res.write( JSON.stringify(PI) );
// }
// else{
// res.write( JSON.stringify(sendNotification(PI.value, "Application Accepted") ) );
// }
//   }
//   res.end('\n');
// });


// /*
// Description:  Public function called by the content module, passes applicationID to the request handler which updates the status of the application to rejected.
// calls changeApplicationStatus(applicationID, status)
// */

// app.get('/RejectApplication', function(req, res){
//       var result = changeApplicationStatus(req.params.token, req.params.applicationID, "Rejected");

//   res.writeHead(200, {'content-type': 'text/json' });
//       if (result.code == 1){
//     res.write( JSON.stringify(result) );

//   }
//   else{
// var PI = getPIOfApp(req.params.token, req.params.applicationID);
// if (PI.code == 1){
// res.write( JSON.stringify(PI) );
// }
// else{
// res.write( JSON.stringify(sendNotification(PI.value, "Application Rejected")) );
// }
//   }
// res.end('\n');
// });


// /*
// Description:  Public function called by the content module, passes applicationID and reviewers to the request handler which associates the users in the list as CCI/IRB reviewers for the application.
// calls editUser(username, useObjectJSON)
// */

// app.get('/DelegateReview', function(req, res){
// var result = addAsReviewer(req.params.token, req.params.applicationID, req.params.reviewers);

// res.writeHead(200, {'content-type': 'text/json' });
// if (result.code == 1){
// res.write( JSON.stringify(result) );
// }
// else{
//               res.write( JSON.stringify(sendNotification(reviewers, "Delegated for Review") ) ); 
//             }
// res.end('\n');
// });


// /*
// Description:  Public function called by the content module, passes user data to the request handler which adds a user account from the given data.
// calls createNewUser(username, userObjectJSON)
// */
// app.get('/CreateAccount', function(req, res){
//       var result = createNewUser(req.params.userData.username, req.params.userData);

//       res.writeHead(200, {'content-type': 'text/json' });
// if (result.code == 1){
//   res.write( JSON.stringify(result) );
// }
// else{
//             res.write( JSON.stringify(sendNotification(req.params.userData.username, "New Account") ) );            
// }
//       res.end('\n');
// });




// /*
// Description:  Public function called by the content module, passes a formID to the request handler which updates the status of the form.
// calls submitForm(formID, username)
// */

// app.get('/SubmitApplication', function(req, res){
//       var result = submitApplication(req.params.token, req.params.applicationID)
    
//       res.writeHead(200, {'content-type': 'text/json' });
//   if (result.code == 1){
//     res.write( JSON.stringify(result) );
//   }
// else{
//   var Chair = getChair(req.params.token);
// if (Chair.code == 1){
//   res.write ( JSON.stringify(Chair) );
// }
// else{
//               res.write( JSON.stringify (sendNotification(Chair.value, "Application submitted for review") ) );
//     }
//   }
//       res.end('\n');
// });


// /*
// Description:  Public function called by the content module, passes applicationID and list of users to the request handler which associates the users with the given application as requested CIs. It also sends a request to the notification module to send notifications to the potential CIs.
// calls editUser(user, userObjectJSON)*/

// app.get('/RequestCollaboration', function(req, res){
// result = addPotentialCI(req.params.token, req.params.applicationID, req.params.ciList);

// res.writeHead(200, {'content-type': 'text/json' });
// if (result.code == 1){
//               res.write( JSON.stringify(result) );
// }
//           else{
//               res.write( JSON.stringify(sendNotification(req.params.ciList, "Collaboration Requested") ) );
// }
// res.end('\n');
// });


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
      {username:'jace',password:'j'},
      {username:'mick',password:'m'} 
      ]

// we may add more tweet by enter text in broser 
// we need this function
  var Tweet=[
      {user:'bob',tweet:"How are you ?"},
      {username:'alice',tweet:"What are you doing ?"},
      {username:'jace',tweet:"Are you going to party tonight?"},
      {username:'Mick',tweet:"Are you going tonight?"}
  ]

   var loginUser=null;

  
// add by Billy
app.get('/',function(req,res){
       res.redirect('/login');
});
//=======
//Login function
//edit by Billy
app.get('/login',function(req,res){
var content ;
    content += '<h3>Please Login </h3>';
    content += '<form method="get" action="/loginform">' +
        'Username: <input type="text" name="username"/><br/>' +
        'Password: <input type="text" name="password"/><br/>' +
        '<input type="submit" value="Login"/>'
        '</login>';
    res.send(content);
  });

    app.get('/loginform',function(req,res){
        var user=req.query.username;
        var password=req.query.password;
        for (var i=0;i<users.length;i++)
          if(users[i].username===user)
            if(users[i].password===password)
            {
              loginUser=user;
              console.log("Login Success");
              res.redirect('/dashboard');
            }
              res.redirect('/login');
    });

//logout fuction
app.get('/logout',function(req,res){
   loginUser=null;
   res.redirect('/login');
});


// we need a way to add tweet
// add by Billy
app.get('/TweetMessage', function (req, res) {
    var content =loginUser;
   content += '<h3>Tweet A Message!</h3>';
    content += '<form method="get" action="/UpdateMessage">' +
        'Message: <input type="text" name="Message"/><br/>' +
        '<input type="submit" value="Tweet"/>'
        '</TweetMessage>';
    res.send(content);
});


// update the tweet 
// add by Billy
app.get('/UpdateMessage', function (req, res) {
  var message=req.query.Message;
  var c ={'user':loginUser,tweet:message};
     Tweet.push(c);
     for(var i=0;i<Tweet.length;i++)
      console.log(Tweet[i].tweet);
     res.redirect('/TweetMessage');
});


app.get('/dashboard', function (req, res) {

    //calls /dashtweets and /messages
    //displays the text from those two functions

});

app.get('/gettweets', function (req, res) {

    //makes a call to the database to get the most recent tweets from username 
    //inputs: req.params.username 
    //returns tweets as JSON strings
    var message='Here is the Tweets User psot  <br/>   ';
    //name=req.query.username;
    name='bob'
    for(var i=Tweet.length-1;i>0;i--) 
    if(Tweet[i].username=name)
      message+=Tweet[i].tweet+' <br/>  ';
    res.send(message);
});

app.get('/dashtweets', function (req, res) {

    //makes two calls to the database, the first to get the followers list, the second gets the mos recent tweets of those users
    //inputs: req.params.username
    //returns tweets as one json 

});

app.get('/messages', function (req, res) {

    //makes a call to the database getting all messages sent to the user
    //inputs: req.params.username
    //returns a json string

});

app.get('/search', function (req, res) {

//=======
  res.writeHead(200, {'content-type': 'text/json' });
      res.write( JSON.stringify({text: "my name is " + req.params.username}) );
      res.end('\n');
});

app.get('/dashboard', function (req, res) {

    //calls /dashtweets and /messages
    //displays the text from those two functions

});

app.get('/tweets', function (req, res) {

    //makes a call to the database to get the most recent tweets from username 
    //inputs: req.params.username 
    //returns tweets as JSON strings


});

app.get('/dashtweets', function (req, res) {

    //makes two calls to the database, the first to get the followers list, the second gets the mos recent tweets of those users
    //inputs: req.params.username
    //returns tweets as one json string

});

app.get('/messages', function (req, res) {

    //makes a call to the database getting all messages sent to the user
    //inputs: req.params.username
    //returns a json string

});

app.get('/search', function (req, res) {

//>>>>>>> 2e465266b4f942c2f256fff387245cae8d6d42b6
    //makes a call to the database, checks the first character of the input, differentiating between # and @ symbols. 
    //If a # make a request the the database searching for that # tag
    //If it is an @ symbol, search the user names 
    //inputs: req.params.query
    //returns the results as a json string

});

app.get('/profile', function (req, res) {

    //calls the /tweets function, inputing the user name
    //inputs: req.params.query


});

