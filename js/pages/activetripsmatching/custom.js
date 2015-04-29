/*! 
 *   TLT v1.0
 *   Author: Vivin Antony
 *   Website: www.thelittletechie.blogspot.com
*/

//active menu
$(document).ready(function(){
	$('.menu_carpool').removeClass('menu_carpool').addClass('active');
});

//date & time picker
$(window).load(function(){
	$('.datetimepicker').datetimepicker();
});
