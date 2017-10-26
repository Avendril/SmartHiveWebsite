var sys = require('sys');
var net = require('net');
var mqtt = require('mqtt');

var io  = require('socket.io').listen(5000);
var client = new mqtt.MQTTClient(5000, '10.37.28.64', 'bchmielewski');

io.sockets.on('connection', function (socket) {
  socket.on('subscribe', function (data) {
    console.log('Subscribing to '+data.topic);
    client.subscribe(data.topic);
  });
});

client.addListener('mqttData', function(topic, payload){
  sys.puts(topic+'='+payload);
  io.sockets.emit('mqtt',{'topic':String(topic),
    'payload':String(payload)});
});
