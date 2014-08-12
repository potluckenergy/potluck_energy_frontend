var express = require('express'),
    routes  = require('./routes')
    logfmt  = require("logfmt"),
    exphbs  = require('express3-handlebars'),
    app     = express();


//  logging
app.use(logfmt.requestLogger());


//  static
app.use(express.compress());
app.use(express.static(__dirname + '/public'));


//  handlebars templating engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//
//  routing for backbone app
//
var appRoutes = [ 
  '/#*',
  '/dashboard',
  '/projects',
  '/project',
  '/project*',
  '/initiate'
];
appRoutes.forEach( function(r) {
  app.get(r, routes.index);
});

//  other routes
app.get('/', routes.landing);
app.get('/about', routes.about);
app.get('/legal', routes.legal);
app.get('/logout', routes.logout);
app.get('/api', function(req, res) {
  res.send({
    0: {
      name: 'kevin'
    },
    1: {
      name: 'neville'
    }

  });
});


//
//  Error handling
//
app.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});

// handling 404 errors
app.use(function(err, req, res, next) {
  if(err.status !== 404) {
    return next();
  }
  res.render('404', {layout:'static'});
});


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});