// Require packages
var express = require('express');
var cors = require('cors');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var expressJWT = require('express-jwt');

// Require relative files
var config = require('./config/config');
var routes = require('./config/routes');

// Establish JWT secret
var secret = require('./config/config').secret;

// Hook into mongoDB via mongoose
mongoose.connect(config.database);
console.log('Mongo:' + config.database)

// Create App
var app = express();

// Set our app to use packages
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());

// Set-up method-override
app.use(methodOverride(function(req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  };
}));

// Set up passport AFTER bodyParser.urlencoded
require('./config/passport-local')(passport);
require('./config/passport-facebook')(passport);

// Set app to use JWTs
app.use(expressJWT({secret: secret})
  .unless({
    path: [
      {url: '/register', methods: ['POST']},
      {url: '/login', methods: ['POST']},
      {url: '/lessons', methods: ['GET']},
      {url: '/auth/facebook', methods: ['GET']},
    ]
  }));

// Display user friendly error when 401 occurs
app.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({message: 'Unauthorized request.'});
  };
  next();
});

// Tell app to use routing on the root path.
app.use('/', routes);

app.listen(process.env.port || 3000);
console.log('coffeeCoderAPI is alive and listening on port 3000.');
