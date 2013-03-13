//var user = require('../lib/user');

exports.login = function(req, res){
  var user = require('../lib/user');
    var content='';
     
     // if(loginCount!=0)
     // content += '<h3>Invalid username or password ,Please login again</h3>';
     // else
    content += '<h1>Please Login </h1></br>';
     content += '<form method="get" action="/loginverify">' +
        'Username: <input type="text" name="username"/><br/>' +
        'Password: <input type="text" name="password"/><br/>' +
        '<input type="submit" value="Login"/>'
        '</loginverify>';
    res.send(content);
  }