Package.describe({
  summary: "Meteor's latency-compensated distributed data framework",
  version: '1.4.0'
});

Package.onUse(function (api) {
  api.use(['ddp-client'], ['client', 'server']);
  api.use(['ddp-server'], 'server');

  api.export('DDP');
  api.export('DDPServer', 'server');

  api.imply('ddp-client');
  api.imply('ddp-server');
});
pi.use('twitter-oauth');
  api.imply('twitter-oauth');

  api.use('http', ['client', 'server']);

  api.use(['accounts-ui', 'twitter-config-ui'], ['client', 'server'], { weak: true });
  api.addFiles("notice.js");

  api.addFiles("twitter.js");
});
