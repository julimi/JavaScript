// Paddle
class Bird extends MyImage {
    constructor(name,game){
		super(name,game)
		this.setup()
    }
	setup() {
		this.speed = 20
		// gravity acceleration
		this.gy = 10
		this.vy = 0
		// rotating degree
		this.rd = 50
      	this.x = 50
      	this.y = 100
		this.curIndex = 0
		this.flipHorizontal = false
		this.animation.bird = []
		for (var i = 0; i < 3; i++) {
			var j = this.name + i
			this.animation.bird[i] = new_images[j]
		}
	}
	update() {
		var h = 500-35
		this.y += this.vy
		var factor = 0.5
		this.vy += this.gy * factor
		if (this.y > h) {
			this.y = h
		}
		// change degree
		if (this.rd < 50) {
			this.rd += 5
		}
		this.curIndex = (this.curIndex+1)%3
		this.img = this.animation.bird[this.curIndex]
	
	}
	jump() {
		this.vy = -10
		this.rd = -50
	}
	
	draw() {
		// flip horizontal if true
			var c = this.game.context
			var x = this.x + this.img.width/2
			var y = this.y + this.img.height/2
			c.save()
			// just want to move horizontal
			c.translate(x, y)
			if (this.flipHorizontal) {
				c.scale(-1, 1)
			}
			c.rotate(this.rd * Math.PI/180)
			c.translate(-x, -y)
			this.game.drawImage(this)
			c.restore()
	}
    move(vector, status) {
			this.flipHorizontal = vector < 0
			this.x += vector
    }
}