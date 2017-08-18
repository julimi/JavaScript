class Particle extends MyImage {
	constructor(name,game,x,y,vx,vy) {
		super(name,game)
		this.x = x
		this.y = y
		this.vx = vx
		this.vy = vy
		this.life = 10
	}
	update() {
		this.x += this.vx
		this.y += this.vy
		var factor = 0.2
		this.vx += factor * (-this.vx)
		this.vy += factor * (-this.vy)
		this.life--
	}
}