// set fps
window.fps = 30
// control fps
document.querySelector('#fps').addEventListener('input', function(event) {
  var input = event.target
  //log('in',input.value)
  window.fps = Number(input.value)+1
  //log('out',window.fps)
})

// main function
var main = function() {

  //log('before',loaded.length)
  loadImage()
  //log('Done!',loaded.length)
  var game = Game()
  var view = new ViewStart(game)
  log('done!!')
  // window action
  window.addEventListener('keydown', function(event){
	  var k = event.key
	  log(event)
	  if ('123'.includes(k)) {
		  log('level', k, Number(k)-1)
		  curLvl = level[Number(k)-1]
		  game.blocks = buildBlocks()
		  game.lvl = Number(k)
	  } 
	  /*else if (k == 'Enter') {
		  game.reset()
	  }*/
  })
  
  // ball mouse-drag for testing the collideWith function
  var dragged = false
  // Use game.canvas so these mouse events are only valid on canvas
  game.canvas.addEventListener('mousedown', function(event){
	  var x = event.offsetX
	  var y = event.offsetY
	  log(x,y)
	  if (game.ball.beDragged(x,y)) {
		  dragged = true
	  }
  })
  game.canvas.addEventListener('mousemove', function(event){
	  var x = event.offsetX
	  var y = event.offsetY
	  if (dragged) {
		  game.ball.x = x
		  game.ball.y = y
	  }
  })
  game.canvas.addEventListener('mouseup', function(event){
	  dragged = false
  })
}

main()