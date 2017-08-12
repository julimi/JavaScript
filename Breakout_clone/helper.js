// use for debug or catch key
var log = console.log.bind(console)
// fps
window.fps = 30
// control fps
document.querySelector('#fps').addEventListener('input', function(event) {
	var input = event.target
	//log('in',input.value)
	window.fps = Number(input.value)+1
	//log('out',window.fps)
})
// get Image from the path
var getImage = function(path) {
  // Can initial img without 'var' as a global variable,
  // so we can know the values of img in console of browser,
  // such as width, height etc.
  var img = new Image();
  img.src = path
  return img
}

// collide function
var collideWith = function(a,b) {
	if (b.x >= a.x && b.x <= a.x + b.img.width) {
		if (b.y >= a.y && a.y + a.img.height >= b.y) {
			return true
		}
	}
	return false
}

