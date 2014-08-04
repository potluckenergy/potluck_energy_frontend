//  legalView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/legal.html'
], function($, _, Backbone, legalTemplate) {
  
  var LegalView = Backbone.View.extend({
    
    el: $('#main'),

    events: {},

    render: function() {
      this.$el.html(legalTemplate);
    }

  });

  return LegalView;

});