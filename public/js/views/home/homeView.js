//  homeView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home.html',
  '../../../js/modules/modal'
], function($, _, Backbone, homeTemplate, modal) {
  
  var HomeView = Backbone.View.extend({

    el: $('#main'),

    events: {
      'click #save': 'save'
    },

    save: function() {},

    initiate: function() {
      modal.showInitiate();
    },

    render: function() {
      this.$el.html( homeTemplate );
    }

  });

  return HomeView;

});