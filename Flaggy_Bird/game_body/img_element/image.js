class MyImage {
	constructor(name,game){
		this.x = 0
		this.y = 0
		this.game = game
		this.name = name
		this.debug1 = false
		log('image', name,new_images[name])
		this.img = new_images[name]
		this.animation = {}
	}
	//setup()
	draw() {
		this.game.drawImage(this)
	}
	update() {}
	debug() {}
}