
$(function(){
    $('#dowebok').fullpage({
        sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        loopBottom: true
    });

    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 3000);
});
