/*! 
 *   TLT v1.0
 *   Author: Vivin Antony
 *   Website: www.thelittletechie.blogspot.com
*/

//Counter
$(function () {
    var $section = $('section');
    $(window).on("resize", function () {
        var dif = Math.max($(window).height() - $section.height(), 0);
        var padding = Math.floor(dif / 2) + 'px';
        $section.css({ 'padding-top': padding, 'padding-bottom': padding });
    }).trigger("resize");
    $('#myCounter').mbComingsoon({ expiryDate: new Date(2014, 10, 1, 0, 0), speed:100 });
    setTimeout(function () {
        $(window).resize();
    }, 200);
});