class PlaneEnemy extends MyImage {
    constructor(game){
		super('plane_enemy1',game)
		this.setup()
    }
	setup() {
		var num = randomBtw(1,4)
		var name = 'plane_enemy' + num
		this.img = new_images[name]
		this.speed = randomBtw(1,4)
		this.x = randomBtw(0,350)
		this.y = -randomBtw(0,200)
		this.life = 2
	}
	update() {
		this.y += this.speed
		
		if (this.y > 700 || this.life < 0) {
			if (this.life < 0) {
				var x = this.x + this.img.width/2
				var y = this.y + this.img.height/2
				var ps = new ParticleSystem(this.game,x,y)
				this.game.view.addElement(ps)
			}
			this.setup()
		}
	}
}