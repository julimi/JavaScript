// set fps
window.fps = 20
// control fps
document.querySelector('#fps').addEventListener('input', function(event) {
  var input = event.target
  //log('in',input.value)
  window.fps = Number(input.value)+1
  //log('out',window.fps)
})

// main function
var main = function() {

  createImage()
  //log('before',loaded.length)
  loadImage()
  //log('Done!',loaded.length)
  //var game = Game()
  var game = new Game()
  var view = new ViewMain(game)
  log('done!!')
}

main()