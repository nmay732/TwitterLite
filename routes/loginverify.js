
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


