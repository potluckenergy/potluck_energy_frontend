//  main.js
require.config({
  paths: {
    'jquery': 'lib/jquery.min',
    'underscore': 'lib/underscore.min',
    'backbone': 'lib/backbone.min',
    'text': 'lib/text.min',
    'templates': '../templates'
  }
});

require(['jquery', 'modules/modal'], function($, modal) {
  $('#login').click( function() {
    modal.showLogin();
  });
});

//
//  initialize app
//

require(['app'], function(App) {
  App.initialize();
});
