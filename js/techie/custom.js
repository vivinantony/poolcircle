/*! 
 *   TLT v1.0
 *   Author: Vivin Antony
 *   Website: www.thelittletechie.blogspot.com
*/

//tooltip - top
$(document).ready(function(){
	$(".tooltiptop").tooltip({
		placement : 'top'
	});
});

//tooltip - bottom
$(document).ready(function(){
	$(".tooltiptop").tooltip({
 		placement : 'bottom'
	});
});

//tooltip - left
$(document).ready(function(){
	$(".tooltiptop").tooltip({
		placement : 'left'
	});
});

//tooltip - right
$(document).ready(function(){
	$(".tooltiptop").tooltip({
		placement : 'right'
	});
});

//smooth scroll to top
$(window).scroll(function() {
	if ($(this).scrollTop()) {
		$('.scrollup').fadeIn();
	} else {
		$('.scrollup').fadeOut();
	}
});

$(".scrollup").click(function () {
   $("html, body").animate({scrollTop: 0}, 1000);
});

//loading spinner - ladda
$(function() {
  $('.loading-spin').click(function(e){
    e.preventDefault();
    var l = Ladda.create(this);
    l.start();
    $.post("your-url", 
        { data : data },
      function(response){
        console.log(response);
      }, "json")
    .always(function() { l.isLoading(); });
    return false;
  });
});

//Add collapse and remove events to boxes
$("[data-widget='collapse']").click(function() {
	//Find the box parent        
	var box = $(this).parents(".box").first();
	//Find the body and the footer
	var bf = box.find(".box-body, .box-footer");
	if (!box.hasClass("collapsed-box")) {
	   box.addClass("collapsed-box");
	   //Convert plus into minus
	   $(this).children(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
	   bf.slideDown();
	} else {
	   box.removeClass("collapsed-box");	   
	   //Convert minus into plus
	   $(this).children(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
	   bf.slideUp();
	}
});

//removes the box
$("[data-widget='remove']").click(function() {
	//Find the box parent        
	var box = $(this).parents(".box").first();
	box.slideUp();
});

//thin scroll
$(document).ready(function () {
    $('.scrollbox').modal('toggle');
    setTimeout(function () {
        myScroll = new IScroll('.scrollinnerbox', {
            mouseWheel: true,
            scrollbars: true
        });
    }, 500);
});

//animation
// $(document).ready(function() {
//   $('.animation').addClass("animation-hidden").viewportChecker({
//     classToAdd: 'animation-visible animated tada', 
//     offset: 100, 
//     repeat: true, 
//     callbackFunction: function(elem, action){},
//     scrollHorizontal: false 
//   });
// });