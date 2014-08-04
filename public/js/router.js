define([
  'jquery', 
  'underscore', 
  'backbone', 
  'views/header/headerView',
  'views/footer/footerView',
  'views/home/homeView',
  'views/signup/signupView',
  'views/legal/legalView',
  'views/contact/contactView',
  'views/dashboard/dashboardView',
  'views/project/projectView'
], function(
  $,
  _, 
  Backbone, 
  HeaderView,
  FooterView, 
  HomeView,
  SignupView,
  LegalView,
  ContactView,
  DashboardView,
  ProjectView
) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      //  '/'
      '': 'root',

      //  ...
      'dashboard': 'dashboard',
      'signup': 'signup',
      'legal': 'legal',
      'contact': 'contact',
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

    router.on('route:signup', function () {
        var signupView = new SignupView();
        signupView.render();
    });

    router.on('route:legal', function () {
        var legalView = new LegalView();
        legalView.render();
    });

    router.on('route:contact', function () {
        var contactView = new ContactView();
        contactView.render();
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
