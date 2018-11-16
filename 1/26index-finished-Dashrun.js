
        let divs = document.querySelectorAll('div');
        let one = document.querySelector('.one');
        let two = document.querySelector('.two');
        let three = document.querySelector('.three');
     /*   divs.forEach(div => div.addEventListener('click', logText, {
            once: false,
            capture: false
        }));*/

         one.addEventListener('click', logText1, {
               capture: true
         });
        two.addEventListener('click', logText2, {
          capture: true
         });
        three.addEventListener('click', logText3, {
           capture: true
       });

       
        function logText(e) {
            console.log(this.classList.value);
            // e.stopPropagation();
        }

        function logText1(e) {
            console.log(this.classList.value);
            // e.stopPropagation();
        }

        function logText2(e) {
            console.log(this.classList.value);
             e.stopPropagation();
        }

        function logText3(e) {
            console.log(this.classList.value);
           // e.stopPropagation();
        }
    