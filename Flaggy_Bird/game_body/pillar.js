// pillar
class Pillar {
    constructor(game){
		//super(name,game)
		this.game = game
		this.setup()
    }
	setup() {
		this.speed = 5
		this.offset = 20
		this.count = 3
		
		// list of pillars
		this.pillars = []
		this.distanceY = 150
		this.distanceX = 150
		for (var i = 0; i < 2; i++) {
			var pu = new MyImage('pillar0',this.game)
			var pd = new MyImage('pillar1',this.game)
			var temp = []
			pu.x = 100 + i * this.distanceX
			pd.x = pu.x
			log('h', pu.img.height)
			var ay = this.setY()
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
	update() {
		for (var i of this.pillars) {
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