define([
  'jquery', 
  'underscore', 
  'backbone', 
  'views/header/headerView',
  'views/footer/footerView',
  'views/projects/projectsView',
  'views/dashboard/dashboardView',
  'views/project/projectView',
  'views/initiate/initiateView'
], function(
  $,
  _, 
  Backbone, 
  HeaderView,
  FooterView, 
  ProjectsView,
  DashboardView,
  ProjectView,
  InitiateView
) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'projects': 'projects',

      'dashboard': 'dashboard',
      'project': 'project',
      'initiate': 'initiate'
    }
  });
  
  var initialize = function(){

    var router = new AppRouter;

    router.on('route:projects', function () {
        var projectsView = new ProjectsView();
        projectsView.render();
    });

    router.on('route:dashboard', function () {
        var dashboardView = new DashboardView();
        dashboardView.render();
    });

    router.on('route:project', function () {
        var projectView = new ProjectView();
        projectView.render();
    });

    router.on('route:initiate', function () {
        var initiateView = new InitiateView();
        initiateView.render();
    });

    var headerView = new HeaderView();
    var footerView = new FooterView();

    Backbone.history.start({pushState:true});
  };

  return { 
    initialize: initialize
  };

});
