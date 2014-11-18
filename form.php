
<?php
	$filename = "fileoutput.csv";


 	$handle = fopen($filename, 'a');			//EMail message



	$food = $_POST["fav_food"];
	$meat = $_POST["meat"];
	if($food == 0){
		$food = "Pizza";
	}
	else if ($food == 1)
	{
		$food = "Salad";
	}
	else if ($food == 2)
	{
		$food = "Mac n Cheese";
	}

	else 
	{
		$food = "Steak";
	}
	

	/* Send Email */
	$to = $_POST["email"];//Put in your email here
	

	$msg = "Hello " .$_POST["firstName"]. " ,\n";
	$msg .= "Thank You For Completing Our Quiz!\n";	
	$msg .= "You Are A  " .$_POST["hiddenone"]. "!". "\n";
	$msg .= "Your favorite food is " . $food . "\n";	
	$msg .= "On a Scale of 1-10 for your love of meat, You Chose  " . $meat . "!" . "\n";
	$msg .= "We Hope You Visit Again Soon!\n" . "-Matt, Katie, and Christine";
	mail($to, 'Which Animal Are You!', $msg);
	
	/* Write to file */
	$fileInfo="Email: " . $_POST["email"]. "\n";
	$fileInfo.="Name: " . $_POST["firstName"] . " " . $_POST["lastName"].  "\n";
	$fileInfo.="Favorite Food: " . $food . "\n";
	$fileInfo.="Meat Scale: " . $meat . "\n";

	fwrite($handle, $fileInfo);
	fclose($handle); 

  echo '<body style = "text-align:center; background-color:#222; color:#FFF;">

		<h1>Thank You For Taking Our Quiz!</h1>
		<a href = "http://mattspec.people.si.umich.edu/206Quiz"> Start Again!</a>
	</body>	';


?>