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
		obj.img = getImage(p[3])
	} else {
		obj.img = getImage('block.png')
	}
    
	obj.reboundBall = function(ball) {
		return obj.alive && (collideWith(ball,obj) || collideWith(obj, ball))
	}	
	
	obj.kill = function() {
		obj.life--
		if (obj.life < 1) {
			obj.alive = false
		}
	}
    return obj
}