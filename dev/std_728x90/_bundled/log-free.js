(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var tl = new TimelineMax();
var tlMasker = new TimelineMax();

function start() {

	swipe([".mask.ball", ".mask.puck"]);
	swipe([".mask.puck", ".mask.ball"]);
	swipe([".mask.ball", ".mask.puck"]);
	swipe([".mask.puck", ".mask.ball"]);
	tl.set(".frame1", { opacity: 1 });

	tl.to(".logoHolder", 2.6, { scale: .196, x: -234, y: -176, ease: Power4.easeInOut }, "+=.5");
	tl.add("t1", "-=1.2");
	tl.from(".t1a", .5, { scale: 2, opacity: 0, ease: Power4.easeInOut }, "t1");
	tl.from(".t1b", .5, { scale: 2, opacity: 0, ease: Power4.easeInOut }, "t1+=.1");

	tl.add("t2", "+=1.2");
	tl.to(".logoHolder", .5, { scale: .118, x: -269, y: -189, ease: Power2.easeOut }, "t2");
	tl.to(".t1", .3, { opacity: 0, ease: Sine.easeOut }, "t2");
	tl.from(".t2", .3, { opacity: 0, ease: Sine.easeOut }, "t2+=.4");

	tl.add("footer");
	tl.from(".logos", .3, { opacity: 0, ease: Sine.easeOut }, "footer");
	tl.from(".footer", .3, { opacity: 0, ease: Sine.easeOut }, "footer");
}

function swipe(ab) {

	tlMasker.add("pause", "+=.3");
	tlMasker.set(ab[0], { zIndex: 1, width: 0 }, "pause");
	tlMasker.set(ab[1], { zIndex: 0, width: 200 }, "pause");
	tlMasker.to(ab[0], .5, { width: 200, ease: Power4.easeInOut });
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
