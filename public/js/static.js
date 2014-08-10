//  main.js
require.config({
  paths: {
    'jquery': 'lib/jquery.min',
    'underscore': 'lib/underscore.min',
    'backbone': 'lib/backbone.min',
    'text': 'lib/text.min',
    'd3': 'lib/d3.min',
    'chart': 'lib/column-chart',
    'templates': '/templates',
    'firebase': 'lib/firebase.min',
    'backfire': 'lib/backbone-firebase.min'
  }
});


//
//  Views
//
require([
  'jquery', 
  'underscore', 
  'backbone', 
  'views/signup/signupView',
  'views/login/loginView'
], function($, _, Backbone, SignupView, LoginView) {

  new SignupView();

  $('#login').click( function() {
    new LoginView();
  });

});