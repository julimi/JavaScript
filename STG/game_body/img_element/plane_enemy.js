class PlaneEnemy extends MyImage {
    constructor(name){
		super(name)
		this.setup()
    }
	setup() {
		var num = randomBtw(1,4)
		var name = 'plane_enemy' + num
		this.img = new_images[name]
		this.speed = randomBtw(1,4)
		this.x = randomBtw(0,350)
		this.y = -randomBtw(0,200)
	}
	update() {
		this.y += this.speed
		if (this.y > 700) {
			this.setup()
		}
	}
}