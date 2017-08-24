// pillar
class Pillar {
    constructor(game, bird, view){
		//super(name,game)
		this.game = game
		this.bird = bird
		this.view = view
		this.setup()
    }
	setup() {
		this.speed = 5
		this.debug1 = true
		// list of pillars
		this.pillars = []
		this.distanceY = 150
		this.distanceX = 150
		for (var i = 0; i < 2; i++) {
			var pu = new MyImage('pillar0',this.game)
			var pd = new MyImage('pillar1',this.game)
			var temp = []
			pu.x = 200 + i * this.distanceX
			pd.x = pu.x
			var self = this
			var ay = self.setY()
			pu.y = ay[0]
			pd.y = ay[1]
			temp.push(pu)
			temp.push(pd)
			this.pillars.push(temp)
		}
	}
	setY() {
		var rt = [0,0]
		rt[0] = randomBtw(-200,0)
		rt[1] = rt[0] + 320 + this.distanceY
		return rt
	}
	draw() {
		for (var i of this.pillars) {
			this.game.drawImage(i[0])
			this.game.drawImage(i[1])
		}
	}
	debug() {
		this.distanceY = config.pillar_distanceY.value
		this.distanceX = config.pillar_distanceX.value
	}
	update() {
		//log('not')
		for (var i of this.pillars) {
			//log('i0',i[0].img)
			//log('bird',this.bird.img)
			var f1 = collideWith(this.bird,i[0])||collideWith(i[0],this.bird)
			var f2 = collideWith(this.bird,i[1])||collideWith(i[1],this.bird)
			if (f1 || f2) {
				log('enter')
				this.view.gameover = true
			}
			var limit = -100
			if (i[0].x < limit) {
				var cw = this.game.canvas.width
				i[0].x += this.distanceX * 3
				i[1].x = i[0].x
				var ay = this.setY()
				i[0].y = ay[0]
				i[1].y = ay[1]
			}
			i[0].x -= this.speed
			i[1].x -= this.speed
		}
	}
}