$(document).ready(function(){








	$(".nextbutton1").click(function(){

	var firstboxval = $("#firstbox").val();
	var secondboxval = $("#secondbox").val();
	if(firstboxval != secondboxval)
	{
		alert("email's do not match!");
	}

	else
	{

		$("#page1").animate({width:'toggle'},1000);
	}


	})


	$(".nextbutton2").click(function(){
		$("#page2").animate({width:'toggle'},1000);
		


	})


	$(".nextbutton3").click(function(){
		$("#page3").animate({width:'toggle'},1000);
		


	})


	$(".nextbutton4").click(function(){
		$("#page4").animate({width:'toggle'},1000);
		


	})

});
		









