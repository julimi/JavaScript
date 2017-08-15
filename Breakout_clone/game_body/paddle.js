// Paddle
var Paddle = function() {
    var obj = {
      speed: 15,
      x: 150,
      y: 600,
    }
    obj.img = new_images['paddle']
    obj.moveLeft = function() {
      obj.x -= obj.speed
	  if (obj.x < 0) {
		  obj.x = 0
	  }
    }
    obj.moveRight = function() {
      obj.x += obj.speed
	  if (obj.x > 500 - obj.img.width) {
		  obj.x = 500 - obj.img.width
	  } 
    }
	obj.reboundBall = function(ball) {
		if (!ball.fired) {
			return false
		}
		if ((ball.x >= obj.x || ball.x + ball.img.width >= obj.x) 
			&& ball.x <= obj.x + obj.img.width) {
			if (ball.y + ball.img.height == obj.y) {
				return true
			}
		}
		return false
	}
    return obj
}