class MyImage {
	constructor(name,game){
		this.x = 0
		this.y = 0
		this.game = game
		this.img = new_images[name]
  		//otherImg: false,
	}
	//setup()
	draw() {
		this.game.drawImage(this)
	}
	update() {
		
	}
}