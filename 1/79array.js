
            //Here students is an Array
            var students = ['Arefin', 'Mehedee', 50, 60, 70];
            // document.write([students]);

            for (i = 0; i < students.length; i++) {
                document.write(students[i] + "<br/>");
            }

            ////////////////////////////////////////////////////////////////////
            var stds = new Array(5);
            document.write(stds.length);
            stds[0] = 'Zakir';
            stds[1] = 'Jobaer';
            stds[2] = 'Mahabub';
            stds[3] = 50;
            stds[4] = 'Rekha';
            stds[5] = 'Mita';
            document.write([stds]);
            document.write(stds.length);
            ///////////////////////////way-3///////////////////////////

            var student = {firstName: 'Arefin', lastName: 'Islam', age: 23, gender: 'Male'};
            document.write(student.firstName);
            /////////////////Array:join()//////////////////////
            document.write("<hr/>");
            var trees = new Array("Elm", "Pine", "Oak");
            var bigBush = trees.join(" ");
            document.write(bigBush);

            document.write(typeof trees);
            document.write(typeof bigBush);


////////////////////toString///////////////////
            document.write("<hr/>");
            var names = ['A', 'B', 'C'];
            document.write(typeof names);
            var newNames = names.toString();
            document.write(newNames);
            document.write(typeof newNames);


////////////////////Concat array////////////////////////
            document.write("<hr/>");

            var trees1 = new Array("Elm", "Pine", "Oak");
            var trees2 = new Array("Amm", "Jam");
            var biggBush = trees1.concat(trees2);
            document.write(typeof biggBush);
            document.write(biggBush + "<br/>");


            ///////////////////////////Array.Sort() and Array.reverse()/////////////////////
            document.write("<hr/>");
            var studentx = ['Arefin', 'Mehedee', 50, 60, 70];
            studentx.sort();
            document.write(studentx);

            document.write("<hr/>");

            studentx.reverse();
            document.write(studentx);

            ///////////////////////////Array.slice() /////////////////////
            document.write("<hr/>");
            var studentss = ['Arefin', 'Mehedee', 50, 60, 70, 8, 89, 90];
            document.write(studentss.slice(2, 4) + "<br/>");
            document.write(studentss.slice(4) + "<br/>");
            document.write(studentss.slice(-1) + "<br/>");
            document.write(studentss.slice(0, 2) + "<br/>");
            ///////////////////////////Array.push() /////////////////////
            document.write("<hr/>");
            var countries = ['BD', 'USA', 'Japan'];
            //last e 1ta add kore
            countries.push('Russia');
            document.write(countries + "<br/>");

//Last e 1ta remove kore
            countries.pop();
            document.write(countries + "<br/>");

//First e 1ta remove kore
            countries.shift();
            document.write(countries + "<br/>");

//First e 1ta add kore
            countries.unshift('BDx');
            document.write(countries + "<br/>");

          
        