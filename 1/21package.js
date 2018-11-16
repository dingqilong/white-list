Package.describe({
  summary: "a package",
  version: "1.0.0"
});

Package.onUse(function (api) {
  api.addFiles("blah.js");
});
ckage.describe calls,
// because if this is caught, then setting them in the same Package.describe
// call will definitely be caught!
Package.describe({
  name: 'debug-only-prod-only',
  prodOnly: true
});

Package.onUse(function(api) {
  // nothing
});
