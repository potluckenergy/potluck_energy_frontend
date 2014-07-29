//  headerView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/header.html'
], function($, _, Backbone, headerTemplate) {
  
  var HeaderView = Backbone.View.extend({
    
    el: $('#header'),

    //  render on initialization
    initialize: function() {
      this.render();
    },

    events: {},

    //  render template
    render: function() {
      this.$el.prepend(headerTemplate);
    }

  });

  return HeaderView;

});