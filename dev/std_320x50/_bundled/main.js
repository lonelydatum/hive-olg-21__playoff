(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

function makeSS(obj) {
	var copyFrom = document.getElementById(obj.from);
	var copyTo = document.getElementById(obj.to);

	copyTo.style.background = 'url(' + copyFrom.src + ')';

	var size = obj.width - obj.width * obj.total;

	TweenMax.to('#' + obj.to, .9, { backgroundPosition: size + 'px 0px', ease: SteppedEase.config(obj.total - 1), repeat: obj.repeat });
}

exports.size = size;
exports.makeSS = makeSS;

},{}],2:[function(require,module,exports){
"use strict";

require('./common.js');

function start() {

	var time = .6;

	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	tl.from("#player", .5, { x: -200 });

	tl.from("#t1a", time, { x: -100, opacity: 0 }, '-=.15');
	tl.from("#t1b", time, { x: -100, opacity: 0 }, "-=" + time * .3);

	var t1Out = { opacity: 0 };
	tl.add("t1Out", "+=2.5");
	tl.to("#t1a", .3, t1Out, "t1Out");
	tl.to("#t1b", .3, t1Out, "t1Out");

	var scale = { scale: 2, opacity: 0, ease: Back.easeIn };

	tl.set(".frame2", { opacity: 1 });
	tl.add("t2In");
	tl.from("#t2a", .3, scale, "t2In");

	var shakeAmount = 7;
	tl.add("shake", "-=.05");
	tl.to("#player", .05, { x: "+=" + shakeAmount, y: "+=" + shakeAmount / 2 }, "shake");
	tl.to("#player", .05, { x: "-=" + shakeAmount, y: "-=" + shakeAmount / 2 });
	tl.to("#player", .05, { x: "+=" + shakeAmount, y: "+=" + shakeAmount / 2 });
	tl.to("#player", .05, { x: "-=" + shakeAmount, y: "-=" + shakeAmount / 2 });

	// tl.to("#bg", .05, {x:`+=${shakeAmount}`, y:`+=${shakeAmount/2}`}, "shake")
	// tl.to("#bg", .05, {x:`-=${shakeAmount}`, y:`-=${shakeAmount/2}`})
	// tl.to("#bg", .05, {x:`+=${shakeAmount}`, y:`+=${shakeAmount/2}`})
	// tl.to("#bg", .05, {x:`-=${shakeAmount}`, y:`-=${shakeAmount/2}`})

	tl.from("#footer", .35, { opacity: 0 }, "+=.3");

	// tl.gotoAndPlay("t2In")
}

module.exports = start;

},{"./common.js":1}],3:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _commonJsHorizontalJs = require('../../_common/js/horizontal.js');

var _commonJsHorizontalJs2 = _interopRequireDefault(_commonJsHorizontalJs);

TweenMax.from("#phone", 1, { y: "+=100" });
TweenMax.delayedCall(.3, _commonJsHorizontalJs2["default"]);

},{"../../_common/js/horizontal.js":2}]},{},[3])


//# sourceMappingURL=main.js.map
