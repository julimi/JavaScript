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
  //var game = Game()
  var game = new Game()
  var view = new ViewMain(game)
  log('done!!')
  // window action
  window.addEventListener('keydown', function(event){
	  var k = event.key
	  log(event)
	  if (k == ' ') {
		  game.gamepause()
	  }
  })
}

main()