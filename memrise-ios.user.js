// ==UserScript==
// @name           Fix Memrise For iOS
// @description    Add mobile support back to Memrise website
// @match          http://www.memrise.com/course/*/garden/*
// @match          http://www.memrise.com/garden/water/*
// @require        http://cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.js
// @version        0.0.1
// @grant          none
// ==/UserScript==

var onLoad = function($) {

	var sheet = (function() {
		// Create the <style> tag
		var style = document.createElement("style");

		// Add a media (and/or media query) here if you'd like!
		// style.setAttribute("media", "screen")
		// style.setAttribute("media", "only screen and (max-width : 1024px)")

		// WebKit hack :(
		style.appendChild(document.createTextNode(""));

		// Add the <style> element to the page
		document.head.appendChild(style);

		return style.sheet;
	})();

	document.addEventListener("touchmove", function(e){ e.preventDefault(); }, false)
	sheet.insertRule("*{ -webkit-tap-highlight-color: rgba(0,0,0,0) !important; }", 0);
	FastClick.attach(document.body);
};

var inject = function(f) {
	var script = document.createElement('script');
	script.textContent = '(' + f.toString() + ')();';
	document.body.appendChild(script);
};

inject(onLoad);
