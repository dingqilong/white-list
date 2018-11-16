

    var Web3 = require('web3');
    var web3 = new Web3();
    var BigNumber = require('bignumber.js');
    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
    var from = web3.eth.coinbase;
    web3.eth.defaultAccount = from;

    var nameregAbi = [
        {"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"name","outputs":[{"name":"o_name","type":"bytes32"}],"type":"function"},
        {"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},
        {"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"content","outputs":[{"name":"","type":"bytes32"}],"type":"function"},
        {"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"addr","outputs":[{"name":"","type":"address"}],"type":"function"},
        {"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"reserve","outputs":[],"type":"function"},
        {"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"subRegistrar","outputs":[{"name":"o_subRegistrar","type":"address"}],"type":"function"},
        {"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_newOwner","type":"address"}],"name":"transfer","outputs":[],"type":"function"},
        {"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_registrar","type":"address"}],"name":"setSubRegistrar","outputs":[],"type":"function"},
        {"constant":false,"inputs":[],"name":"Registrar","outputs":[],"type":"function"},
        {"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_a","type":"address"},{"name":"_primary","type":"bool"}],"name":"setAddress","outputs":[],"type":"function"},
        {"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_content","type":"bytes32"}],"name":"setContent","outputs":[],"type":"function"},
        {"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"disown","outputs":[],"type":"function"},
        {"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"register","outputs":[{"name":"","type":"address"}],"type":"function"},
        {"anonymous":false,"inputs":[{"indexed":true,"name":"name","type":"bytes32"}],"name":"Changed","type":"event"},
        {"anonymous":false,"inputs":[{"indexed":true,"name":"name","type":"bytes32"},{"indexed":true,"name":"addr","type":"address"}],"name":"PrimaryChanged","type":"event"}
    ];

    var depositAbi = [{"constant":false,"inputs":[{"name":"name","type":"bytes32"}],"name":"deposit","outputs":[],"type":"function"}];

    var Namereg = web3.eth.contract(nameregAbi);
    var Deposit = web3.eth.contract(depositAbi);

    var namereg = web3.eth.ibanNamereg;
    var deposit; 
    var iban;

    function validateNamereg() {
        var address = document.getElementById('namereg').value;
        var ok = web3.isAddress(address) || address === 'default';
        if (ok) {
            namereg = address === 'default' ? web3.eth.ibanNamereg : Namereg.at(address);
            document.getElementById('nameregValidation').innerText = 'ok!';
        } else {
            document.getElementById('nameregValidation').innerText = 'namereg address is incorrect!';
        }
        return ok;
    };

    function onNameregKeyUp() {
        updateIBAN(validateNamereg());
        onExchangeKeyUp();
    };
    
    function validateExchange() {
        var exchange = document.getElementById('exchange').value;
        var ok = /^[0-9A-Z]{4}$/.test(exchange);
        if (ok) {
            var address = namereg.addr(exchange);
            deposit = Deposit.at(address);
            document.getElementById('exchangeValidation').innerText = 'ok! address of exchange: ' + address;
        } else {
            document.getElementById('exchangeValidation').innerText = 'exchange id is incorrect';
        }
        return ok;
    };

    function onExchangeKeyUp() {
        updateIBAN(validateExchange());
    };

    function validateClient() {
        var client = document.getElementById('client').value;
        var ok = /^[0-9A-Z]{9}$/.test(client);
        if (ok) {
            document.getElementById('clientValidation').innerText = 'ok!';
        } else {
            document.getElementById('clientValidation').innerText = 'client id is incorrect';
        }
        return ok;
    };

    function onClientKeyUp() {
        updateIBAN(validateClient());
    };

    function validateValue() {
        try {
            var value = document.getElementById('value').value;
            var bnValue = new BigNumber(value);
            document.getElementById('valueValidation').innerText = bnValue.toString(10);
            return true;
        } catch (err) {
            document.getElementById('valueValidation').innerText = 'Value is incorrect, cannot parse';
            return false;
        }
    };

    function onValueKeyUp() {
        validateValue();
    };

    function validateIBAN() {
        if (!iban.isValid()) {
            return document.getElementById('ibanValidation').innerText = ' - IBAN number is incorrect';
        }
        document.getElementById('ibanValidation').innerText = ' - IBAN number correct';
    };

    function updateIBAN(ok) {
        var exchangeId = document.getElementById('exchange').value;
        var clientId = document.getElementById('client').value; 
        iban = web3.eth.iban.createIndirect({
            institution: exchangeId,
            identifier: clientId
        });
        document.getElementById('iban').innerText = iban.toString();
        validateIBAN();
    };

    function transfer() {
        var value = new BigNumber(document.getElementById('value').value);
        var exchange = document.getElementById('exchange').value;
        var client = document.getElementById('client').value;
        deposit.deposit(web3.fromAscii(client), {value: value});
        displayTransfer("deposited client's " + client + " funds " + value.toString(10) + " to exchange " + exchange);
    };

    function displayTransfer(text) {
        var node = document.createElement('li');
        var textnode = document.createTextNode(text);
        node.appendChild(textnode);
        document.getElementById('transfers').appendChild(node);
    }
    
