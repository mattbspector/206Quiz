$(document).ready(function(){

	var totalscore = 0;
	var finalcolor = "";
	var animal = -1;


	$(".nextbutton1").click(function(){
		$(".nextbutton1").css("position","static");
		$("#page1").animate({width:'toggle'},1000);
	})


	$(".nextbutton2").click(function(){
		$(".nextbutton2").css("position","static");
	   finalcolor = $("#one input[type = 'color']").val();

		$("#page2").animate({width:'toggle'},1000);
	})


	$(".nextbutton3").click(function(){

		totalscore += parseInt($("#one input[type = 'radio']:checked").val());
		console.log(totalscore);
		$("#page3").animate({width:'toggle'},1000);
		


	})


	$(".nextbutton4").click(function(){
		totalscore += parseInt($("#one input[type = 'range']").val());
		console.log(totalscore);
		if(totalscore < 5)
		{	
			$("#page5 .animal").text("YOU ARE A COW");
		    $('#one input[type = "hidden"').val("Cow"); //cache element
		    $("#page5 img").attr("src", "all-about-cows-1.jpg");
			

			
		}
		else if(totalscore < 10)
		{
			$("#page5 .animal").text("YOU ARE A PUPPY");
			$('#one input[type = "hidden"').val("Puppy");
			$("#page5 img").attr("src", "cute_puppy.jpg");
			
		}
		else
		{
			$("#page5 .animal").text("YOU ARE A LION");
			$('#one input[type = "hidden"').val("Lion");
			$("#page5 img").attr("src", "lion.jpg");
		}	
		$("#page5").css("background-color", finalcolor);
		$("#page4").animate({width:'toggle'},1000);

		console.log(totalscore);
	})


});
		









