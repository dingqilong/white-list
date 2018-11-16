
      document.addEventListener('deviceready', onDeviceReady, false);

      function onDeviceReady() {
          console.log("onDeviceReady");

          // Just for iOS devices.
          // Read more here https://github.com/eface2face/cordova-plugin-iosrtc
          if (window.device.platform === 'iOS') {
              cordova.plugins.iosrtc.registerGlobals();
          }else if (window.device.platform === 'Android') {
            //
          }

          // Load JavaScript files async
          //
          var loadScriptAsync = function(path){
              var jsScript = document.createElement("script");
              jsScript.type = "text/javascript";
              jsScript.async = false; //async is being set to false so that script will not immediately fire.
              jsScript.src = path;
              document.getElementsByTagName("body")[0].appendChild(jsScript);
          }
          loadScriptAsync("https://cdnjs.cloudflare.com/ajax/libs/quickblox/2.4.0/quickblox.min.js");
          loadScriptAsync("config.js")
          loadScriptAsync("js/helpers.js")
          loadScriptAsync("js/stateBoard.js")
          loadScriptAsync("js/app.js")
      }

      // Listen for orientation changes and scroll
      //
      window.addEventListener('orientationchange', updatedVideoFrames);
      window.addEventListener('scroll', updatedVideoFrames);
      //
      function updatedVideoFrames(){
        if (window.device.platform === 'iOS') {
            cordova.plugins.iosrtc.refreshVideos();
        }
      }
    