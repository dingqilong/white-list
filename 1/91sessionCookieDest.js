
    //Get cookie routine by Shelley Powers 
    function get_cookie(Name) {
        var search = Name + "=";
        var returnvalue = "";
        if (document.cookie.length > 0) {
            offset = document.cookie.indexOf(search);
            // if cookie exists
            if (offset != -1) {
                offset += search.length;
                // set index of beginning of value
                end = document.cookie.indexOf(";", offset);
                // set index of end of cookie value
                if (end == -1) end = document.cookie.length;
                returnvalue=unescape(document.cookie.substring(offset, end))
            }
        }
        return returnvalue;
    }

    function setcolor(){
        document.body.style.backgroundColor=get_cookie("bgcolor")
    }
    