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
		
		var self = this
  		// 1.events
  		window.addEventListener('keydown', function(event){
    		self.keydowns[event.key] = 'down'
  		})
  		window.addEventListener('keyup', function(event){
    		self.keydowns[event.key] = 'up'
  		})
	}
	
  // 2.set each action nad keydown
  setAction(key, func) {
	var self = this
    self.actions[key] = func
  }
  
  // read actions
  readActions() {
	  // obtain a list of keys of array 'actions',
	 // such as 'a','d' etc.
	 var self = this
	 var index = Object.keys(self.actions)
	 for (var i = 0; i < index.length; i++) {
		 var k = index[i]
		 var status = self.keydowns[k]
		 if (status == 'down') {
			 self.actions[k](status)
		 } else if (status == 'up') {
			 self.actions[k](status)
			 self.keydowns[k] = null
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
