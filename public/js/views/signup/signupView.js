//  signupView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/signup.html'
], function($, _, Backbone, signupTemplate) {
  
  var SignupView = Backbone.View.extend({
    
    el: $('#main'),

    events: {},

    render: function() {
      this.$el.prepend(signupTemplate);
    }

  });

  return SignupView;

});