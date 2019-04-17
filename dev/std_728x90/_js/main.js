const tl = new TimelineMax()

import {makeSS} from '../../_common/js/common.js'

const ss = {
	ball:{
		from: "copyFromBall",
		to: "copyToBall",
		total: 10, 
		width: 110,
		repeat: 2
	},
	puck:{
		from: "copyFromPuck",
		to: "copyToPuck",
		total: 10, 
		width: 130,
		repeat:1
	}
}


function start(){
	tl.set(".frame1", {opacity:1})

	const tlPuck = makeSS(ss.puck)	
	const tlBall = makeSS(ss.ball)
	const tlSS = new TimelineMax()
	tlSS.to(`.mask.puck`, .15, {opacity: 0}, "+=1.2")

	tlSS.add("showBall", "-=.2")
	tlSS.set(`.mask.ball`, {zIndex:1, width:0, opacity:0}, "showBall")
	tlSS.to(`.mask.ball`, .3, {width:140, opacity:1}, "showBall")
	
	


	tl.to(".logoHolder", 2.6, {scale:.196, x:-234, y:-176, ease:Power4.easeInOut}, "+=.8")
	tl.add("t1", "-=1.2")
	tl.from(".t1a", .5, {scale:2, opacity:0, ease:Power4.easeInOut}, "t1")
	tl.from(".t1b", .5, {scale:2, opacity:0, ease:Power4.easeInOut}, "t1+=.1")
	tl.to([`.white-circle, .mask.ball`], .3, {opacity:0}, "t1")
	tl.add("t2", "+=1.2")
	tl.to(".logoHolder", .5, {scale:.118, x:-269, y:-189, ease:Power2.easeOut}, "t2")
	tl.to(".t1", .3, {opacity:0, ease:Sine.easeOut}, "t2")
	tl.from(".t2", .3, {opacity:0, ease:Sine.easeOut}, "t2+=.4")

	tl.add("footer")
	tl.from(".logos", .3, {opacity:0, ease:Sine.easeOut}, "footer")
	tl.from(".footer", .3, {opacity:0, ease:Sine.easeOut}, "footer")
	
	
}


start()

module.exports = {};

