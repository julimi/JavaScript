class ViewMain extends View {
	constructor(game) {
		super(game)
		// set the actions I want
		var g = game
	    g.setAction('a', function() {
	  	  if (g.paddle.x > 1) { 
	  		g.paddle.moveLeft()
	  		if (!g.ball.fired) {
	  			g.ball.moveLeft(g.paddle.speed)
	  		}
	  	}
	    })
	    g.setAction('d', function() {
	  	  if (g.paddle.x < 499 - g.paddle.img.width) {
	  		g.paddle.moveRight()
	  		if (!g.ball.fired) {
	  			g.ball.moveRight(g.paddle.speed)
	  		}
	  	}
	    })
	    g.setAction('f', function() {
	  	  g.ball.fire()
	    })
		g.setAction(' ', function() {
			g.gamepause()
		})
	}
	draw() {
		//super()
		var g = this.game
		g.gameover()
		if (g.over) {
			var v = new ViewEnd(g)
			g.replaceView(v)
			return
		}
		// draw background
		g.context.drawImage(g.background,0,0)
		// draw paddle
	    g.context.drawImage(g.paddle.img,g.paddle.x,g.paddle.y)
		// draw ball
		g.context.drawImage(g.ball.img,g.ball.x,g.ball.y)
		// draw blocks
		for (var i = 0; i < g.blocks.length; i++) {
			var b = g.blocks[i]
			if (b.alive) {
				g.context.drawImage(b.img,b.x,b.y)
			}
		}
			// draw scoreboard
			g.context.fillText("Score: " + g.score,5,685)
			// draw Level
			g.context.fillText("Level: " + g.lvl,350,685)
	}
	update() {
		var g = this.game
		if (g.paused) {
  	  		return
  		}
  	
  		log('2', g.ball.speedY)
  		g.ball.move()
  		if (g.paddle.reboundBall(g.ball)) {
  			g.ball.rebound()
  			g.ball.changeImg() 
  		}
  		for (var i = 0; i < g.blocks.length; i++) {
  			var b = g.blocks[i]
  			if (b.reboundBall(g.ball)) {
  				b.kill()
  				g.ball.rebound()
  				//obj.ball.changeImg()
  				g.score += 100
  			}
  		}
	}
}