
//    data-dimension="250" data-text="35%" data-info="New Clients" data-width="5" data-fontsize="15" data-percent="35" data-fgcolor="#61a9dc" data-bgcolor="#eee"
    $(function(){
        $('.myStat1').attr({
            'data-dimension':150,
            'data-text':'35%',
            'data-width':'3',
            'data-fontsize':'15',
            'data-percent':80.9,
            'data-fgcolor':'#5ba3f0',
            'data-bgcolor':'#e8e9ea'
        }).circliful();
        $('.myStat2').attr({
            'data-dimension':130,
            'data-width':'3',
            'data-fontsize':'15',
            'data-percent':55,
            'data-fgcolor':'#a77ef6',
            'data-bgcolor':'#e8e9ea'
        }).circliful();
        $('.myStat3').attr({
            'data-dimension':110,
            'data-width':'3',
            'data-fontsize':'15',
            'data-percent':25,
            'data-fgcolor':'#ee85ea',
            'data-bgcolor':'#e8e9ea'
        }).circliful();
    });
