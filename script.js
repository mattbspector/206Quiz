$(document).ready(function(){

	var totalscore = 0;
	var finalcolor = "";






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

	   finalcolor = $("#color input[type = 'color']").val();
		$("#page2").animate({width:'toggle'},1000);
	})


	$(".nextbutton3").click(function(){

		totalscore += parseInt($("#food input[type = 'radio']:checked").val());
		$("#page3").animate({width:'toggle'},1000);
		


	})


	$(".nextbutton4").click(function(){
		totalscore += parseInt($("#meat input[type = 'range']").val());
		if(totalscore < 5)
		{	
			$("#page5 .animal").text("YOU ARE A COW");
			  $("#page5 img").attr("src", "all-about-cows-1.jpg");

			
		}
		else if(totalscore < 10)
		{
			$("#page5 .animal").text("YOU ARE A PUPPY");
			$("#page5 img").attr("src", "cute_puppy.jpg");
			
		}
		else
		{
			$("#page5 .animal").text("YOU ARE A LION");
			$("#page5 img").attr("src", "lion.jpg");
		}	
		$("#page5").css("background-color", finalcolor);
		$("#page4").animate({width:'toggle'},1000);

		console.log(totalscore);
	})


});
		









