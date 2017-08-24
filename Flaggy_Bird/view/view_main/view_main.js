class ViewMain extends View {
	constructor(game) {
		super(game)
		this.setup()
	}
	setup() {
		var g = this.game
		var background = new MyImage('background0',g)
		var bird = new Bird('bird0',g)
		log("out bird",bird)
		var ground = new Ground('ground',g)
		var pillars = new Pillar(g,bird,this)
		this.addElement(background)
		this.addElement(pillars)
		this.addElement(ground)
		this.addElement(bird)
		
		
		// inputs
		g.setAction('a', function(status) {
			bird.move(-bird.speed,status,true)
		})
		g.setAction('d', function(status) {
			bird.move(bird.speed,status,true)
		})
		g.setAction(' ', function(status) {
			bird.jump()
		})
	}
	update() {
		if (this.gameover) {
			if (this.firstend) {
				var ok = new MyImage('ok',this.game)
				ok.x = 100
				ok.y = 300
				this.addElement(ok)
				this.firstend = false
			}
		} else {
			super.update()
		}
	}
	
}