/*! 
 *   TLT v1.0
 *   Author: Vivin Antony
 *   Website: www.thelittletechie.blogspot.com
*/

//carousel timer
$('.carousel').carousel({
  interval: 5000,
  pause: "false"
});


//circle slides 
var selectedslide = 1;
function loadslide(slidenumber) {
	selectedslide = slidenumber;
	if(slidenumber == 1) {
		document.getElementById("slide1").style.display = "";
		document.getElementById("slide2").style.display = "none";
		document.getElementById("slide3").style.display = "none";
		document.getElementById("slide4").style.display = "none";
		document.getElementById("slide1sel").style.display = "";
		document.getElementById("slide2sel").style.display = "none";
		document.getElementById("slide3sel").style.display = "none";
		document.getElementById("slide4sel").style.display = "none";
	} else if(slidenumber == 2) {
		document.getElementById("slide1").style.display = "none";
		document.getElementById("slide2").style.display = "";
		document.getElementById("slide3").style.display = "none";
		document.getElementById("slide4").style.display = "none";
		document.getElementById("slide1sel").style.display = "none";
		document.getElementById("slide2sel").style.display = "";
		document.getElementById("slide3sel").style.display = "none";
		document.getElementById("slide4sel").style.display = "none";
	} else if(slidenumber == 3) {
		document.getElementById("slide1").style.display = "none";
		document.getElementById("slide2").style.display = "none";
		document.getElementById("slide3").style.display = "";
		document.getElementById("slide4").style.display = "none";
		document.getElementById("slide1sel").style.display = "none";
		document.getElementById("slide2sel").style.display = "none";
		document.getElementById("slide3sel").style.display = "";
		document.getElementById("slide4sel").style.display = "none";
	} else if(slidenumber == 4) {
		document.getElementById("slide1").style.display = "none";
		document.getElementById("slide2").style.display = "none";
		document.getElementById("slide3").style.display = "none";
		document.getElementById("slide4").style.display = "";
		document.getElementById("slide1sel").style.display = "none";
		document.getElementById("slide2sel").style.display = "none";
		document.getElementById("slide3sel").style.display = "none";
		document.getElementById("slide4sel").style.display = "";
	}
}
            
function changeslide() {
	if(selectedslide == 4) {
	  selectedslide = 0;
	}
	loadslide(selectedslide + 1);
}
            
function runslide() {
	setInterval(function(){
	  changeslide()
	},5000);
}