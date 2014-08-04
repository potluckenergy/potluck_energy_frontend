//  projectView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'd3',
  'chart',
  'text!templates/project/project.html',
  'text!templates/project/project-overview.html',
  'text!templates/project/project-technical.html',
  'text!templates/project/project-environmental.html',
  'text!templates/project/project-investment.html',
  'text!templates/project/schematic.html'
], function(
  $, 
  _, 
  Backbone,
  d3,
  chart,
  projectTemplate,
  overviewTemplate,
  technicalTemplate,
  environmentalTemplate,
  investmentTemplate,
  schematicTemplate
) {
  
  var ProjectView = Backbone.View.extend({
    
    el: $('#main'),

    events: {
      'click #select-overview': 'overview',
      'click #select-technical': 'technical',
      'click #select-environmental': 'environmental',
      'click #select-investment': 'investment'
    },

    production_data: [
      {year:1, value:158.0},
      {year:2, value:157.6},
      {year:3, value:157.2},
      {year:4, value:156.8},
      {year:5, value:156.4},
      {year:6, value:156.0},
      {year:7, value:155.6},
      {year:8, value:155.3},
      {year:9, value:154.9},
      {year:10, value:154.5},
      {year:11, value:154.1},
      {year:12, value:153.7},
      {year:13, value:153.3},
      {year:14, value:152.9},
      {year:15, value:152.6},
      {year:16, value:152.2},
      {year:17, value:151.8},
      {year:18, value:151.4},
      {year:19, value:151.0},
      {year:20, value:150.7}
    ],

    cf_data: [
      [0,-100000],
      [1,4000],
      [2,4000],
      [3,4000],
      [4,4000],
      [5, 4000],
      [6,4000],
      [7,4000],
      [8,4000],
      [9,4000],
      [10, 4000],
      [11,4000],
      [12,4000],
      [13,4000],
      [14,4000],
      [15, 4000],
      [16,4000],
      [17,4000],
      [18,4000],
      [19,4000],
      [20, 4000]
    ],

    trees: function() { return 15; },
    cars: function() { return 5; },


    //
    //  Overview tab
    //  - d3 production visualization
    //
    overview: function() {
      $('.tab').each( function() {
        $(this).removeClass('current');
      });
      $('#select-overview').parent('li').addClass('current');
      $('#project-content').html(overviewTemplate);

      //  Schematic
      $('#view-schematic').click( function() {
        //  show modal
        $('#modal').fadeIn('fast');

        setTimeout( function() {
          //  inject template
          $('#modal').append(schematicTemplate);
        }, 400);

        var h = $(window).height() - 40;

        $('.schematic').css('height', h);

        $('#modal-screen').click( function() {
          $('#modal').fadeOut('fast');

          //  remove template
          setTimeout( function() {
            $('#modal').html('<div id="modal-screen" class="modal-screen"></div>');
          }, 500);
        });
      });

      //  d3
      d3.select('.production-chart')
        .selectAll('div')
          .data(this.production_data)
        .enter().append('div')
          .style('width', function(d){ return d.value * 3 + 'px' })
          .html(function(d){
            return '<span class="pull-left">'+d.year+'</span><span class="pull-right">'+d.value+'</span>'
          });
    },

    //
    //  Technical tab
    //  - d3 production visualization
    //
    technical: function() {
      $('.tab').each( function() {
        $(this).removeClass('current');
      });
      $('#select-technical').parent('li').addClass('current');
      $('#project-content').html(technicalTemplate);

      //  Schematic
      $('#view-schematic').click( function() {
        //  show modal
        $('#modal').fadeIn('fast');

        setTimeout( function() {
          //  inject template
          $('#modal').append(schematicTemplate);
        }, 400);

        var h = $(window).height() - 40;

        $('.schematic').css('height', h);

        $('#modal-screen').click( function() {
          $('#modal').fadeOut('fast');

          //  remove template
          setTimeout( function() {
            $('#modal').html('<div id="modal-screen" class="modal-screen"></div>');
          }, 500);
        });
      });

      //  d3
      d3.select('.production-chart')
        .selectAll('div')
          .data(this.production_data)
        .enter().append('div')
          .style('width', function(d){ return d.value * 3 + 'px' })
          .html(function(d){
            return '<span class="pull-left">'+d.year+'</span><span class="pull-right">'+d.value+'</span>'
          });
    },

    //
    //  Environmental
    //
    environmental: function() {
      $('.tab').each( function() {
        $(this).removeClass('current');
      });
      $('#select-environmental').parent('li').addClass('current');
      $('#project-content').html(environmentalTemplate);

      var counter = this.trees();
      while ( counter > 0 ) {
        $('.trees').append('<i class="fa fa-tree"></i>');
        counter = counter - 1;
      }

      counter = this.cars();
      while ( counter > 0 ) {
        $('.cars').append('<i class="fa fa-car"></i>');
        counter = counter - 1;
      }
    },


    //
    //  Investment tab
    //  - d3 cash flow visualization
    //
    investment: function() {
      $('.tab').each( function() {
        $(this).removeClass('current');
      });
      $('#select-investment').parent('li').addClass('current');
      $('#project-content').html(investmentTemplate);

      //  Cash flow chart
      d3.select(".cf-chart")
        .datum(this.cf_data)
          .call(columnChart()
            .width(600)
            .height(400)
            .x(function(d, i) { return d[0]; })
            .y(function(d, i) { return d[1]; }));

      $('svg').css('width', '100%');
    },



    render: function() {
      this.$el.prepend(projectTemplate);
      this.overview();
    }

  });

  return ProjectView;

});