//  ContactView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/Contact.html'
], function($, _, Backbone, ContactTemplate) {
  
  var ContactView = Backbone.View.extend({
    
    el: $('#main'),

    events: {},

    render: function() {
      this.$el.prepend(ContactTemplate);
    }

  });

  return ContactView;

});