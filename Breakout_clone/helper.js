// use for debug or catch key
var log = console.log.bind(console)
// home-make log, but find it useless
// arrow function =>, make self be another expression
/*var l = self => document.querySelector(self)
var log = function(v) {
	l('#log').value += v
}*/
// fps
window.fps = 30
// control fps
document.querySelector('#fps').addEventListener('input', function(event) {
	var input = event.target
	//log('in',input.value)
	window.fps = Number(input.value)+1
	//log('out',window.fps)
})

// list of images should be loaded
var images = {
	ball: 'ball.png',
	paddle: 'paddle.png',
	block: 'block.png',
	block1: 'block1.png',
	block2: 'block2.png',
	background: 'background.png',
}
// list of images loaded
var new_images = {}
// loaded used to determine if all images load (for test!)
//var loaded = []
// load each image just once
var loadImage = function() {
	var image_keys = Object.keys(images)
	for (var i = 0; i < image_keys.length; i++) {
		var k = image_keys[i]
		var p = images[k]
		new_images[k] = getImage(p)
		//loaded.push(1)
	}
} 
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

// Level
curLvl = level[0]


var buildBlocks = function() {
	var blocks = []
	for (var i = 0; i < curLvl.length; i++) {
		var p = curLvl[i]
		var b = Block(p)
		blocks.push(b)
	}
	return blocks
}
