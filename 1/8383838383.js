
//    进入页面将日期设置为当前年份和月份,月份从0开始
    $(function(){
        var curDate=new Date();
        $('#oMon').val(curDate.getMonth()+1);
        $('#oYea').val(curDate.getFullYear());
        //    生成当前日历
        drawCallender(curDate.getFullYear(),curDate.getMonth()+1);
    });
//    返回上月最后一天的号数
    function getCurDate(year,month){
        var curDate=new Date(year,month,0);//new Date(年,月,0)会返回当前年当前月的前一月的最后一天
        return curDate.getDate();
    }
//    日历计算函数
    function makeCallender(year,month){
        var aMonth=[];//二维数组用来存放日期
        aMonth[0]=[];//=左边表示行,=右边存放星期集合
        aMonth[1]=[];
        aMonth[2]=[];
        aMonth[3]=[];
        aMonth[4]=[];
        aMonth[5]=[];
        aMonth[6]=[];
        var monFirstDate=new Date(year,month-1,1);//创建当前年当前月的第一天,传入的month实际上等于现实的month+1,比如传入2月,实际上是3月，所以减1才是当前月份
        var monFirstDay=monFirstDate.getDay();//当前年当前月的第一天是星期几
        var curMonDate=getCurDate(year,month);//当前月的最后一天
        var theDate=1;
        var i,c,r;//c对应行号,r对应列号
//        先显示第二行
        for(c=monFirstDay;c<7;c++){
            aMonth[1][c]=theDate;
            theDate++;
        }
//        显示其他行
        for(r=2;r<7;r++){
            for(i=0;i<7;i++){
                if(theDate<=curMonDate){
                    aMonth[r][i]=theDate;
                    theDate++;
                }
            }
        }
        return aMonth;
    }
//    日历生成函数
    function drawCallender(year,month){
        var r,c;//r对应行,c对应列
        var myMonth=makeCallender(year,month);
//        生成日历
        for(r=1;r<7;r++){
            for(c=0;c<7;c++){
                $('table').find('tr').eq(r+1).find('td').eq(c).text('');//先清空
                $('table').find('tr').eq(r+1).find('td').eq(c).text(myMonth[r][c]);
            }
        }
    }
//    select添加事件
    $('#oMon').on('change',function(){
        var myMonth=$(this).val();
        var myYear=$('#oYea').val();
        drawCallender(myYear,myMonth);
    });
    $('#oYea').on('change',function(){
        var myYear=$(this).val();
        var myMonth=$('#oMon').val();
        drawCallender(myYear,myMonth);
    });
