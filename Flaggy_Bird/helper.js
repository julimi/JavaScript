// use for debug or catch key
var log = console.log.bind(console)
var e = self => document.querySelector(self)
// config
var ea = self => document.querySelectorAll(self)
const config = {
	pillar_distanceY: {
		topic: 'distanceY between pillars',
		value: 150,
		min: 100,
		max: 300,
	},
	pillar_distanceX: {
		topic: 'distanceX between pillars',
		value: 150,
		min: 150,
		max: 300,
	},
}
var templateRegulator = function(key,item) {
	var template = `
					<div class = "">
						<label>
							<input class='slider' type="range" 
							value="${item.value}"
							min="${item.min}"
							max="${item.max}"
							data-value="config.${key}">
							${item.topic}: <span class="myLabel"></span>
						</label>
					</div>
				
				`
	return template
}
var insertRegulator = function() {
	var div = e('.regulator')
	var keys = Object.keys(config)
	for (var k of keys) {
		var i = config[k]
		var rt = templateRegulator(k,i)
		div.insertAdjacentHTML('beforeend',rt)
	}
}
// bind all data from inputs
var bindAll = function(self, eventName, callback) {
	var regulators = ea(self)
	for (var i = 0; i < regulators.length; i++) {
		var input = regulators[i]
		input.addEventListener(eventName, function(event) {
			callback(event)
		})
	}
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
	// ok button
	cur = 'ok'
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

// collide
var collideWith = function(a,b) {
	if (b.x >= a.x && b.x <= a.x + a.img.width) {
		if (b.y >= a.y && a.y + a.img.height >= b.y) {
			return true
		}
	}
	return false
}
const randomBtw = function(a,b) {
	var rt = Math.random() * (b-a+1)
	return Math.floor(rt + a)
}