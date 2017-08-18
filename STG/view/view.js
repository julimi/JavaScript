class View {
	constructor(game) {
		this.game = game
		game.view = this
		this.elements = []
	}
	addElement(e) {
		this.elements.push(e)
	}
	draw() {		
		for (var i = 0; i < this.elements.length; i++) {
			var e = this.elements[i]
			this.game.drawImage(e)
		}
	}
	update() {
		for (var i = 0; i < this.elements.length; i++) {
			var e = this.elements[i]
			e.update()
		}
	}
}