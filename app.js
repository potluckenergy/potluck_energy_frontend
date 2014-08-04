var express = require('express');
var app = express();

app.use(express.compress());
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
  res.sendfile('./index.html');
});

var port = 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
