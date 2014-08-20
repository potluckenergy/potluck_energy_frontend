var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var logfmt = require("logfmt");
var exphbs = require('express3-handlebars');
var routes = require('./routes');
var User = require('./models/user');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;



//  logging
app.use(logfmt.requestLogger());

//  static files
app.use(express.compress());
app.use(express.static(__dirname + '/public'));

//  templates
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//  passport
app.use(express.json());
app.use(express.urlencoded());
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);




//
//  backbone routes
//
var appRoutes = [
  '/dashboard',
  '/projects',
  '/project',
  '/project*',
  '/initiate'
];
appRoutes.forEach( function(r) {
  app.get(r, routes.index);
});




//
//  other routes
//
app.get('/', routes.landing);

app.get('/about', routes.about);

app.get('/legal', routes.legal);

app.get('/login', routes.login);

app.get('/logout', function(req, res) {
  req.logout();
  res.render('logout', {layout: 'static'})
});




//
//  auth
//
passport.serializeUser(function(user, done) {
  done(null, user);
});
 
passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy({
    usernameField: 'email'
  }, function(email, password, done) {
    process.nextTick(function() {
      User.findOne({
        'email': email,
      }, function(err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (user.password != password) { return done(null, false); }
        return done(null, user);
      });
    });
}));

app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/projects',
    failureRedirect: '/login'
  })
);



//
//  api
//
//  user model
app.get('/api/users', routes.getUsers);
app.post('/api/users', routes.postUser);
app.get('/api/users/:id', routes.getUser);
app.put('/api/users/:id', routes.putUser);
app.delete('/api/users/:id', routes.deleteUser);




//
//  errors
//
app.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  if(err.status !== 404) { return next(); }
  res.render('404', {layout:'static'});
});




//
//  listen
//
app.listen(port, function() {
  console.log("Listening on " + port);
});