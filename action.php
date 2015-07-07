<?php 

	$name = $_POST['name'];
	$email = $_POST['email'];

	if(!$name || !$email)
	{
		$data = array(
				'status'	=> false,
				'msg'		=> 'Please fill up all the form'
			);
	} else {
		
		// I will process the data here

		$data = array(
				'status'	=> true,
				'msg'		=> 'Sign up suceessful',
				'postdata'	=> array(
										'name'	=> $name,
										'email' =>	$email
									)
			);
	}

	echo json_encode($data);

 ?>