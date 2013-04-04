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

getCookieVal = function(){
    
    //TODO: store a list of all the session ids somewhere...
    return "12345";

}
