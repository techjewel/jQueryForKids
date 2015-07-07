$(document).ready(function(){

	$('.signup_btn').on('click', function(event){
		event.preventDefault();
		
		//$(this).attr('href', '#');

		//var val = $(this).text('Please Signup Bellow');

		// var myText = "Hello, Please signup now. <b>Bold Text</b>";

		// var result = $('#signup_form').removeClass('hide');

		// console.log(result);
		// $('.someRemoteData').append(myText);

	});


	var $form = $('#signupform');
	var $errorNode = $('#form_error');

	$form.on('submit', function(event){
		event.preventDefault();

		// get the form values;
		var name = $('#signup_form input[name=name]').val();
		var email = $('#signup_form input[name=email]').val();

		if(!name || !email)
		{
			$errorNode.html('Fill up the form please').removeClass('hide');
			return;
		}

		// make ajax call

		var data = {'name': name, 'email' : email};

        var url = "action.php?i=" + $.now();

        var request = $.post(url, data);

        request.done(function( data ) {
            data = $.parseJSON(data);

           	if(!data.status) {
           		$errorNode.html(data.msg).removeClass('hide');
           	} else {
           		$errorNode.html(data.msg).removeClass('hide').removeClass('alert-danger').addClass('alert-success');
           	}

        });

        request.fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + textStatus );
        });



	});

});
