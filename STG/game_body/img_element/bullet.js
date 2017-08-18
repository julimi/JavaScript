class Bullet extends MyImage {
    constructor(name,game){
		super(name,game)
		//this.x = -100
		this.setup()
    }
	setup() {
		this.speed = 50
	}
	knock(a,b) {
		if (b.x >= a.x && b.x <= a.x + a.img.width) {
			if (b.y >= a.y && a.y + a.img.height >= b.y) {
				return true
			}
		}
		return false
	}
	update() {
		var x = this.x
		var y = this.y
		this.y -= this.speed
		var pes = this.game.enemyArray
		for (var pe of pes) {
			if (this.knock(this,pe) || this.knock(pe,this)) {
				pe.life--
				this.game.view.removeElement(this)
			}
		}
	}
}