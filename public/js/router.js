define([
  'jquery', 
  'underscore', 
  'backbone', 
  'views/header/headerView',
  'views/footer/footerView',
  'views/home/homeView',
  'views/dashboard/dashboardView',
  'views/project/projectView'
], function(
  $,
  _, 
  Backbone, 
  HeaderView,
  FooterView, 
  HomeView,
  DashboardView,
  ProjectView
) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'projects': 'root',

      'dashboard': 'dashboard',
      'project': 'project'
    }
  });
  
  var initialize = function(){

    var router = new AppRouter;

    router.on('route:root', function (actions) {
        var homeView = new HomeView();
        homeView.render();
    });

    router.on('route:dashboard', function () {
        var dashboardView = new DashboardView();
        dashboardView.render();
    });

    router.on('route:project', function () {
        var projectView = new ProjectView();
        projectView.render();
    });

    var headerView = new HeaderView();
    var footerView = new FooterView();

    Backbone.history.start({pushState:true});
  };

  return { 
    initialize: initialize
  };

});
