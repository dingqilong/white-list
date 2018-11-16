

    var Web3 = require('web3');
    var web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
    var from = web3.eth.coinbase;
    web3.eth.defaultAccount = from;

    window.onload = function () {
        var filter = web3.eth.namereg().Changed();
        filter.watch(function (err, event) {
            // live update all fields
            onAddressKeyUp();
            onNameKeyUp();
            onRegisterOwnerKeyUp();
        });
    };

    function registerOwner() {
        var name = document.getElementById('registerOwner').value;
        web3.eth.namereg().reserve(name);
        document.getElementById('nameAvailability').innerText += ' Registering name in progress, please wait...';
    };
    
    function changeAddress() {
        var name = document.getElementById('registerOwner').value;
        var address = document.getElementById('newAddress').value;
        web3.eth.namereg().setAddress(name, address, true);
        document.getElementById('currentAddress').innerText += ' Changing address in progress. Please wait.';
    };

    function onRegisterOwnerKeyUp() {
        var name = document.getElementById('registerOwner').value;
        var owner = web3.eth.namereg().owner(name)
        document.getElementById('currentAddress').innerText = web3.eth.namereg().addr(name);
        if (owner !== '0x0000000000000000000000000000000000000000') {
            if (owner === from) {
                document.getElementById('nameAvailability').innerText = "This name is already owned by you " + owner;
            } else {
                document.getElementById('nameAvailability').innerText = "This name is not available. It's already registered by " + owner;
            }
            return;
        }
        document.getElementById('nameAvailability').innerText = "This name is available. You can register it.";
    };

    function onAddressKeyUp() {
        var address = document.getElementById('address').value;
        document.getElementById('nameOf').innerText = web3.eth.namereg().name(address);
    };
    
    function onNameKeyUp() {
        var name = document.getElementById('name').value;
        document.getElementById('addressOf').innerText = web3.eth.namereg().addr(name);
    };

