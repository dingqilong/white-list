
	  const panels = document.querySelectorAll('.panel');
	  
	  function toggleOpen(e) {
//		  console.log(this);
		  this.classList.toggle('open');
	  }
	  
	  panels.forEach( panel => panel.addEventListener('click', toggleOpen, false));
  