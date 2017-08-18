class ParticleSystem {
	constructor(game,x,y) {
		this.game = game
		this.x = x
		this.y = y
		this.setup()
	}
	setup() {
		this.numParticle = 20
		this.particles = []
		this.life = 45
	}
	draw() {
		for (var p of this.particles) {
			p.draw()
		}
	}
	update() {
		// create each particle (spark)
		this.life--
		if (this.life < 0) {
			this.game.view.removeElement(this)
			return
		}
		if (this.particles.length < this.numParticle) {
			var x = this.x
			var y = this.y
			var s = 10
			var vx = randomBtw(-s,s)
			var vy = randomBtw(-s,s)
			var p = new Particle('particle', this.game,x,y,vx,vy)
			this.particles.push(p)
		}
		// update each particle
		for (var p of this.particles) {
			p.update()
		}
		this.particles = this.particles.filter(p => p.life > 0)
	}
}