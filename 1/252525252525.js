
        var a=['top','left'];
        var b=0;
        var u;
        function fudu()
        {
            win.style[a[b%2]]=(b++)%4<2?"0px":"4px";
            if(b>15)
            {
                clearInterval(u);
                b=0
            }
        }
        function zd()
        {
            clearInterval(u);
            u=setInterval(fudu,32)
        }
        window.onload=function()
        {
            var bt=document.getElementById("bt");
            var win=document.getElementById("win");
            bt.onclick=zd;
        }
    