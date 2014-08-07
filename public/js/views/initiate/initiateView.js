//  initiateView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/initiate.html',
  '../../../js/modules/modal'
], function($, _, Backbone, initiateTemplate, modal) {
  
  var InitiateView = Backbone.View.extend({

    el: $('#main'),

    render: function() {
      this.$el.html( initiateTemplate );
    }

  });

  return InitiateView;

});