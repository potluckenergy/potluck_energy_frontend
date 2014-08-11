//  projectsView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/projects.html'
], function($, _, Backbone, template) {
  
  var ProjectsView = Backbone.View.extend({

    el: $('#main'),

    initiate: function() {
      modal.showInitiate();
    },

    render: function() {
      this.$el.html(template);
    }

  });

  return ProjectsView;

});