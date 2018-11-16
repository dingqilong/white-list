
  if ('serviceWorker' in navigator && location.origin.indexOf('null') !== -1) {
    navigator.serviceWorker.register('/sw-runner.js', { scope: '/' });
  }
  