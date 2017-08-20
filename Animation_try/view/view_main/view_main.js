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
		
		// inputs
		g.setAction('a', function(status) {
			g.player.move(-g.player.speed,status)
		})
		g.setAction('d', function(status) {
			g.player.move(g.player.speed,status)
		})
		// g.setAction('w', function() {
		// 	g.plane_player.moveUp()
		// })
		// g.setAction('s', function() {
		// 	g.plane_player.moveDown()
		// })
		// g.setAction('\\', function() {
		//  	g.plane_player.shoot()
		// })
	}
	
}