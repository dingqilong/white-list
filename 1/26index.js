

$(function () {
    var vm = new Vue({
        el: '#vm',
        data: {
            title: 'TODO List',
            todos: [
                {
                    name: 'Learn Git',
                    description: 'Learn how to use git as distributed version control'
                },
                {
                    name: 'Learn JavaScript',
                    description: 'Learn JavaScript, Node.js, NPM and other libraries'
                },
                {
                    name: 'Learn Python',
                    description: 'Learn Python, WSGI, asyncio and NumPy'
                },
                {
                    name: 'Learn Java',
                    description: 'Learn Java, Servlet, Maven and Spring'
                }
            ]
        }
    });
    window.vm = vm;
});

function executeJs() {
    try {
        var code = $('#code').val();
        var fn = new Function('var vm = window.vm;\n' + code);
        fn();
    } catch (e) {}
    return false;
}

    