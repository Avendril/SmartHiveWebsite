
var socket = io.connect('http://localhost:5000');
  socket.on('connect', function () {
    socket.on('mqtt', function (msg) {
      var elmarr=msg.topic.split("/");
      var elm=elmarr[3];
  document.getElementById("myChart").style.overflow = "auto";
  $('#myChart').append("\n" + msg.payload);
      console.log(msg.payload);
      $('#'.concat(elm)).html(msg.payload);

      var gvalue = msg.payload;
   });
   socket.emit('subscribe',{topic:'SmartHive/Temperature1'});
  });
