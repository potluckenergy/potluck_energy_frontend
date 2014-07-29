//  projectView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/project/project.html',
  'text!templates/project/project-overview.html',
  'text!templates/project/project-technical.html',
  'text!templates/project/project-environmental.html',
  'text!templates/project/project-investment.html'
], function(
  $, 
  _, 
  Backbone, 
  projectTemplate,
  overviewTemplate,
  technicalTemplate,
  environmentalTemplate,
  investmentTemplate
) {
  
  var ProjectView = Backbone.View.extend({
    
    el: $('#main'),

    events: {
      'click #select-overview': 'overview',
      'click #select-technical': 'technical',
      'click #select-environmental': 'environmental',
      'click #select-investment': 'investment'
    },

    overview: function() {
      $('.tab').each( function() {
        $(this).removeClass('current');
      });
      $('#select-overview').parent('li').addClass('current');
      $('#project-content').html(overviewTemplate);
    },

    technical: function() {
      $('.tab').each( function() {
        $(this).removeClass('current');
      });
      $('#select-technical').parent('li').addClass('current');
      $('#project-content').html(technicalTemplate);
    },

    environmental: function() {
      $('.tab').each( function() {
        $(this).removeClass('current');
      });
      $('#select-environmental').parent('li').addClass('current');
      $('#project-content').html(environmentalTemplate);
    },

    investment: function() {
      $('.tab').each( function() {
        $(this).removeClass('current');
      });
      $('#select-investment').parent('li').addClass('current');
      $('#project-content').html(investmentTemplate);
    },

    render: function() {
      this.$el.prepend(projectTemplate);
      $('#project-content').html(overviewTemplate);
    }

  });

  return ProjectView;

});