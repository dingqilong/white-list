
    var vm = new Vue({
      data: { msg: 'foo' },
      template: '<div>{{ msg }}</div>'
    })

    renderVueComponentToString(vm, function (err, result) {
      document.getElementById('result').textContent = err && err.toString() || result
    })
    