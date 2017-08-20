class MyImage {
	constructor(name,game){
		this.x = 0
		this.y = -300
		this.game = game
		log('image', name,new_images[name])
		this.img = new_images[name]
		this.curState = 'stand'
		this.animation = {
			stand: [],
			run: [],
			attack: [],
			die: [],
		}
		// stand
		for (var i = 0; i < 4; i++) {
			var name = 'stand' + i
			var img = new_images[name]
			this.animation['stand'].push(img)
		}
		// run
		for (var i = 0; i < 8; i++) {
			var name = 'run' + i
			var img = new_images[name]
			this.animation['run'].push(img)
		}
		// attack
		for (var i = 0; i < 8; i++) {
			var name = 'attack' + i
			var img = new_images[name]
			this.animation['attack'].push(img)
		}
		// die
		for (var i = 0; i < 7; i++) {
			var name = 'die' + i
			var img = new_images[name]
			this.animation['die'].push(img)
		}
		this.attackduration = 7
		this.dieduration = 6
  		//otherImg: false,
	}
	//setup()
	draw() {
		this.game.drawImage(this)
	}
	update() {
		
	}
	attack() {
		this.setState('attack')
		this.attackduration = 7
		this.curIndex = 0
	}
	die() {
		this.setState('die')
		this.dieduration = 6
		this.curIndex = 0
	}
}