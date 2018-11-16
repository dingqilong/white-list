
            function remove() {
                var iframe = document.getElementById("iframe1");
                var myDiv = document.getElementById("myDiv");
                myDiv.removeChild(iframe);
            }
            function addBack() {
                var iframe = '<iframe src="deletingFrame_iframe2.html" marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" allowtransparency="true" frameborder="0" height="200" scrolling="no" width="400" id="iframe1"></iframe>';
                var myDiv2 = document.getElementById("myDiv2");
                myDiv2.innerHTML = iframe;
            }
        