// Breakout_clone game body
var Game = function() {
  var obj = {
    keydowns: {},
    actions: {},
	paused: false,
	score: 0,
	lvl: 1,
	background: new_images['background'],
	over: false,
	view: null,
  }
  // paddle,blocks and ball in game
  	obj.paddle = Paddle()
	obj.ball = Ball()
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

  // determine if game is over
  obj.gameover = function() {
	  if (obj.ball.y >= obj.canvas.height) obj.over = true
  }
  // set game pause or resume
  obj.gamepause = function() {
	  obj.paused = !obj.paused
  }
  // reload the page
  obj.reset = function() {
	  location.reload()
  }
  // replace view
  obj.replaceView = function(v) {
	  obj.view = v
  }
  
  // read actions
  obj.readActions = function() {
	  // obtain a list of keys of array 'actions',
	 // such as 'a','d' etc.
	 var index = Object.keys(obj.actions)
	 for (var i = 0; i < index.length; i++) {
		 var k = index[i]
		 if (obj.keydowns[k]) {
			 obj.actions[k]()
		 }
	 }
  }
  // draw
  obj.draw = function() {
	  //log('enter',obj.view)
	  obj.view.draw()
  }

  // update
  obj.update = function() {
	  obj.view.update()
  }
  // new timer for changing fps
  obj.timer = function() {
	  obj.readActions()
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
