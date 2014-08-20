///////////////////////////////////////////////////////////////////
//  api ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
var User = require('../models/user.js');

exports.getUsers = function(req, res) {
  return User.find(function (err, users) {
    if (err) {
      return console.log(err);
    } else {
      return res.send(users);
    }
  });
}

exports.postUser = function(req, res) {
  var user;
  console.log("POST", req.body);
  user = new User({
    firstName:  req.body.firstName,
    lastName:   req.body.lastName,
    email:      req.body.email,
    password:   req.body.password,
    township:   req.body.township
  });
  user.save( function (err) {
    if (err) {  return console.log(err); } 
    else {      return console.log("Created"); }
  });
  return res.send(user);
}

exports.getUser = function(req, res) {
  return User.findById(req.params.id, function (err, user) {
    if (err) {  return console.log(err); } 
    else {      return res.send(user); }
  });
}

exports.putUser = function(req, res) {
  return User.findById(req.params.id, function (err, user) {
    user.firstName = req.body.firstName,
    user.lastName = req.body.lastName,
    user.email = req.body.email,
    user.password = req.body.password,
    user.township = req.body.township
    return user.save( function(err) {
      if (err) {  console.log(err); }
      else {      console.log("updated"); }
      return res.send(user);
    });
  });
}

exports.deleteUser = function(req, res) {
  return User.findById(req.params.id, function (err, user) {
    return user.remove( function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("removed");
        return res.send('');
      }
    });
  });
}



///////////////////////////////////////////////////////////////////
//  app layout signifies backbone app /////////////////////////////
//  static layout signifies landing or static pages ///////////////
///////////////////////////////////////////////////////////////////

exports.landing = function(req, res) {
  res.render('landing', {layout: 'static'});
}

exports.about = function(req, res) {
  res.render('about', {layout: 'static'});
}

exports.legal = function(req, res) {
  res.render('legal', {layout: 'static'});
}



//
//  login
//
exports.login = function(req, res) {
  res.render('login', {layout: 'static'})
}



//
//  signup
//

exports.getSignup = function(req, res) {
  res.render('signup', {layout: 'static'});
}

exports.postSignup = function(req, res) {
  var user;
  //  console.log("POST", req.body);
  user = new User({
    firstName:  req.body.firstName,
    lastName:   req.body.lastName,
    email:      req.body.email,
    password:   req.body.password,
    zip:        req.body.zip,
    township:   req.body.township
  });
  user.save( function (err) {
    if (err) {  return console.log(err); } 
    else {      return console.log("Created"); }
  });
  return res.redirect('/dashboard');
}
















