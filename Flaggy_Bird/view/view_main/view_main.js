class ViewMain extends View {
	constructor(game) {
		super(game)
		this.setup()
	}
	setup() {
		var g = this.game
		var background = new MyImage('background0',g)
		var bird = new Bird('bird',g)
		var ground = new Ground('ground',g)
		var pillars = new Pillar(g)
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
	
}