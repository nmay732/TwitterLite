
console.log("GOT HERE");

$.ajax({
    type: 'get',
    url: '/test',
    data: {name:"kevin"},
    dataType: "json",
    success: function(data) {

        
        console.log(data);
    }
});