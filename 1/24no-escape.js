
    var data = {
        value: '<span style="color:#F00">hello world!</span>'
    };
    var html = template('test', data);
    document.getElementById('content').innerHTML = html;
    