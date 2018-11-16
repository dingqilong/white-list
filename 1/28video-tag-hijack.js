
  (function() {
    /**
     * this page simulates hijacking of a video tag before destroying the existing one.
     * sequence of events:
     * 1. create the first instance (wait for playback)
     * 2. allow 3 seconds of playback
     * 3. create 2nd instance on a different stream
     * 4. destroy the first instance
     */

    const Hls = window.Hls;
    if (!Hls.isSupported()) throw new Error('Hls.js is not supported');

    const statusEl = document.querySelector('#status');
    const counterEl = document.querySelector('#counter');
    const video = document.querySelector('#video');
    let hls1 = null;

    // 1. create instance
    initInstance1('http://www.streambox.fr/playlists/x31jrg1/x31jrg1.m3u8', function onPlaying() {
      // 2. allow 3 seconds of playback
      countDown(3000, counterEl, () => {
        // 3. create another instance
        initInstance2('https://nasa-i.akamaihd.net/hls/live/253565/NASA-NTV1-Public/master.m3u8');
        statusEl.innerText = 'Hijacked!';

        // 4. destroy the first instance
        hls1.destroy();
      });
    });

    // hoist line

    function initInstance1(streamUrl, onPlaying) {
      hls1 = new Hls({ debug: true });
      hls1.loadSource(streamUrl);
      hls1.attachMedia(video);
      hls1.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play()
             .then(() => onPlaying());
      });
    }

    function initInstance2(streamUrl) {
      console.log('------------------ Hijacking ------------------');
      const hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
      });
    }

    function countDown(time, el, cb) {
      let startStamp = Date.now();
      const interval = setInterval(() => {
        const diff = Date.now() - startStamp;
        if (diff < time) {
          el.innerText = `${Math.round((time - diff) / 100) / 10}s`;
          return;
        }
        clearInterval(interval);
        cb();
      }, 100);
    }
  }());
