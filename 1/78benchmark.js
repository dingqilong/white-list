
    /* get stream from query string */
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var stream = getParameterByName('stream') || 'https://video-dev.github.io/streams/x36xhzz/url_8/193039199_mp4_h264_aac_fhd_7.m3u8';
