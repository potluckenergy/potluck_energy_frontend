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
  '/', 
  '/dashboard', 
  '/project', 
  '/signup', 
  '/legal', 
  '/contact'
];
appRoutes.forEach( function(r) {
  app.get(r, routes.index);
});

//  other routes
app.get('/landing', routes.landing);
app.get('/about', routes.about);



var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});