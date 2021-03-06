
// this event is triggered from the "background" page, when the context
// menu is opened, it asks for the code. This request requires the 
// clickedEl to be in place. If it isn't - it's kinda screwed!
safari.application.addEventListener('command', function (event) {
  if (event.command === 'edit-in-jsbin') {
    safari.application.activeBrowserWindow.activeTab.page.dispatchMessage('edit-in-jsbin');
  } 
}, false);

safari.application.addEventListener('message', function (event) {
  if (event.name === 'jsbin-url') {
    if (event.message) {      
      safari.application.activeBrowserWindow.openTab().url = event.message;
    } else {
      // this should be pretty unlikely
      alert("Couldn't find the code - sorry. Copy & Paste?");
    }
  } 
}, false);
