exports.profile= function(req, res){
  var info=[
         {username:'bob',password:'b',hometown:'China',birthday:'12/12/1987'},
          {username:'alice',password:'a',hometown:'U S',birthday:'10/10/1991'},
           {username:'jack',password:'j',hometown:'China',birthday:'12/12/1978'},
            {username:'mick',password:'m',hometown:'England',birthday:'01/01/1990'}
  ]
      var content='';
    for(var i=0;i<info.length;i++)
       if(info[i].username==loginUser){
        content+='User       '+info[i].username+'</br>';
        content+='Password   ' + info[i].password+'</br>';
        content+='hometown   ' + info[i].hometown+'</br>';
        content+='Birthday   ' + info[i].birthday+'</br>';
       }
      content += '<form method="get" action="/dashboard">' +
        '<input type="submit" value="Return to Dashboard"/>'
        '</dashboard></br>'; 
   res.send(content);
  }