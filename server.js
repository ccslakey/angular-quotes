var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


app.use(express.static(__dirname));
// get  my views for quotes and the index
var routes = require('./routes/index');
var quotes = require('./routes/quotes');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', routes);
app.use('/quotes', quotes);










// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



var server = app.listen(process.env.PORT || 3000, function() {
    var host = server.address().address;
    // when on Heroku, port will be exported to an environment variable
    // and available as process.env.PORT
    var port = process.env.PORT || server.address().port;;


    console.log('App listening at http://%s:%s', host, port);
});
