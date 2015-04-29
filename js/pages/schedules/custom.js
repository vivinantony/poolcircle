/*! 
 *   TLT v1.0
 *   Author: Vivin Antony
 *   Website: www.thelittletechie.blogspot.com
*/

//active menu
$(document).ready(function(){
	$('.menu_schedules').removeClass('menu_schedules').addClass('active');
});

//Pause or play a schedule
$("[data-widget='pauseplay']").click(function() {
	//Find the box parent        
	var box = $(this).parents(".box").first();
	//Find the body and the footer
	var bf = box.find(".box-body, .box-footer");
	if (!box.hasClass("pauseplay-box")) {
	   box.addClass("pauseplay-box");
    	//Convert pause into play
	   $(this).children(".fa-pause").removeClass("fa-pause").addClass("fa-play");
	} else {
	   box.removeClass("pauseplay-box");	   	  
    	//Convert play into pause
	   $(this).children(".fa-play").removeClass("fa-play").addClass("fa-pause");
	}
});