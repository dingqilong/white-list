
       (function(){
         var elem = document.getElementById('testDiv');
         document.body.addEventListener('click',function(){
             console.log(elem.getBoundingClientRect())
         },false)
       })()
     