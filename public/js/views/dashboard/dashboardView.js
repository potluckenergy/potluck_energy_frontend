//  dashboardView.js
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/dashboard/dashboard.html',
  'text!templates/dashboard/dashboard-overview.html',
  'text!templates/dashboard/dashboard-payments.html',
  'text!templates/dashboard/dashboard-investments.html',
  'text!templates/dashboard/dashboard-settings.html',
  'text!templates/dashboard/dashboard-manage.html'
], function(
  $, 
  _, 
  Backbone, 
  dashboardTemplate, 
  overviewTemplate,
  paymentsTemplate,
  investmentsTemplate,
  settingsTemplate,
  manageTemplate
) {
  
  var DashboardView = Backbone.View.extend({
    
    el: $('#main'),

    events: {
      'click #save': 'save',
      'click #select-overview': 'selectOverview',
      'click #select-payments': 'selectPayments',
      'click #select-investments': 'selectInvestments',
      'click #select-settings': 'selectSettings',
      'click #select-manage': 'selectManage'
    },

    save: function() {},

    selectOverview: function() {
      $('.list-item').each( function() {
        $(this).removeClass('current');
      });
      $('#select-overview').parent('li').addClass('current');
      $('#dashboard-section').html('Overview');
      $('#dashboard-content').html(overviewTemplate);
    },

    selectPayments: function() {
      $('.list-item').each( function() {
        $(this).removeClass('current');
      });
      $('#select-payments').parent('li').addClass('current');
      $('#dashboard-section').html('Payments');
      $('#dashboard-content').html(paymentsTemplate);
    },

    selectInvestments: function() {
      $('.list-item').each( function() {
        $(this).removeClass('current');
      });
      $('#select-investments').parent('li').addClass('current');
      $('#dashboard-section').html('Investments');
      $('#dashboard-content').html(investmentsTemplate);
    },

    selectSettings: function() {
      $('.list-item').each( function() {
        $(this).removeClass('current');
      });
      $('#select-settings').parent('li').addClass('current');
      $('#dashboard-section').html('Settings');
      $('#dashboard-content').html(settingsTemplate);
    },

    selectManage: function() {
      $('.list-item').each( function() {
        $(this).removeClass('current');
      });
      $('#select-manage').parent('li').addClass('current');
      $('#dashboard-section').html('Manage');
      $('#dashboard-content').html(manageTemplate);
    },

    render: function() {
      this.$el.html(dashboardTemplate);
      this.selectOverview();
    }

  });

  return DashboardView;

});