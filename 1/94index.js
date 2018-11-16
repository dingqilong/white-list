

$(function () {
    var vm = new Vue({
        el: '#product-list',
        data: {
            products: []
        },
        methods: {
            deleteProduct: function (id) {
                var that = this;
                // AJAX提交JSON:
                $.ajax({
                    type: 'delete',
                    dataType: 'json',
                    url: '/api/products/' + id
                }).done(function (r) {
                    console.log(r);
                    var i;
                    for (i=0; i<that.products.length; i++) {
                        if (that.products[i].id === r.id) {
                            that.products.splice(i, 1);
                            return;
                        }
                    }
                }).fail(function (jqXHR, textStatus) {
                    // Not 200:
                    alert('Error: ' + jqXHR.status);
                });
            }
        }
    });

    $.getJSON('/api/products').done(function (data) {
        vm.products = data.products;
    }).fail(function (jqXHR, textStatus) {
        alert('Error: ' + jqXHR.status);
    });

    $('#product-form').submit(function (e) {
        e.preventDefault();
        var
            product = {
                name: $(this).find('input[name=name]').val(),
                manufacturer: $(this).find('input[name=manufacturer]').val(),
                price: parseFloat($(this).find('input[name=price]').val())
            };
        // AJAX提交JSON:
        $.ajax({
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            url: '/api/products',
            data: JSON.stringify(product)
        }).done(function (r) {
            vm.products.push(r);
        }).fail(function (jqXHR, textStatus) {
            // Not 200:
            alert('Error: ' + jqXHR.status);
        });
    });
});
