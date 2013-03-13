exports.TweetMessage = function(req, res){ 

var content='';
content+='<h1> Please enter a Message you want to tweet </h1> </br>';
       content += '<form method="get" action="/TweetMessagehandler">' +
        'Tweet: <input type="text" name="Message"/><br/>' +
        '<input type="submit" value="Send"/>'
        '</TweetMessagehandler></br>';
            res.send(content);
            res.redirect('/dashboard');
        }