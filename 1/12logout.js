
// Clear session storage so private bins wont be cached.
for (i = 0; i < sessionStorage.length; i++) {
  key = sessionStorage.key(i);
  if (key.indexOf('jsbin.content.') === 0) {
    sessionStorage.removeItem(key);
  }
}
// Clear local settings
localStorage.removeItem('settings');
// We submit a form here because I can't work out how to style the button
// element in the form to look the same as the anchor. Ideally we would
// remove that and just let the form submit itself...
$('form').submit();
