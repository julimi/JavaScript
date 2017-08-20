class MyImage {
	constructor(name,game){
		this.x = 0
		this.y = -300
		this.game = game
		log('image', name,new_images[name])
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