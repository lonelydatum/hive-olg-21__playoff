const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut


function makeSS(obj){
	const copyFrom = document.getElementById(obj.from)
	const copyTo = document.getElementById(obj.to)

	copyTo.style.background = `url(${copyFrom.src})`

	const size = obj.width - (obj.width * obj.total)
		
	TweenMax.to( `#${obj.to}`, .9, { backgroundPosition:`${size}px 0px`, ease:SteppedEase.config(obj.total-1), repeat:obj.repeat} )
	
	
}

export {size, makeSS}