
function out(s) {
    document.getElementById('output').innerHTML += s + '<br>';
}

function doTest() {
    var i, o, s, jsonObj;
    try {
        o = {
            number: 98.6,
            string: 'Why is it called string?'
        };
        o.object = o;
        o.array = [o];
        out(JSON.stringify(JSON.decycle(
            [o, o],
            function (value) {
                if (typeof value === 'string') {
                    return 'because';
                } else {
                    return value;
                }
            }
        )));

    } catch (e) {
        debugger;
        out("    name: " + e.name);
        out(" message: " + e.message);
    }
}

doTest();
