function removePrevent(event){
  if (event.preventDefault){
      event.preventDefault();
  } else {
      event.returnValue = false;
  }
}