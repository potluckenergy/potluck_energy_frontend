//  project.js
define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  
  var Project = Backbone.Model.extend({
    
    defaults: function() {
      return {
        name: 'name',
        location: 'location',
        developer: 'developer',
        landOwner: 'land owner',
        size: 'size',
        investmentGoal: 100,
        investmentCurrent: 0,
        consumptionGoal: 100,
        consumptionCurrent: 0,
        endDate: 'end date',
        schematicUrl: 'schematic url',
        angleOfRoof: '0 degrees',
        sizeOfRoof: 'size of roof',
        numModules: 10,
        moduleWatts: 10,
        acPower: 10,
        annualPower: 10,
        powerDepreciation: 0.0025,
        co2Offset: 10,
        treesSaved: 10,
        milesDriven: 10,
        yield: 0.07,
        greenCertificates: 10,
        payback: 10,
        cashflows: 'array'
      }
    }

  });

  return Project;

});