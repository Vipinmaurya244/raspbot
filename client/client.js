var net = require('net');
var Packet = require('./../models/packet.js');
var parser = require('./../utils/parser');

var clientSocket = new net.Socket();
const ip = '127.0.0.1',
    port = 5000;

clientSocket.connect(5000, '127.0.0.1', function() {
    console.log('Connected');
    clientSocket.write();
});

clientSocket.on('data', function(data) {
    console.log('Received: ' + data);
    clientSocket.destroy();
});

clientSocket.on('close', function() {
    console.log('Connection closed');
});