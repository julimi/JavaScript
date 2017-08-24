// use for debug or catch key
var log = console.log.bind(console)

// config
var es = self => document.querySelectorAll(self)
const config = {
	pillar_distanceY: {
		comment: 'distanceY between pillars',
		value: 150,
	},
}
// bindall
var binaAll = function(self, callback) {
	
}
// list of images should be loaded
var images = {}

var createImage = function() {
	var pre = 'img/'
	var suf = '.png'
	// bird
	var cur = 'bird'
	for (var i = 0; i < 3; i++) {
		var k = cur + i
		images[k] = pre + cur + '/' + k + suf
	}
	// background
	cur = 'background'
	for (var i = 0; i < 2; i++) {
		var k = cur + i
		images[k] = pre + cur + '/' + k + suf
	}
	// ground
	cur = 'ground'
	images[cur] = pre + cur + suf
	// pillar
	cur = 'pillar'
	for (var i = 0; i < 2; i++) {
		var k = cur + i
		images[k] = pre + k + suf
	}
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