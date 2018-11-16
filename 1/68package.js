Package.describe({
  summary: "An XML builder for node.js similar to java-xmlbuilder.",
  version: '2.5.15'
});

Npm.depends({
  'xmlbuilder': '2.4.4'  // XXX next time we update this to X.Y.Z,
                         // make the version above be X.Y.Z_0 so we
                         // don't accidentally unsync version numbers
});

Package.onUse(function (api) {
  api.addFiles(['xmlbuilder.js'], 'server');

  api.export('XmlBuilder', 'server');
});
, but we include it everywhere so you
    // don't need a ton of if statements around your LaunchScreen calls.
    "launch-screen"
  ]);
});