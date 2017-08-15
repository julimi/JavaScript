// use for debug or catch key
var log = console.log.bind(console)
// home-make log, but find it useless
// arrow function =>, make self be another expression
/*var l = self => document.querySelector(self)
var log = function(v) {
	l('#log').value += v
}*/

// list of images should be loaded
var images = {
	ball: 'img/ball.png',
	ball1: 'img/ball1.png',
	paddle: 'img/paddle.png',
	block: 'img/block.png',
	block1: 'img/block1.png',
	block2: 'img/block2.png',
	background: 'img/background.png',
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
var collideWith = function(a,b,c) {
	if (b.x >= a.x && b.x <= a.x + a.img.width) {
		if (b.y >= a.y && a.y + a.img.height >= b.y) {
			if (b.y != a.y+a.img.height) {
				c.reboundX()
			}
			c.reboundY()
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
