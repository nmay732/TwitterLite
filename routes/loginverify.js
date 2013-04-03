
exports.loginverify = function(req, res){
    var users=[
      {username:'bob',password:'b'},
      {username:'alice',password:'a'},
      {username:'jack',password:'j'},
      {username:'mick',password:'m'} 
      ]

    var user=req.query.username;
    var password=req.query.password;
    for (var i=0;i<users.length;i++){
        if(users[i].username===user)
            if(users[i].password===password){
              loginUser=user;
              console.log("Login Success for username " + user);
              //TODO: Set cookie here?
              res.cookie('session_id', getCookieVal(), { maxAge: 900000, httpOnly: true });
              res.redirect('/dashboard');
            }else{
                //TODO: send message: flash(req, res, 'auth', error);
                res.redirect('/login'); 
            }
    }

}

getCookieVal = function(){
    
    //TODO: store a list of all the session ids somewhere...
    return "12345";

}
