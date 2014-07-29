//  homeView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home.html'
], function($, _, Backbone, homeTemplate) {
  
  var HomeView = Backbone.View.extend({
    
    el: $('#main'),

    events: {
      'click #save': 'save'
    },

    save: function() {},

    render: function() {
      this.$el.prepend(homeTemplate);
    }

  });

  return HomeView;

});