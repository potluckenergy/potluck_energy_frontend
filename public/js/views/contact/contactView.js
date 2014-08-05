//  ContactView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/contact.html'
], function($, _, Backbone, ContactTemplate) {
  
  var ContactView = Backbone.View.extend({
    
    el: $('#main'),

    events: {},

    render: function() {
      this.$el.html(ContactTemplate);
    }

  });

  return ContactView;

});