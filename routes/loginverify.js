<<<<<<< HEAD

var Users = require('../lib/user');
users=Users.users;


exports.loginverify = function(req, res){

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
             // loginCount++;
              res.redirect('/login');
          

}


=======
users = require('../lib/user/user.js');

exports.loginverify = function(req, res){
    var user=req.query.username;
    var password=req.query.password;
    var auth = users.lookup(user, password, function(err, obj){
        if(err != undefined){
            console.log('failed login attempt')
            //TODO: Set flash to notify login page there was a failed attempt
            res.redirect('/login'); 
        }
        else{
            console.log("Login Success for username " + user);
            //TODO: Set cookie here?
            //res.cookie('session_id', getCookieVal(), { maxAge: 900000, httpOnly: true });
            res.redirect('/dashboard');
        }
    });
}
>>>>>>> 551c0017c0cc7606aa01ba75d3ffe70219d8ece2
