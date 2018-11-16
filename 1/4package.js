Package.describe({
  summary: "Retry logic with exponential backoff",
  version: '1.1.0'
});

Package.onUse(function (api) {
  api.use('ecmascript');
  api.use('random');
  api.mainModule('retry.js');
  api.export('Retry');
});
  api.use([
    'tracker',
    'retry'
  ], 'client');

  api.use([
    'ecmascript',
    'ddp',
    'mongo',
  ], ['client', 'server']);

  api.mainModule('autoupdate_server.js', 'server');
  api.mainModule('autoupdate_client.js', 'client');
  api.mainModule('autoupdate_cordova.js', 'web.cordova');

  api.export('Autoupdate');
});
dFiles("notice.js");

  api.addFiles("google.js");
});
