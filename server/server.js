var express = require('express');
var path = require('path');
var morgan = require('morgan')
var bodyParser = require('body-parser');

// start express
var app = express();
// log middleware
app.use(morgan('dev'));

// use bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// serve static files from root
app.use(express.static(path.join(__dirname, '../client')));

console.log(path.join(__dirname, '../client'))

// redirect all requests to react-router
app.all('/*', function(req, res) {
  res.sendFile('index.html', {
    root: path.resolve(__dirname, '../client')
  });
});

// log errors
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// set port
var port = process.env.PORT || 1337;

// listen on port
app.listen(port);


console.log("Server is listening on port " + port);

module.exports = app;