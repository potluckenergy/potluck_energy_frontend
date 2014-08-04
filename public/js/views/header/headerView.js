//  headerView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/header.html',
  'text!templates/login.html'
], function($, _, Backbone, headerTemplate, loginTemplate) {
  
  var HeaderView = Backbone.View.extend({
    
    el: $('#header'),

    //  render on initialization
    initialize: function() {
      this.render();
    },

    //  render template
    render: function() {
      this.$el.html(headerTemplate);
    },



    //
    //  Signup modal
    //
    events: {
      'click #login': 'login',
      //  'click #signup': 'signup'
    },

    //
    //  Login modal
    //
    login: function() {
      //  show modal
      $('#modal').fadeIn('fast');

      //  inject template
      setTimeout( function() {
        $('#modal').append(loginTemplate);
      }, 400);

      //  clear modal
      $('#modal-screen').click( function() {
        $('#modal').fadeOut('fast');
        setTimeout( function() {
          $('#modal').html('<div id="modal-screen" class="modal-screen"></div>');
        }, 500);
      });
    }

  });

  return HeaderView;

});