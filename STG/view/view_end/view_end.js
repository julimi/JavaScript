class ViewEnd extends View {
	constructor(game) {
		super(game)
		game.setAction('Enter', function() {
			game.reset()
		})
	}
	draw() {
		//super()
		var g = this.game
		g.context.fillStyle = "black"
		g.context.fillRect(0,0,g.canvas.width,g.canvas.height)
		g.context.fillStyle = "white"
		// draw gameover logo
		g.context.fillText("Game Over!",150,250)
		// draw scoreboard
		g.context.fillText("Score: " + g.score,150,350)
		// draw Level
		g.context.fillText("Level: " + g.lvl,150,400)
	}
}