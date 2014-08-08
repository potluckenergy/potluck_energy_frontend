define(['jquery', 'firebase'], function($, Firebase) {

  var ref = new Firebase("https://potluck-energy.firebaseio.com/");
  var userRef = red.child('user');

  var doSignup = function() {
    var name = $('#signup-name').val();
    var email = $('#signup-email').val();
    var zip = $('#signup-zip').val();

    if ( name == '' ||  email == '' ||  zip == '' ) {
      alert('error');
    }
    else {
      userRef.set({
        name: name,
        email: email,
        zip: zip
      });
    }

    
  }

  return {
    doSignup: doSignup
  }

});