//  main.js
require.config({
  paths: {
    'jquery': 'lib/jquery.min',
    'underscore': 'lib/underscore.min',
    'backbone': 'lib/backbone.min',
    'text': 'lib/text.min',
    'd3': 'lib/d3.min',
    'chart': 'lib/column-chart',
    'templates': '/templates'
  }
});


//
//  modules
//
require(['../js/modules/modal'], function(modal) {
  $('#login').click( function() {
    modal.showLogin();
  });
});