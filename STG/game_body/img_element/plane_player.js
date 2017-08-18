// Paddle
class PlanePlayer extends MyImage {
    constructor(name, game){
		super(name,game)
		this.setup()
    }
	setup() {
		this.speed = 20
      	this.x = 150
      	this.y = 600
	}
	shoot() {
		var bullet = new Bullet('bullet',this.game)
		var w = bullet.img.width
		var x = this.x + this.img.width / 2 - w / 2
		var y = this.y
		bullet.x = x
		bullet.y = y
		this.game.view.addElement(bullet)
	}
	update() {
	//	var b = this.shoot()
		
		
	}
    moveLeft() {
      this.x -= this.speed
	  if (this.x < 0) {
		  this.x = 0
	  }
    }
    moveRight() {
      this.x += this.speed
	  if (this.x > 500 - this.img.width) {
		  this.x = 500 - this.img.width
	  } 
    }
	moveUp() {
      this.y -= this.speed
	  if (this.y < 0) {
		  this.y = 0
	  }
    }
	moveDown() {
      this.y += this.speed
	  if (this.y > 700 - this.img.height) {
		  this.y = 700 - this.img.height
	  }
    }
}