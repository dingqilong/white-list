
        if (Hls.isSupported()) {
            var video = document.getElementById('video');
            var hls = new Hls({
                debug : true,
                maxBufferLength: 15,
                maxBufferHole: 1,
                maxSeekHole: 2,
                capLevelToPlayerSize: true,
                startFragPrefetch: false,
                autoStartLoad: false,
                manifestLoadingTimeOut: 10000,
                manifestLoadingMaxRetry: 4,
                manifestLoadingRetryDelay: 500,
                enableCEA708Captions: true
            });

            hls.on(Hls.Events.ERROR, function(event, data) {
                console.warn('ERROR', data);
            });

            function loadSource(url, time) {
                function onAttached() {
                    hls.off(Hls.Events.MEDIA_ATTACHED, onAttached);
                    hls.on(Hls.Events.MANIFEST_PARSED, onParsed);
                    hls.loadSource(url);
                }

                function onParsed(event, data) {
                    hls.off(Hls.Events.MANIFEST_PARSED, onParsed);
                    hls.startLoad(time);
                    if (time !== undefined) {
                        video.currentTime = time;
                    }
                    video.play();
                }

                hls.detachMedia();
                hls.on(Hls.Events.MEDIA_ATTACHED, onAttached);
                hls.attachMedia(video);
            }
        }
    