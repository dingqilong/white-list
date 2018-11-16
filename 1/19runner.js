
  if ('serviceWorker' in navigator && location.origin.indexOf('null') !== -1) {
    navigator.serviceWorker.register('{{root}}/sw-runner.js', { scope: '/' });
  }
  