//  app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router'
], function($, _, Backbone, Router) {

  //
  //  start the app by initializing the router
  //
  var initialize = function() {
    Router.initialize();
  }

  return {
    initialize: initialize
  }

});