//  environmentalView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/project/project-environmental.html'
], function($, _, Backbone, template) {
  
  var EnvironmentalView = Backbone.View.extend({

    trees: function() { return 15; },
    cars: function() { return 5; },

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(template);
      
      //  render trees
      var counter = this.trees();
      while ( counter > 0 ) {
        $('.trees').append('<i class="fa fa-tree"></i>');
        counter = counter - 1;
      }

      //  render cars
      counter = this.cars();
      while ( counter > 0 ) {
        $('.cars').append('<i class="fa fa-car"></i>');
        counter = counter - 1;
      }
    }

  });

  return EnvironmentalView;

});