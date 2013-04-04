
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

}
