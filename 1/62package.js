Package.describe({
  name: "override-constraints",
  version: "1.5.3",
  summary: "Test package for @x.y.z! style package version constraints",
  documentation: null,
});

Package.onUse(function(api) {
  api.use("ecmascript");
  api.mainModule("override-constraints.js");
});
lugin"
    // directory from this package is copied one level up from the meteor project.
    // Cordova local plugins must have an absolute or relative path to
    // meteor project, so in this case the plugin will be one level up from it.
    'com.cordova.empty': 'file://../cordova-local-plugin'
  });
});
