var express = require('express'),
    logfmt  = require("logfmt"),
    app     = express();


//  logging
app.use(logfmt.requestLogger());


//  static
app.use(express.compress());
app.use(express.static(__dirname + '/public'));


// routing for backbone app
app.get('*', function(req, res){
  res.sendfile('./index.html');
});


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});