/*! 
 *   TLT v1.0
 *   Author: Vivin Antony
 *   Website: www.thelittletechie.blogspot.com
*/

//show and hide phone number
$(document).ready(function() {
	$("#show-number").click(function () {
		$("#hide-number").show()
		$("#show-number").hide()
	});
	$("#hide-number").click(function () {
		$("#show-number").hide()
		$("#hide-number").show()
	});
});