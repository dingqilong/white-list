
            var groups = document.querySelectorAll("tr[data-group]");
            for (i = 0; i < groups.length; i++) {
                groups[i].addEventListener("click", function() {
                    var inGroup = document.getElementsByClassName(this.getAttribute("data-group"));
                    this.innerHTML = (this.innerHTML.indexOf("+") > -1) ? this.innerHTML.replace("+", "-") : this.innerHTML.replace("-", "+");
                    for (var j = 0; j < inGroup.length; j++) {
                        inGroup[j].style.display = (inGroup[j].style.display !== "none") ? "none" : "table-row";
                    }
                });
            }
        