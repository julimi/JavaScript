// Ground
class Ground extends MyImage {
    constructor(name,game){
		super(name,game)
		this.setup()
    }
	setup() {
		this.speed = 5
      	this.x = 0
      	this.y = 500
		this.offset = 20
		this.count = 3
	}
	update() {
		// move the ground
		this.count--
		if (this.count < 0) {
			this.count = 3
			this.x += this.offset
		}
		this.x -= this.speed
	}
}