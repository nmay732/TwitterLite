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
    {username:'bob',  text:"How are you ?"},
    {username:'alice',text:"What are you doing ?"},
    {username:'jack', text:"Are you going to party tonight?"},
    {username:'mick', text:"Are you going tonight?"}
    ]

  // we can add information to user profile
var info=[
    {username:'bob',password:'b',hometown:'China',birthday:'12/12/1987'},
    {username:'alice',password:'a',hometown:'U S',birthday:'10/10/1991'},
    {username:'jack',password:'j',hometown:'China',birthday:'12/12/1978'},
    {username:'mick',password:'m',hometown:'England',birthday:'01/01/1990'}
    ]


var loginUser=null; //TODO: Get users from cookies

res.render('dashboard.ejs', {user: 'bob', followers: followers, tweets: Tweet});

}
