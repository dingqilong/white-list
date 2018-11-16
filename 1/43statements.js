

            var counter = 0;
            var endIt = 14;
            while (counter < endIt) {
                if (counter == 0) {
                    alert("Welcome , we are going to start");
                }
                if (counter == (counter / 2)) {
                    alert("You are half of the way");
                }

                counter++;
                document.write("Counter is now: " + counter + "<br/>");
                if (counter == endIt) {
                    alert("Hmmm, Done");
                }
            }

//////////// variable declaration
            var testvar;//variable declare only
            testvar = 15;//value assign hoilo

            function hiHasina(h) {
                return h;
            }

            function hiKhaleda(kh) {
                return kh;
            }
            function compareTwo(p1, p2) {
                if (p1.length == p2.length) {
                    alert("Equal");
                } else if (p1.length > p2.length) {
                    alert("Hasina is BIG");
                } else {
                    alert("Khaleda is BIG");
                }
            }
            var has = hiHasina("HASINA");
            compareTwo(has, hiKhaleda("KHALEDA"));

        