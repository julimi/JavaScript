class ViewMain extends View {
	constructor(game) {
		super(game)
		this.setup()
	}
	setup() {
		var g = this.game
		//this.elements = []
		this.addElement(g.background)
		this.addElement(g.cloud)
		this.addElement(g.cloud1)
		this.addElement(g.plane_player)
		this.addEnemy()
		
		// inputs
		g.setAction('a', function() {
			g.plane_player.moveLeft()
		})
		g.setAction('d', function() {
			g.plane_player.moveRight()
		})
		g.setAction('w', function() {
			g.plane_player.moveUp()
		})
		g.setAction('s', function() {
			g.plane_player.moveDown()
		})
		g.setAction('\\', function() {
		 	g.plane_player.shoot()
		})
	}
	addEnemy() {
		var g = this.game
		for (var i = 0; i < g.enemyArray.length; i++) {
			var e = g.enemyArray[i]
			this.addElement(e)
		}
	}
	
}