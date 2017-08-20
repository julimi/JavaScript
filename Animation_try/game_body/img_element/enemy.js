// Paddle
class Enemy extends MyImage {
    constructor(name, game){
		super(name,game)
		this.setup()
    }
	setup() {
		this.speed = 20
      	this.x = 700
      	this.y = randomBtw(400,580)
		this.realw = 100
		this.realh = 180
		this.curIndex = 0
		this.flipHorizontal = true
		this.order = ['stand','runL','runR','runU','runD','attack']
		// this.action = {
		// 	stand: this.setState('stand'),
		// 	runL: this.move(-this.speed),
		// 	runR: this.move(this.speed),
		// }
	}
	receiveOrder() {
		var o = randomBtw(0,this.order.length-1)
		//log(o)
		return this.order[o]
	}
	// actions
	act(o) {
		if (o == 'stand') {
			this.setState('stand')
		} else if (o == 'runL') {
			this.move(-this.speed,true)
		} else if (o == 'runR') {
			this.move(this.speed,true)
		} else if (o == 'runU') {
			this.move(-this.speed,false)
		} else if (o == 'runD') {
			this.move(this.speed,false)
		} else if (o == 'attack') {
			this.attack()
		}
	}
	update() {
		this.attackduration--
		var a = this.animation
		var s = this.curState
		this.curIndex = (this.curIndex+1)%a[s].length
		this.img = a[s][this.curIndex]
		if (s == 'attack' && this.attackduration == 0) {
			this.curState = 'stand'
		} else if (s != 'attack') {
			var o = this.receiveOrder()
			//log(this.action[o])
			this.act(o)
		}
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
    move(vector,ishorizontal) {
		
		this.setState('run')
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