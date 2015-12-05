var express = require('express');
var app = express();
var quotes = require(__dirname + "/quotesDB");

app.use(express.static(__dirname));


app.get('/', function(req, res) {
    res.render('index.html', {
        data: "Is this the title yet?"
    })
});

app.get('/api/quotes', function(req, res) {
    res.json(quotes);
});


var server = app.listen(3000, function() {
    var host = server.address().address;
    // when on Heroku, port will be exported to an environment variable
    // and available as process.env.PORT
    var port = process.env.PORT || server.address().port;;


    console.log('App listening at http://%s:%s', host, port);
});
