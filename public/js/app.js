//  main.js
require.config({
  paths: {
    'jquery': 'lib/jquery.min',
    'underscore': 'lib/underscore.min',
    'backbone': 'lib/backbone.min',
    'text': 'lib/text.min',
    'd3': 'lib/d3.min',
    'chart': 'lib/column-chart',
    'templates': '../templates',
    'modules': '../modules'
  }
});


require(['jquery', 'backbone'], function($, Backbone) {
  $(document.body).on('click', 'a', function(e){
    if ($(this).attr('href')!='/' && $(this).attr('href')!='/logout') {
      e.preventDefault();
    }
    Backbone.history.navigate(e.currentTarget.pathname, {trigger: true});
  });
});


//
//  initialize app router
//
require(['router'], function(Router) {
  Router.initialize();
});
