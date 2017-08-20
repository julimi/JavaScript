// Paddle
class Player extends MyImage {
    constructor(name, game){
		super(name,game)
		this.setup()
    }
	setup() {
		this.speed = 20
      	this.x = 0
      	this.y = 500
		this.curIndex = 0
		this.flipHorizontal = false
		this.curState = 'stand'
		this.animation = {
			stand: [],
			run: [],
		}
		// stand
		for (var i = 0; i < 4; i++) {
			var name = 'stand' + i
			var img = new_images[name]
			this.animation['stand'].push(img)
		}
		// run
		for (var i = 0; i < 8; i++) {
			var name = 'run' + i
			var img = new_images[name]
			this.animation['run'].push(img)
		}
	}
	update() {
		var a = this.animation
		var s = this.curState
		this.curIndex = (this.curIndex+1)%a[s].length
		this.img = a[s][this.curIndex]
	}
	setState(state) {
		this.curState = state
		//this.curIndex = 0
		
	}
	draw() {
		// flip horizontal if true
		if (this.flipHorizontal) {
			var c = this.game.context
			var x = (this.x + this.img.width/2)*2
			c.save()
			// just want to move horizontal
			//c.translate(x, 0);
			c.scale(-1, 1);
			c.translate(-x, 0)
			this.game.drawImage(this)
			c.restore()
			
		} else {
			this.game.drawImage(this)
		}
	}
    move(vector, status) {
		this.flipHorizontal = vector < 0
		var listofStatus = {
			down: 'run',
			up: 'stand',
		}
		this.setState(listofStatus[status])
      	this.x += vector
	//   if (this.x < 0) {
	// 	  this.x = 0
	//   }
    }
	// moveUp() {
    //   this.y -= this.speed
	//   if (this.y < 0) {
	// 	  this.y = 0
	//   }
    // }
	// moveDown() {
    //   this.y += this.speed
	//   if (this.y > 700 - this.img.height) {
	// 	  this.y = 700 - this.img.height
	//   }
    // }
}