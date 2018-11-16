Package.onUse(function(api) {
  api.use('second-imply');
});
name",
  version: "1.0.0"
});

Package.registerBuildPlugin({
  name: "with:colon",
  use: [],
  sources: [
    'plugin.js'
  ]
});
