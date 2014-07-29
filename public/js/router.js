//  router.js
define([
  'jquery', 
  'underscore', 
  'backbone', 
  'views/header/headerView',
  'views/home/homeView',
  'views/signup/signupView',
  'views/about/aboutView',
  'views/legal/legalView',
  'views/contact/contactView',
  'views/dashboard/dashboardView',
  'views/project/projectView'
], function(
  $,
  _, 
  Backbone, 
  HeaderView, 
  HomeView,
  SignupView, 
  AboutView,
  LegalView,
  ContactView,
  DashboardView,
  ProjectView
) {


  //
  //  map out some routes
  //
  var AppRouter = Backbone.Router.extend({
    routes: {
      //  routes
      'about': 'showAbout',
      'dashboard': 'showDashboard',
      'signup': 'showSignup',
      'legal': 'showLegal',
      'contact': 'showContact',

      'project': 'showProject',

      //  default route
      '*path': 'defaultAction'
    }
  });

  //
  //  initialize router
  //
  var initialize = function() {

    var router = new AppRouter;

    //  home view
    router.on('route:defaultAction', function(actions) {
      var homeView = new HomeView();
      homeView.render();
    });

    //  about view
    router.on('route:showAbout', function() {
      var aboutView = new AboutView();
      aboutView.render();
    });

    //  dashboard view
    router.on('route:showDashboard', function() {
      var dashboardView = new DashboardView();
      dashboardView.render();
    });

    //  signup view
    router.on('route:showSignup', function() {
      var signupView = new SignupView();
      signupView.render();
    });

    //  legal view
    router.on('route:showLegal', function() {
      var legalView = new LegalView();
      legalView.render();
    });

    //  contact view
    router.on('route:showContact', function() {
      var contactView = new ContactView();
      contactView.render();
    });

    //  project view
    router.on('route:showProject', function() {
      var projectView = new ProjectView();
      projectView.render();
    });


    //  history, pushState
    Backbone.history.start({pushState: true});
  }

  return {
    initialize: initialize
  }

});