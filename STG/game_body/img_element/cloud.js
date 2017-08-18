class Cloud extends MyImage {
    constructor(name,game){
		super(name,game)
		//this.x = -100
		this.setup()
    }
	setup() {
		this.speed = 2
		this.x = randomBtw(0,250)
		this.y = -randomBtw(0,200)
	}
	update() {
		this.y += this.speed
		if (this.y > 700) {
			this.setup()
		}
	}
}