//  aboutView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/about.html'
], function($, _, Backbone, aboutTemplate) {
  
  var AboutView = Backbone.View.extend({
    
    el: $('#main'),

    events: {},

    render: function() {
      this.$el.prepend(aboutTemplate);
    }

  });

  return AboutView;

});