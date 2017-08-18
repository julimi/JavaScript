class Game {
	constructor() {
		log("create done!")
		this.setup()
		this.run()
	}
	setup() {
		this.canvas = document.querySelector('canvas')
  		this.context = canvas.getContext('2d')
		this.keydowns = {}
		this.actions = {}
		this.paused = false
		this.score = 0
		this.lvl = 1
		this.over = false
		//this.view = null
  
  		// paddle,blocks and ball in game 	
		this.enemyNum = 5
		this.enemyArray = []
  		this.view = new ViewMain(this)
		this.background = new MyImage('background',this)
		this.cloud = new Cloud('cloud2',this)
		this.cloud1 = new Cloud('cloud1',this)
		this.setupEnemy()
		this.plane_player = new PlanePlayer('plane_player',this)

		var self = this
  		// 1.events
  		window.addEventListener('keydown', function(event){
    		self.keydowns[event.key] = true
  		})
  		window.addEventListener('keyup', function(event){
    		self.keydowns[event.key] = false
  		})
	}
	setupEnemy() {
		for (var i = 0; i < this.enemyNum; i++) {
			var e = new PlaneEnemy(this)
			this.enemyArray.push(e)
		}
	}
  // 2.set each action nad keydown
  setAction(key, func) {
	var self = this
    self.keydowns[key] = false
    self.actions[key] = func
  }

  // determine if game is over
  // gameover() {
  //  var self = this
  //  if (self.ball.y >= self.canvas.height) self.over = true
  // }
  // set game pause or resume
  gamepause() {
   	var self = this
  	self.paused = !self.paused
  }
  // reload the page
  reset() {
	  location.reload()
  }
  // replace view
  replaceView(v) {
	  var self = this
	  self.view = v
  }
  
  // read actions
  readActions() {
	  // obtain a list of keys of array 'actions',
	 // such as 'a','d' etc.
	 var self = this
	 var index = Object.keys(self.actions)
	 for (var i = 0; i < index.length; i++) {
		 var k = index[i]
		 if (self.keydowns[k]) {
			 self.actions[k]()
		 }
	 }
  }
  drawImage(element) {
	  this.context.drawImage(element.img,element.x,element.y)
  }
  // draw
  draw() {
	  //log('enter',obj.view)
	  var self = this
	  self.view.draw()
  }

  // update
  update() {
	  var self = this
	  self.view.update()
  }
  // new timer for changing fps
  timer() {
	  var self = this
	  if (!self.paused) {
	  	self.readActions()
	  	self.update()
	  	self.context.clearRect(0,0,self.canvas.width,self.canvas.height)
      	self.draw()
  	  }
	  setTimeout(function(){
	    self.timer()
	 }, 1000/window.fps)
  }
  run() {
	  var self = this
  	setTimeout(function () {
    	self.timer()
	}, 1000/window.fps)
  }
}
