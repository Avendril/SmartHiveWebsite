
var socket2 = io.connect('http://localhost:5000');
  socket2.on('connect', function () {
    socket2.on('mqtt', function (msg) {
      var almarr=msg.topic.split("/");
      var alm=almarr[3];
      $('#txtArea').append("\n" + msg.payload);
      $('#txtArea').scrollTop($('#txtArea')[0].scrollHeight);
      $('#'.concat(elm)).html(msg.payload);
      var value2 = (parseFloat(msg.payload));
      values2.push(value2);

      if(values2.length > 6){
        values2.splice(0, 1);
      }

   });
   socket.emit('subscribe',{topic:'SmartHive/Temperature2'});
  });
