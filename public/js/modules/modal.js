define([
  'jquery', 
  'text!templates/login.html'
], function(
  $,
  loginTemplate
) {
  
  var showLogin = function() {
    //  show modal
    $('#modal').fadeIn('fast');
    $("body").addClass("modal-open");

    setTimeout( function() {
      //  inject template
      $('#modal').append(loginTemplate);
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

  return {
    showLogin: showLogin
  }

});