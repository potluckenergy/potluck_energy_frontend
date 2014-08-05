

//
//  app layout signifies backbone app
//  static layout signifies landing or static pages
//

exports.index = function(req, res) {
  res.render('index', {layout: 'app'});
}

exports.landing = function(req, res) {
  res.render('landing', {layout: 'static'});
}

exports.about = function(req, res) {
  res.render('about', {layout: 'static'});
}
