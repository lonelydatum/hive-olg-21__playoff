import './common.js'

function start(){

	

	const time = .6

	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	tl.from("#player", .5, {x:-200})

	tl.from("#t1a", time, {x:-100, opacity:0}, '-=.15')
	tl.from("#t1b", time, {x:-100, opacity:0}, `-=${time*.3}`)
	

	const t1Out = {opacity:0}
	tl.add("t1Out", "+=2.5")
	tl.to("#t1a", .3, t1Out, "t1Out")
	tl.to("#t1b", .3, t1Out, "t1Out")
	



	const scale = {scale:2, opacity:0, ease:Back.easeIn}
	
	tl.set(".frame2", {opacity:1})
	tl.add("t2In")
	tl.from("#t2a", .3, scale, "t2In")
	

	const shakeAmount = 7
	tl.add("shake", "-=.05")
	tl.to("#player", .05, {x:`+=${shakeAmount}`, y:`+=${shakeAmount/2}`}, "shake")
	tl.to("#player", .05, {x:`-=${shakeAmount}`, y:`-=${shakeAmount/2}`})
	tl.to("#player", .05, {x:`+=${shakeAmount}`, y:`+=${shakeAmount/2}`})
	tl.to("#player", .05, {x:`-=${shakeAmount}`, y:`-=${shakeAmount/2}`})

	// tl.to("#bg", .05, {x:`+=${shakeAmount}`, y:`+=${shakeAmount/2}`}, "shake")
	// tl.to("#bg", .05, {x:`-=${shakeAmount}`, y:`-=${shakeAmount/2}`})
	// tl.to("#bg", .05, {x:`+=${shakeAmount}`, y:`+=${shakeAmount/2}`})
	// tl.to("#bg", .05, {x:`-=${shakeAmount}`, y:`-=${shakeAmount/2}`})


	

	tl.from("#footer", .35, {opacity:0}, "+=.3")


	// tl.gotoAndPlay("t2In")


}




module.exports = start

