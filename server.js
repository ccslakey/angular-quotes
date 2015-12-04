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
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
