
$(function(){
    $('#dowebok').fullpage({
        sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        continuousVertical: true
    });

    setInterval(function(){
        $.fn.fullpage.moveSectionDown();
    }, 3000);
});
