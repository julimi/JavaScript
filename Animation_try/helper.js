// use for debug or catch key
var log = console.log.bind(console)

// list of images should be loaded
var images = {}

var createImage = function() {
	var pre = 'img/'
	var suf = '.png'
	// stand
	var cur = 'stand'
	for (var i = 0; i < 4; i++) {
		var k = cur + i
		images[k] = pre + cur + '/' + k + suf
	}
	// run
	cur = 'run'
	for (var i = 0; i < 8; i++) {
		var k = cur + i
		images[k] = pre + cur + '/' + k + suf
	}
	// attack
	cur = 'attack'
	for (var i = 0; i < 8; i++) {
		var k = cur + i
		images[k] = pre + cur + '/' + k + suf
	}
	// die
	cur = 'die'
	for (var i = 0; i < 7; i++) {
		var k = cur + i
		images[k] = pre + cur + '/' + k + suf
	}
	// background
	cur = 'background'
	suf = '.JPG'
	images[cur] = pre + cur + suf
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

const randomBtw = function(a,b) {
	var rt = Math.random() * (b-a+1)
	return Math.floor(rt + a)
}