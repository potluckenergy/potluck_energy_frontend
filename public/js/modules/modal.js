define([
  'jquery',
  'text!templates/initiate.html'
], function(
  $,
  initiateTemplate
) {
  
  var modal = function(template) {
    //  show modal
    $('#modal').fadeIn('fast');
    $("body").addClass("modal-open");

    setTimeout( function() {
      //  inject template
      $('#modal').append(template);
    }, 400);

    $('#modal-screen').click( function() {
      $('#modal').fadeOut('fast');
      $("body").removeClass("modal-open");
      //  remove template
      setTimeout( function() {
        $('#modal').html('<div id="modal-screen" class="modal-screen"></div>');
      }, 500);
    });
  }

  var showInitiate = function() {
    modal(initiateTemplate);
  }

  return {
    modal: modal,
    showInitiate: showInitiate
  }

});