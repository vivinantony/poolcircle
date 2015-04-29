/*! 
 *   TLT v1.0
 *   Author: Vivin Antony
 *   Website: www.thelittletechie.blogspot.com
*/

//load header        
function header() {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState===4 && xmlhttp.status===200) {
			document.getElementById("headerLoad").innerHTML = xmlhttp.responseText;
		}
	};
	xmlhttp.open("GET","/header.html",true);
	xmlhttp.send();
}

//load footer
function footer() {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		   document.getElementById("footerLoad").innerHTML = xmlhttp.responseText;
		}
	};
	xmlhttp.open("GET","/footer.html",true);
	xmlhttp.send();
}

//load filter widget
function filterWidget() {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		   document.getElementById("filterWidgetLoad").innerHTML = xmlhttp.responseText;
		}
	};
	xmlhttp.open("GET","/pages/filterwidget.html",true);
	xmlhttp.send();
}

//load menu
function menu() {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		   document.getElementById("menuLoad").innerHTML = xmlhttp.responseText;
		}
	};
	xmlhttp.open("GET","menu.html",true);
	xmlhttp.send();
}

//load application header
function applicationHeader() {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		   document.getElementById("headerLoad").innerHTML = xmlhttp.responseText;
		}
	};
	xmlhttp.open("GET","/application/header.html",true);
	xmlhttp.send();
}

//load application footer
function applicationFooter() {
	var xmlhttp;
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		   document.getElementById("footerLoad").innerHTML = xmlhttp.responseText;
		}
	};
	xmlhttp.open("GET","/application/footer.html",true);
	xmlhttp.send();
}