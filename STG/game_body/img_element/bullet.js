class Bullet extends MyImage {
    constructor(name){
		super(name)
		//this.x = -100
		this.setup()
    }
	setup() {
		this.speed = 50
	}
	update() {
		this.y -= this.speed
	}
}