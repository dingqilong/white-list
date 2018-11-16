
    function setcolor(what){
        document.body.style.backgroundColor=what
        document.cookie="bgcolor="+what
    }
    
    function popuponclick() {
        my_window = window.open("sessionCookieDest.html", "cookiedestwindow", "status=1,width=350,height=150");
    }  
    