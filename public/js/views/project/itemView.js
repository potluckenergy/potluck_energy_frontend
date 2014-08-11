//  itemView.js
//  /project
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/project/item.html'
], function($, _, Backbone, template) {
  
  var ItemView = Backbone.View.extend({

    template: _.template(template),

    render: function() {
      return this.template(this.model);
    }

  });

  return ItemView;

});