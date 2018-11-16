Package.describe({
  summary: 'GeoJSON utility functions (from https://github.com/maxogden/geojson-js-utils)',
  version: '1.0.10'
});

Package.onUse(function (api) {
  api.use('modules');
  api.export('GeoJSON');
  api.mainModule('main.js');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('underscore');
  api.use('geojson-utils');
  api.addFiles(['geojson-utils.tests.js'], 'client');
});
script-runtime-server, since the runtime uses some ES5 APIs like
  // Object.defineProperties that are buggy in older browsers.
  api.use("es5-shim", { weak: true });

  api.use("modules");
  api.use("promise");
  api.use("modern-browsers");

  api.mainModule("versions.js", "server");
  api.mainModule("modern.js", "client");

  api.mainModule("legacy.js", "legacy");
  api.export("Symbol", "legacy");
  api.export("Map", "legacy");
  api.export("Set", "legacy");
});
