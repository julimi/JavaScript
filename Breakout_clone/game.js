var buildBlocks = function() {
	var blocks = []
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			var p = [i*50,j*20]
			var b = new Block(p)
			blocks.push(b)
		}
	}
	return blocks
}

// Breakout_clone game body
var Game = function() {
  var obj = {
    keydowns: {},
    actions: {},
	paused: false,
  }
  // paddle,blocks and ball in game
  	obj.paddle = new Paddle()
	obj.ball = new Ball()
	obj.blocks = buildBlocks()
	log('1', obj.ball.speedY)
  	obj.canvas = document.querySelector('canvas')
  	obj.context = canvas.getContext('2d')

  // 1.events
  window.addEventListener('keydown', function(event){
    obj.keydowns[event.key] = true
  })
  window.addEventListener('keyup', function(event){
    obj.keydowns[event.key] = false
  })

  // 2.set each action nad keydown
  obj.setAction = function(key, func) {
    obj.keydowns[key] = false
    obj.actions[key] = func
  }

  // draw
  obj.draw = function() {
    obj.context.clearRect(0,0,obj.canvas.width,obj.canvas.height)
	// draw paddle
    obj.context.drawImage(obj.paddle.img,obj.paddle.x,obj.paddle.y)
	// draw ball
	obj.context.drawImage(obj.ball.img,obj.ball.x,obj.ball.y)
	// draw blocks
	for (var i = 0; i < obj.blocks.length; i++) {
		var b = obj.blocks[i]
		if (b.alive) {
			obj.context.drawImage(b.img,b.x,b.y)
		}
	}

  }

  // update
  obj.update = function() {
	  if (obj.paused) {
		  return
	  }
    // obtain a list of keys of array 'actions',
    // such as 'a','d' etc.
    var index = Object.keys(obj.actions)
    for (var i = 0; i < index.length; i++) {
      var k = index[i]
      if (obj.keydowns[k]) {
        obj.actions[k]()
      }
    }
	
	log('2', obj.ball.speedY)
	obj.ball.move()
	if (obj.paddle.reboundBall(obj.ball)) {
		obj.ball.rebound()
	}
	for (var i = 0; i < obj.blocks.length; i++) {
		var b = obj.blocks[i]
		if (b.reboundBall(obj.ball)) {
			b.kill()
			obj.ball.rebound()
		}
	}
  }
  // new timer for changing fps
  obj.timer = function() {
	  obj.update()
      obj.draw()
	  setTimeout(function () {
	    obj.timer()
	}, 1000/window.fps)
  }
  setTimeout(function () {
    obj.timer()
}, 1000/window.fps)
  return obj
}
