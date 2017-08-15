// Block
var Block = function(position) {
    var p = position
	var obj = {
      x: p[0],
      y: p[1],
	  alive: true,
	  life: p[2] || 1,
    }
	if (p[3]) {
		log(p[3])
		obj.img = new_images[p[3]]
	} else {
		obj.img = new_images['block']
	}
    
	obj.reboundBall = function(ball) {
		return obj.alive && (collideWith(ball,obj,ball) || collideWith(obj,ball,ball))
	}	
	
	obj.kill = function() {
		obj.life--
		if (obj.life < 1) {
			obj.alive = false
		} else if (obj.life == 1) {
			obj.img = new_images['block']
		} else {
			obj.img = new_images['block1']
		}
	}
    return obj
}