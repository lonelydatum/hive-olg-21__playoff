const tl = new TimelineMax()
import {makeSS} from '../../_common/js/common.js'


const ss = {
	ball:{
		from: "copyFromBall",
		to: "copyToBall",
		total: 10, 
		width: 110,
		repeat: 5
	},
	puck:{
		from: "copyFromPuck",
		to: "copyToPuck",
		total: 10, 
		width: 130,
		repeat:5
	}
}



function start(){	
	tl.set(".frame1", {opacity:1})

	const tlPuck = makeSS(ss.puck)	
	const tlBall = makeSS(ss.ball)
	const tlSS = new TimelineMax()
	tlSS.to(`.mask.puck`, .15, {opacity: 0}, 1)

	tlSS.add("showBall", 1)
	tlSS.set(`.mask.ball`, {zIndex:1, width:0, opacity:0}, "showBall")
	tlSS.to(`.mask.ball`, .3, {width:140, opacity:1}, "showBall")

	tlSS.add("showPuck", 3)
	tlSS.to(`.mask.ball`, .15, {opacity: 0}, "showPuck")
	tlSS.set(`.mask.puck`, {zIndex:1, width:0, opacity:0}, "showPuck")
	tlSS.to(`.mask.puck`, .3, {width:140, opacity:1}, "showPuck")

	tlSS.add("showBall2", 4)
	tlSS.to(`.mask.puck`, .15, {opacity: 0}, "showBall2")
	tlSS.set(`.mask.ball`, {zIndex:1, width:0, opacity:0}, "showBall2")
	tlSS.to(`.mask.ball`, .3, {width:140, opacity:1}, "showBall2")
	
	



	
	tl.to(".logoHolder", 2.5, {scale:.139, x:-657, y:-55, ease:Power1.easeIn})

	const tlRumble = new TimelineMax()
	const shake = 4
	const time = .04
	tlRumble.to(".logoHolder", time, {x:`+=${shake}`, y:`+=${shake/2}`}, 2.5)
	tlRumble.to(".logoHolder", time, {x:`-=${shake}`, y:`-=${shake/2}`})
	tlRumble.to(".logoHolder", time, {x:`+=${shake}`, y:`+=${shake/2}`})
	tlRumble.to(".logoHolder", time, {x:`-=${shake}`, y:`-=${shake/2}`})



	tl.add("t1", 2.4)
	tl.from(".t1a", .3, {scale:2, opacity:0, ease:Power4.easeInOut}, "t1")
	tl.from(".t1b", .3, {scale:2, opacity:0, ease:Power4.easeInOut}, "t1+=.8")
	

	tl.add("t2", "+=1.9")
	tl.to(".logoHolder", .5, {scale:.086, x:-658, y:-98, ease:Power4.easeInOut}, "t2")
	tl.to(".t1", .3, {opacity:0, ease:Sine.easeOut}, "t2")
	tl.from(".t2", .3, {opacity:0, ease:Sine.easeOut}, "t2+=.4")
	tl.to([`.white-circle, .holder-ball`], .3, {opacity:0}, "t2+=.15")

	tl.add("footer")
	tl.from(".logos", .3, {opacity:0, ease:Sine.easeOut}, "footer")
	tl.from(".footer", .3, {opacity:0, ease:Sine.easeOut}, "footer")
	
	
}



start()

module.exports = {};

