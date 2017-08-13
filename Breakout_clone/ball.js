// Ball
var Ball = function() {
    var obj = {
      speedX: 10,
	  speedY: -10,
	  x: 220,
	  y: 550,
	  fired: false,
    }
    obj.img = new_images['ball']
	obj.fire = function() {
		obj.fired = true
	}
	obj.moveLeft = function(speed) {
      obj.x -= speed
    }
    obj.moveRight = function(speed) {
      obj.x += speed
    }
    obj.move = function() {
		if (obj.fired) {
			log('3',obj.y,obj.speedY)
			if (obj.y < 600) {
				if (obj.x >= 450 || obj.x <= 0) {
					obj.speedX *= -1
				} 
				if (obj.y <= 0) {
					obj.speedY *= -1
				}
			}
			obj.x += obj.speedX
		  	obj.y += obj.speedY
  		}
    }
    obj.rebound = function() {
		obj.speedY *= -1
	}
	obj.beDragged = function(x,y) {
		var w = obj.img.width
		var h = obj.img.height
		var forX = x >= obj.x && x <= obj.x+w
		var forY = y >= obj.y && y <= obj.y+h
		return forX && forY
	}
    return obj
}