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

var _commonJsCommonJs = require('../../_common/js/common.js');

var tl = new TimelineMax();

var ss = {
	ball: {
		from: "copyFromBall",
		to: "copyToBall",
		total: 10,
		width: 110,
		repeat: 5
	},
	puck: {
		from: "copyFromPuck",
		to: "copyToPuck",
		total: 10,
		width: 130,
		repeat: 5
	}
};

function start() {
	tl.set(".frame1", { opacity: 1 });

	var tlPuck = (0, _commonJsCommonJs.makeSS)(ss.puck);
	var tlBall = (0, _commonJsCommonJs.makeSS)(ss.ball);
	var tlSS = new TimelineMax();
	tlSS.to(".mask.puck", .15, { opacity: 0 }, 1);

	tlSS.add("showBall", 1);
	tlSS.set(".mask.ball", { zIndex: 1, width: 0, opacity: 0 }, "showBall");
	tlSS.to(".mask.ball", .3, { width: 140, opacity: 1 }, "showBall");

	tlSS.add("showPuck", 3);
	tlSS.to(".mask.ball", .15, { opacity: 0 }, "showPuck");
	tlSS.set(".mask.puck", { zIndex: 1, width: 0, opacity: 0 }, "showPuck");
	tlSS.to(".mask.puck", .3, { width: 140, opacity: 1 }, "showPuck");

	tlSS.add("showBall2", 4);
	tlSS.to(".mask.puck", .15, { opacity: 0 }, "showBall2");
	tlSS.set(".mask.ball", { zIndex: 1, width: 0, opacity: 0 }, "showBall2");
	tlSS.to(".mask.ball", .3, { width: 140, opacity: 1 }, "showBall2");

	tl.to(".logoHolder", 2.5, { scale: .136, x: -664, y: 95, ease: Power1.easeIn });

	var tlRumble = new TimelineMax();
	var shake = 4;
	var time = .04;
	tlRumble.to(".logoHolder", time, { x: "+=" + shake, y: "+=" + shake / 2 }, 2.5);
	tlRumble.to(".logoHolder", time, { x: "-=" + shake, y: "-=" + shake / 2 });
	tlRumble.to(".logoHolder", time, { x: "+=" + shake, y: "+=" + shake / 2 });
	tlRumble.to(".logoHolder", time, { x: "-=" + shake, y: "-=" + shake / 2 });

	tl.add("t1", 2.4);
	tl.from(".t1a", .3, { scale: 2, opacity: 0, ease: Power4.easeInOut }, "t1");
	tl.from(".t1b", .3, { scale: 2, opacity: 0, ease: Power4.easeInOut }, "t1+=.8");

	tl.add("t2", "+=1.9");
	tl.to(".logoHolder", .5, { scale: .136, x: -664, y: 95, ease: Power4.easeInOut }, "t2");
	tl.to(".t1", .3, { opacity: 0, ease: Sine.easeOut }, "t2");
	tl.from(".t2", .3, { opacity: 0, ease: Sine.easeOut }, "t2+=.4");
	tl.to([".white-circle, .holder-ball"], .3, { opacity: 0 }, "t2+=.15");

	tl.add("footer");
	tl.from([".logos", '.footer', ".cta"], .3, { opacity: 0, ease: Sine.easeOut }, "footer");
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
