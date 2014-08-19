///////////////////////////////////////////////////////////////////
//  api ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
var User = require('../models/user.js');

exports.users = function(req, res) {
  return User.find(function (err, users) {
    if (err) {
      return console.log(err);
    } else {
      return res.send(users);
    }
  });
}




///////////////////////////////////////////////////////////////////
//  app layout signifies backbone app /////////////////////////////
//  static layout signifies landing or static pages ///////////////
///////////////////////////////////////////////////////////////////

exports.index = function(req, res) {
  res.render('index', {layout: 'app'});
}

exports.landing = function(req, res) {
  res.render('landing', {layout: 'static'});
}

exports.about = function(req, res) {
  res.render('about', {layout: 'static'});
}

exports.legal = function(req, res) {
  res.render('legal', {layout: 'static'});
}

exports.logout = function(req, res) {
  res.render('logout', {layout: 'static'})
}

