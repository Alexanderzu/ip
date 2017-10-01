window.onload = function() {
	document.querySelector("#show-ip").onclick = function() {
		ajaxGET("ip.php", function(data) {
			document.querySelector("#my-ip").innerHTML = data;
		});
	}
}


function ajaxGET(url, callback) {
	var XHR = new XMLHttpRequest();
	var f = callback || function(data) {};

	XHR.onreadystatechange = function() { // статус готовности запроса
		if (XHR.readyState == 4 && XHR.status == 200) {
			f(XHR.responseText);
			
		}
	}

	XHR.open("GET", url);
	XHR.send();
}