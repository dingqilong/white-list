
    $('#fullPage').fullpage({
        verticalCentered:false,
        navigation:true,
        navigationPosition:'right',
        scrollingSpeed:500,
        continuousVertical:true,
        afterRender:function(){
            move('.section h1').scale(1.5).duration('0.5s').end();
            move('.section p').set('margin-top','5%').duration('0.5s').end();
        },
        afterLoad:function(anchorLink,index){
            switch(index){
                case 1:
                    move('.section1 h1').scale(1.5).duration('0.5s').end();
                    move('.section1 p').set('margin-top','5%').duration('0.5s').end();
                    break;
                case 2:
                    move('.section2 h1').scale(0.7).duration('0.5s').end();
                    break;
                case 3:
                    move('.section3 h1').set('margin-left','0%').duration('0.5s').end();
                    move('.section3 p').set('margin-left','0%').duration('0.5s').end();
                    break;
                case 4:
                    move('.section4 .primary').rotate(360).duration('0.5s').end(function(){
                        move('.section4 .sport').rotate(360).duration('0.5s').end(function(){
                            move('.section4 .edition').rotate(360).duration('0.5s').end();
                        });
                    });
                    break;
            }
        },
        onLeave:function(index,nextIndex,direction ){
            switch(index){
                case 1:
                    move('.section1 h1').scale(1).duration('0.5s').end();
                    move('.section1 p').set('margin-top','900px').duration('0.5s').end();
                    break;
                case 2:
                    move('.section2 h1').scale(1).duration('0.5s').end();
                    break;
                case 3:
                    move('.section3 h1').set('margin-left','-150%').duration('0.5s').end();
                    move('.section3 p').set('margin-left','150%').duration('0.5s').end();
                    break;
                case 4:
                    move('.section4 .primary').rotate(-360).duration('0.5s').end();
                    move('.section4 .sport').rotate(-360).duration('0.5s').end();
                    move('.section4 .edition').rotate(-360).duration('0.5s').end();
                    break;
            }
        }
    });
