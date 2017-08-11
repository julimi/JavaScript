// use for debug or catch key
var log = console.log.bind(console)
// get Image from the path
var getImage = function(path) {
  // Can initial img without 'var' as a global variable,
  // so we can know the values of img in console of browser,
  // such as width, height etc.
  var img = new Image();
  img.src = path
  return img
}


// Paddle
var Paddle = function() {
    var obj = {
      speed: 15,
      x: 150,
      y: 600,
    }
    obj.img = getImage('paddle.png')
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
		if (ball.x >= obj.x && ball.x + ball.img.width <= obj.x + obj.img.width) {
			if (ball.y + ball.img.height == obj.y) {
				return true
			}
		}
		return false
	}
    return obj
}

// Ball
var Ball = function() {
    var obj = {
      speedX: 10,
	  speedY: -10,
	  x: 220,
	  y: 550,
	  fired: false,
    }
    obj.img = getImage('ball.png')
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
    
    return obj
}

// Breakout_clone game body
var Game = function() {
  var obj = {
    keydowns: {},
    actions: {},
  }
  // paddle and ball in game
  	obj.paddle = new Paddle()
	obj.ball = new Ball()
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

  }

  // update
  obj.update = function() {
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
	if (obj.ball.fired && obj.paddle.reboundBall(obj.ball)) {
		obj.ball.speedY *= -1
	}
  }
  // timer
  // set FPS as 30
  setInterval(function () {
    obj.update()
    obj.draw()
  }, 1000/30)
  return obj
}

// main function
var main = function() {

  
  var game = new Game()
  // set the actions I want
  game.setAction('a', function() {
	  if (game.paddle.x > 1) { 
    	game.paddle.moveLeft()
		if (!game.ball.fired) {
			game.ball.moveLeft(game.paddle.speed)
		}
	}
  })
  game.setAction('d', function() {
	  if (game.paddle.x < 499 - game.paddle.img.width) {
		game.paddle.moveRight()
		if (!game.ball.fired) {
			game.ball.moveRight(game.paddle.speed)
		}
	}
  })
  game.setAction('f', function() {
	  game.ball.fire()
  })
}

main()