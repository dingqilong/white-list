
            var computer = new Array("Doel", "Apple", "IBM", "HP");
            document.write(computer);
            document.write("<hr/>");
            computer.splice(1, 0, "DELL");//begining from 1 index and remove 0 element and add (start) at index 1
            document.write(computer);
            document.write("<hr/>");
            computer.splice(1, 2, "Lenovo");//begining from 1 index and remove 2 element and add (start) at index 1
            document.write(computer);
            document.write("<hr/>");
            computer.splice(2, 1);//begining from 2 index and remove 1 element
            document.write(computer);
            document.write("<hr/>");
            computer.splice(2, 2);//begining from 2 index and remove 2 element
            document.write(computer);
            document.write("<hr/>");


        