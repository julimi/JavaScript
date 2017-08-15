class ViewStart extends View {
	constructor(game) {
		super(game)
		game.view = this
		game.setAction('Enter', function() {
			var v = new ViewMain(game)
			game.replaceView(v)
			
		})
	}
	draw() {
		//super()
		var g = this.game
		g.context.fillText("Breakout Clone",150,250)
		g.context.fillText("Press 'Enter' to Start!",150,350)
	}
}