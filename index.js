var net = require('net');
var mqtt = require('./MQTTClient.js');

var io  = require('socket.io').listen(5000);//10.37.28.64<--tssg SmartHive --> 192.168.1.102
var client = new mqtt.MQTTClient(1883, '10.37.28.64', 'bchmielewski');

io.sockets.on('connection', function (socket) {
  socket.on('subscribe', function (data) {
    console.log('I am Subscribing to '+data.topic);
    client.subscribe(data.topic);
  });
});

client.addListener('mqttData', function(topic, payload){
  console.log(topic+'='+payload);
  io.sockets.emit('mqtt',{'topic':String(topic),'payload':String(payload)});
});
