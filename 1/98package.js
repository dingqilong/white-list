Package.describe({
  summary: "Random number generator and utilities",
  version: '1.1.0'
});

Package.onUse(function (api) {
  api.use('ecmascript');
  api.export('Random');
  api.addFiles('random.js');
});

Package.onTest(function(api) {
  api.use('random');
  api.use('ecmascript');
  api.use('tinytest');
  api.addFiles('random_tests.js', ['client', 'server']);
});
on.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.use([
    'ecmascript',
    'minimongo', // Just for LocalCollection.wrapTransform :[
    'check',
    'ejson',
    'ddp',
  ]);

  api.addFiles('allow-deny.js');
  api.export('AllowDeny');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('allow-deny');
  api.addFiles('allow-deny-tests.js');
});
