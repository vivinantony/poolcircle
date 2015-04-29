/*! 
 *   TLT v1.0
 *   Author: Vivin Antony
 *   Website: www.thelittletechie.blogspot.com
*/

//active menu
$(document).ready(function(){
	$('.menu_community').removeClass('menu_community').addClass('active');
});

//corp big circle bgcolor change on checkbox select
$(".corp-check").click(function() {
	if ($(".corp-check").is(":checked")) {
    	$(".corp-circle").css('background-color', '#55d782');
	}
	else {
    	$(".corp-circle").css('background-color', '#eee');
	}
});

//facebook big circle bgcolor change on checkbox select
$(".fb-check").click(function() {
	if ($(".fb-check").is(":checked")) {
    	$(".fb-circle").css('background-color', '#55d782');
	}
	else {
    	$(".fb-circle").css('background-color', '#eee');
	}
});

//linkedin big circle bgcolor change on checkbox select
$(".in-check").click(function() {
	if ($(".in-check").is(":checked")) {
    	$(".in-circle").css('background-color', '#55d782');
	}
	else {
    	$(".in-circle").css('background-color', '#eee');
	}
});

//show or hide div on radio select
$(document).ready(function(){
  $('input[type="radio"]').click(function(){
      if($(this).attr("value")=="option1"){
			$(".mycircle-show-hide").hide("linear");
      }
      if($(this).attr("value")=="option2"){
			$(".mycircle-show-hide").hide("linear");
      }
      if($(this).attr("value")=="option3"){
			$(".mycircle-show-hide").show("linear");
      }
  });
});

//Slim scroll bar
$(function(){
	$('.scroll-box').slimScroll({
	  height: '400px'
	});
});