
            function showEm() {
                with (document.customer) {
                    var alpha = fname.value;
                    var beta = lname.value;
                    var gamma = address.value;
                    var delta = city.value;
                    var epsilon = state.value;

                }
                var fullName = alpha + " " + beta + "\n";
                var livesHere = gamma + "\n" + delta + ", " + epsilon;
                alert(fullName + " " + livesHere);
            }
        