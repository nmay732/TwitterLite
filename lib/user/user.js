// # User Library

// ## User Objects
function User(username, password) {
  this.username = username;
  this.password = password;
  // Added uid
  //this.uid      = uid;
}

//This is our stub database until we look at a real database!
var users=[
      {username:'bob',password:'b'},
      {username:'alice',password:'a'},
      {username:'jack',password:'j'},
      {username:'mick',password:'m'} 
      ]

var followers=[
    {username:'bob',follower:'alice'},
    {username:'bob',follower:'jack'},
    {username:'bob',follower:'mick'},
    ]

    var Tweet=[
      {username:'bob',  tweet:"How are you ?"},
      {username:'alice',tweet:"What are you doing ?"},
      {username:'jack', tweet:"Are you going to party tonight?"},
      {username:'mick', tweet:"Are you going tonight?"}
  ]

  var info=[
         {username:'bob',password:'b'},
          {username:'alice',password:'a'},
           {username:'jack',password:'j'},
            {username:'mick',password:'m'}
  ]


// //
// // ## lookup function
// // locates a user by `name` if it exists. Invokes callback `cb` with the
// // signature cb(error, userobj).
// //
// exports.lookup = function(username, password, cb) {
//   var len = userdb.length;
//   for (var i = 0; i < len; i++) {
//     var u = userdb[i];
//     if (u.username === username) {
//       if (u.password === password) {
//         cb(undefined, u);
//       }
//       else {
//         cb('password is not correct');
//       }
//       return;
//     }
//   }
//   cb('user not found');
// };

