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
	plane_enemy1: 'img/plane_enemy1.png',
	plane_enemy2: 'img/plane_enemy2.png',
	plane_enemy3: 'img/plane_enemy3.png',
	plane_enemy4: 'img/plane_enemy4.png',
	plane_player: 'img/plane_player.png',
	cloud2: 'img/cloud.png',
	cloud1: 'img/cloud1.png',
	bullet: 'img/bullet.png',
	background: 'img/background.jpg',
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