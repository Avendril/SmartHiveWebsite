//---------------------x,y,z Axis readings--------------------------------------
var socket = io.connect('http://localhost:5000');

socket.on('connect', function (){
    socket.on('mqtt', function (msg){

      var elmarr=msg.topic.split("/");

      Array.prototype.contains = function ( needle ) {
         for (i in this) {
             if (this[i] == needle) return true;
         }
         return false;
      }

      if (elmarr.contains('Gyroscope')) { //Get all data from Gyroscope queue

        if((elmarr.indexOf('X-Axis')) >= 0){//X-Axis queue  && 'X-Axis'
          var sendData1 = msg.payload;
          printText("gyrX", sendData1); //Publish data to the textArea
        };

        if((elmarr.indexOf('Y-Axis')) >= 0){//X-Axis queue  && 'X-Axis'
          var sendData1 = msg.payload;
          printText("gyrY", sendData1); //Publish data to the textArea
        };

        if((elmarr.indexOf('Z-Axis')) >= 0){//X-Axis queue  && 'X-Axis'
          var sendData1 = msg.payload;
          printText("gyrZ", sendData1); //Publish data to the textArea
        };
      };

    });//Subscribe to the queue
    socket.emit('subscribe',{topic:'SmartHive/Gyroscope/#'});
});
//-----------------------Print to Text Area-------------------------------------
function printText(location, value2){
  var secondValue = value2;
  var data = secondValue;
  document.getElementById(location).firstChild.nodeValue = data;
};
