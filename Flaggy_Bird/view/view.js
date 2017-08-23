class View {
	constructor(game) {
		this.game = game
		game.view = this
		this.elements = []
	}
	addElement(e) {
		this.elements.push(e)
	}
	removeElement(e) {
		var i = this.elements.indexOf(e)
		this.elements.splice(i,1)
	}
	draw() {		
		for (var i = 0; i < this.elements.length; i++) {
			var e = this.elements[i]
			e.draw()
		}
	}
	update() {
		for (var i = 0; i < this.elements.length; i++) {
			var e = this.elements[i]
			e.update()
		}
	}
}