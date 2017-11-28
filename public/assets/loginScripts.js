$(document).ready(function(){

  console.log('Got here');

  $("#loginForm").on('submit',function(){
    var name = $('#loginName').val();
    var email = $('#loginEmail').val();
    var loginDetails = {name: name, Email: email};

    console.log(loginDetails);

    $.ajax({
      type: 'POST',
      url: '/',
      data:loginDetails,
      success: function(response) {
      }
    });

    return false;
  });

});
