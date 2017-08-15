class View {
	constructor(game) {
		this.game = game
	}
	draw() {
		this.game.context.font="30px Verdana"
		this.game.context.clearRect(0,0,this.game.canvas.width,this.game.canvas.height)
		// check is it gameover
		//this.game.gameOver()
	}
	update() {}
}