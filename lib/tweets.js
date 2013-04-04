//fake database for tweets
//TODO: NOT FUNCTIONING YET

var tweets=[
    {username:'bob',  tag: "alice", text:"@alice How was class today?"},
    {username:'bob',  tag: null, text:"Too sick to go to class today :("},
    {username:'alice', tag: null, text:"I am so happy!!!"},
    {username:'alice', tag: null, text:"I love my sorority sisters!!!"},
    {username:'jack', tag: null, text:"Dinner at bubs"},
    {username:'jack', tag: null, text:"Anyone want to go to High Horse tonight?"},
    {username:'mick', tag: null, text:"The forest speaks to me sometimes.."},
    {username:'mick', tag: null, text:"I am always listening"}
    ];

var followers=[
    {username:'bob',follower:'mick'},
    {username:'bob',follower:'alice'},
    {username:'alice',follower:'mick'},
    {username:'alice',follower:'bob'},
    {username:'jack',follower:'mick'},
    {username:'jack',follower:'bob'},
    {username:'mick',follower:'jack'}
    ];

exports.getAllTweets = function(req, res){

    return tweets;  

}

exports.getUserTweets = function(req, res, user){

    returnTweets = {};
    for(var i=0; i<tweets.length; i++){
        if(tweets[i].username == user){returnTweets.push(tweets[i])}
    }
    console.log(returnTweets[0]);
    return returnTweets;

}

//sending a tweet (stores in memory json string)
exports.tweet = function(req, res, tweet){

    tweets.push(tweet);

}

//returns all tweets that the user follows
exports.getFollowsTweet = function(res, res, user){

    var returnTweets = {};
    for(var i=0; i<tweets.length; i++){
        for(var j=0; j<followers.length; j++){
            if(user == followers[j].follower && tweets[i].username == followers[j].username){
                returnTweets.push(tweets[i]);
                break;
            }
        }
    }
    
    return returnTweets;

}

//get all users who follow the user (people who read your tweets)
exports.getFollowers = function(res, res, user){

    var returnUsers = {};
    for(var j=0; j<followers.length; j++){
        if(user == followers[j].username){
            returnUsers.push(followers[j].follower);
        }
    }
    
    return returnUsers;

}

//get all users who the user follows (people whose tweets appear in your feed)
exports.getUserFollows = function(res, res, user){

    var returnUsers = {};
    for(var j=0; j<followers.length; j++){
        if(user == followers[j].follower){
            returnUsers.push(followers[j].username);
        }
    }
    
    return returnUsers;

}


