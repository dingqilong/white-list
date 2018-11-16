Package.describe({
  name: 'standard-minifiers',
  version: '1.1.0',
  summary: 'Standard minifiers used with Meteor apps by default.',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.imply([
    'standard-minifier-css',
    'standard-minifier-js'
  ]);
});
ncy on livedata, since livedata has a (weak) dependency on
  // us.
  api.use('ddp', 'server', {unordered: true});

  api.mainModule('facts_base_server.js', 'server');
  api.mainModule('facts_base_common.js', 'client');

  api.export('Facts');
});

Package.onTest(function (api) {
  api.use(['tinytest', 'ecmascript', 'facts-base']);
  api.addFiles(['facts_base.tests.js'], 'server');
});
