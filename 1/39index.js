

$(function () {
    var vm = new Vue({
        el: '#vm',
        data: {
            email: '',
            password: '',
            birth: '',
            gender: 's',
            language: ['zh'],
            city: 'bj',
            introduction: '',
            subscribe: true
        },
        methods: {
            register: function () {
                $('#modal-data').text(JSON.stringify(this.$data, null, '    '));
                $('#modal').modal();
                // TODO: post JSON data to server...
            }
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

    