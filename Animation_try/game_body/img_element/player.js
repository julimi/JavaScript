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
		this.life = 99
	}
	update() {
		if (this.curState == 'die' && this.dieduration == 0) {
			this.game.view.removeElement(this)
		}
		this.dieduration--
		this.attackduration--
		this.life--
		var a = this.animation
		var s = this.curState
		this.curIndex = (this.curIndex+1)%a[s].length
		
		this.img = a[s][this.curIndex]
		if (s == 'attack' && this.attackduration < 0) {
			this.curState = 'stand'
		}
		if (s != 'die' && this.life < 0) {
			this.die()
		}
	}
	setState(state) {
		this.curState = state
		
	}
	
	draw() {
		// flip horizontal if true
		if (this.flipHorizontal) {
			var c = this.game.context
			var x = (this.x + this.img.width/2)*2
			c.save()
			// just want to move horizontal
			//c.translate(x, 0)
			c.scale(-1, 1)
			c.translate(-x, 0)
			this.game.drawImage(this)
			c.restore()
			
		} else {
			this.game.drawImage(this)
		}
	}
    move(vector, status, ishorizontal) {
		var listofStatus = {
			down: 'run',
			up: 'stand',
		}
		this.setState(listofStatus[status])
      	if (ishorizontal) {
			this.flipHorizontal = vector < 0
			this.x += vector
		} else {
			this.y += vector
		}
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