
$(document).ready(function(){

	$("#read1").click(showMore1);
	$("#read2").click(showMore2);
	$("#learn").click(showAbout);

		function showMore1() {
			event.preventDefault();	

			if ($("#pHidden1").hasClass("hidden")) {
				$("#pHidden1").removeClass("hidden");
				$("#pHidden1").slideDown();
				// $("#pHidden1").show();
				$("#read1").text("Read Less...");
			} else {
				$("#pHidden1").addClass("hidden");
				$("#pHidden1").slideUp();
				// $("#pHidden1").hide();
				$("#read1").text("Read more >");
			}
		}

		function showMore2() {
			event.preventDefault();	

			if ($("#pHidden2").hasClass("hidden")) {
				$("#pHidden2").removeClass("hidden");
				// $("#pHidden2").slideDown();
				$("#pHidden2").show();
				$("#read2").text("Read Less...");
			} else {
				$("#pHidden2").addClass("hidden");
				// $("#pHidden2").slideUp();
				$("#pHidden2").hide();
				$("#read2").text("Read more >");
			}
		}

		function showAbout() {
			event.preventDefault();	

			if ($("#about").find("span").hide()) {
				// $("span").removeClass("hidden");
				$("span").slideDown(2000);
				$("#learn").hide();
			} 
			//  else {
			// 	// $("span").addClass("hidden");
			// 	$("span").slideUp(2000);
			// 	$("span").hide();
			// 	$("#learn").text("Learn More");
			// }
		}
		
});