
	
function test() {
  console.log('Hello')
  sleep(1000).then(function(){	
      console.log('world!')
  })
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

test()
