//  projectView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/project/project.html',
  'js/views/project/subs/overviewView.js',
  'js/views/project/subs/technicalView.js',
  'js/views/project/subs/environmentalView.js',
  'js/views/project/subs/investmentView.js'
], function(
  $, 
  _, 
  Backbone,
  template,
  OverviewView,
  TechnicalView,
  EnvironmentalView,
  InvestmentView
) {
  
  var ProjectView = Backbone.View.extend({
    
    el: $('#main'),

    events: {
      'click #select-overview': 'overview',
      'click #select-technical': 'technical',
      'click #select-environmental': 'environmental',
      'click #select-investment': 'investment'
    },


    //
    //  Overview
    //
    overview: function() {
      $('.tab').each( function() {
        $(this).removeClass('current');
      });
      $('#select-overview').parent('li').addClass('current');
      new OverviewView({ el: $('#project-content') });
    },


    //
    //  Technical
    //
    technical: function() {
      $('.tab').each( function() {
        $(this).removeClass('current');
      });
      $('#select-technical').parent('li').addClass('current');
      new TechnicalView({ el: $('#project-content') });
    },


    //
    //  Environmental
    //
    environmental: function() {
      $('.tab').each( function() {
        $(this).removeClass('current');
      });
      $('#select-environmental').parent('li').addClass('current');
      new EnvironmentalView({ el: $('#project-content') });
    },


    //
    //  Investment
    //
    investment: function() {
      $('.tab').each( function() {
        $(this).removeClass('current');
      });
      $('#select-investment').parent('li').addClass('current');
      new InvestmentView({ el: $('#project-content') });
    },



    render: function() {
      this.$el.html(template);
      this.overview();
    }

  });

  return ProjectView;

});