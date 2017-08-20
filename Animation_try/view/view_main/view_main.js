class ViewMain extends View {
	constructor(game) {
		super(game)
		this.setup()
	}
	setup() {
		var g = this.game
		//this.elements = []
		this.addElement(g.background)
		this.addElement(g.player)
		this.addElement(g.enemy)
		
		// inputs
		g.setAction('a', function(status) {
			g.player.move(-g.player.speed,status,true)
		})
		g.setAction('d', function(status) {
			g.player.move(g.player.speed,status,true)
		})
		g.setAction('w', function(status) {
			g.player.move(-g.player.speed,status,false)
		})
		g.setAction('s', function(status) {
			g.player.move(g.player.speed,status,false)
		})
		g.setAction('\\', function() {
		 	g.player.attack()
		})
	}
	
}