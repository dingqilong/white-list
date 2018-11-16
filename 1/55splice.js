
            var countryList = ['BD', 'USA', 'Japan', 'UK'];
            document.getElementById("display").innerHTML = countryList;

            function workingWithSplice() {
                countryList.splice(3, 1, "Germany");
                document.getElementById("display").innerHTML = countryList;
            }
        