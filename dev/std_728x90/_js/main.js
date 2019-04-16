const tl = new TimelineMax()
const tlMasker = new TimelineMax()

function start(){
	
	swipe([".mask.ball", ".mask.puck"])
	swipe([".mask.puck", ".mask.ball"])
	swipe([".mask.ball", ".mask.puck"])
	swipe([".mask.puck", ".mask.ball"])
	tl.set(".frame1", {opacity:1})

	tl.to(".logoHolder", 2.6, {scale:.196, x:-234, y:-176, ease:Power4.easeInOut}, "+=.5")
	tl.add("t1", "-=1.2")
	tl.from(".t1a", .5, {scale:2, opacity:0, ease:Power4.easeInOut}, "t1")
	tl.from(".t1b", .5, {scale:2, opacity:0, ease:Power4.easeInOut}, "t1+=.1")

	tl.add("t2", "+=1.2")
	tl.to(".logoHolder", .5, {scale:.118, x:-269, y:-189, ease:Power2.easeOut}, "t2")
	tl.to(".t1", .3, {opacity:0, ease:Sine.easeOut}, "t2")
	tl.from(".t2", .3, {opacity:0, ease:Sine.easeOut}, "t2+=.4")

	tl.add("footer")
	tl.from(".logos", .3, {opacity:0, ease:Sine.easeOut}, "footer")
	tl.from(".footer", .3, {opacity:0, ease:Sine.easeOut}, "footer")
	
	
}

function swipe(ab){
	
	tlMasker.add("pause", "+=.3")
	tlMasker.set(ab[0], {zIndex:1, width:0}, "pause")
	tlMasker.set(ab[1], {zIndex:0, width:200}, "pause")
	tlMasker.to(ab[0], .5, {width:200, ease:Power4.easeInOut})
}

start()

module.exports = {};

