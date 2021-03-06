
    window.onload=function(){
        var options = [
            {
                size : 400,
                weight : 25,
                color: '#008ad4',
                duration: 1.5,
                delay: 0.1,
                easing: d3_ease.easeBounceOut.ease
            }
        ];
        var items = [].slice.call(document.querySelectorAll('.box'));
        function init() {
            items.forEach(function(item, pos) {
                var word = item.querySelector('.list_text'),
                        playCtrl=document.getElementsByTagName('button')[0],  //按钮
//                    playCtrl = item.querySelector('button'),
                // initialize the plugin
                        instance = new Letters(word, options[pos]),
                        endPlayCallback = function() {
                            playCtrl.className = 'control__button control__button--play';
                            word.setAttribute('data-state', 'stop');
                        };

                // show word  开始就把文字展现出来，注释掉就是开始为空白
                instance.showInstantly();

                // moo.js configurations for some of the buttons
                var timelines = {};
                var letters = [].slice.call(word.querySelectorAll('svg')),
                    distanceFactor = 40;
                    timelines[pos+1] = new mojs.Timeline();
                letters.forEach(function(letter, i) {
                    var tween = new mojs.Tween({
                        duration : 1500,
                        delay: 100 + 100*i,
                        easing: mojs.easing.bounce.out,
                        onUpdate: function(progress) {
                            letter.style.WebkitTransform = letter.style.transform = 'translate3d(0,' + distanceFactor * (1-progress) + '%,0)';
                        }
                    });
                    timelines[pos+1].add(tween);
                });

                playCtrl.addEventListener('click', function() {  //给按钮绑定事件
                    if( word.getAttribute('data-state') === 'play' ) {
                        return false;
                    }
                    word.setAttribute('data-state', 'play');
                    playCtrl.className = 'control__button control__button--play control__button--active';
                    instance.hide({
                        duration: 0.6, delay: 0.1, easing: d3_ease.easeExpOut.ease,
                        callback: function() {
                            timelines[pos+1].start();
                            instance.show({callback : endPlayCallback});
                        }
                    });
                });
            });
        }
        init();
    }
