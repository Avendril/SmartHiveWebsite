//---------------------x,y,z Axis readings--------------------------------------
var socket = io.connect('http://localhost:5000');

socket.on('connect', function (){
    socket.on('mqtt', function (msg){

      var elmarr=msg.topic.split("/");
      var elm=elmarr[3];
//console.log(elmarr);
      if( elmarr.indexOf('Accelerometer' && 'Z-Axis') >= 0){//X-Axis queue
        var sendData = "X-Axis: " + msg.payload;
        printText('txtArea',elm,sendData); //Publish data to the textArea
        Xaxis('Area1',elm,sendData);
      };

      if( elmarr.indexOf('Accelerometer' && 'Z-Axis') >= 0){//Y-Axis queue
        var sendData2 = "Y-Axis: " + msg.payload;
        printText('txtArea',elm,sendData2); //Publish data to the textArea
        Yaxis('Area2',elm,sendData2);
      };

      if( elmarr.indexOf('Accelerometer' && 'Z-Axis') >= 0){//Z-Axis queue
        var sendData3 = "Z-Axis: " + msg.payload;
        printText('txtArea',elm,sendData3); //Publish data to the textArea
        Zaxis('Area3',elm,sendData3);
      };

      if( elmarr.indexOf('Gyroscope' && 'Z-Axis') >= 0){//X-Axis queue
        var sendData4 = "X-Axis: " + msg.payload;
        printText2('txtArea2',elm,sendData4); //Publish data to the textArea
        gXaxis('Area4',elm,sendData4);
      };

      if( elmarr.indexOf('Gyroscope' && 'Z-Axis') >= 0){//Y-Axis queue
        var sendData5 = "Y-Axis: " + msg.payload;
        printText2('txtArea2',elm,sendData5); //Publish data to the textArea
        gYaxis('Area5',elm,sendData5);
      };

      if( elmarr.indexOf('Gyroscope' && 'Z-Axis') >= 0){//Z-Axis queue
        var sendData6 = "Z-Axis: " + msg.payload;
        printText2('txtArea2',elm,sendData6); //Publish data to the textArea
        gZaxis('Area6',elm,sendData6);
      };

    });//Subscribe to the queue
    socket.emit('subscribe',{topic:'SmartHive/Accelerometer/#'});
    socket.emit('subscribe',{topic:'SmartHive/Gyroscope/#'});
});
//-----------------------Print to Text Area-------------------------------------
function printText(chatID,ValueElm,PayloadValue){
  $('#'+chatID).append("\n" + PayloadValue);
  $('#'+chatID).scrollTop($('#'+chatID)[0].scrollHeight);
  $('#'.concat(ValueElm)).html(PayloadValue);
};

function printText2(chatID,ValueElm,PayloadValue){
  $('#'+chatID).append("\n" + PayloadValue);
  $('#'+chatID).scrollTop($('#'+chatID)[0].scrollHeight);
  $('#'.concat(ValueElm)).html(PayloadValue);
};

function Xaxis(Area,ValueElm,PayloadValue){
  $('#'+Area).append("\n" + PayloadValue);
  $('#'+Area).scrollTop($('#'+Area)[0].scrollHeight);
  $('#'.concat(ValueElm)).html(PayloadValue);
};

function Yaxis(Area2,ValueElm,PayloadValue){
  $('#'+Area2).append("\n" + PayloadValue);
  $('#'+Area2).scrollTop($('#'+Area2)[0].scrollHeight);
  $('#'.concat(ValueElm)).html(PayloadValue);
};

function Zaxis(Area3,ValueElm,PayloadValue){
  $('#'+Area3).append("\n" + PayloadValue);
  $('#'+Area3).scrollTop($('#'+Area3)[0].scrollHeight);
  $('#'.concat(ValueElm)).html(PayloadValue);
};

function gXaxis(Area4,ValueElm,PayloadValue){
  $('#'+Area4).append("\n" + PayloadValue);
  $('#'+Area4).scrollTop($('#'+Area4)[0].scrollHeight);
  $('#'.concat(ValueElm)).html(PayloadValue);
};

function gYaxis(Area5,ValueElm,PayloadValue){
  $('#'+Area5).append("\n" + PayloadValue);
  $('#'+Area5).scrollTop($('#'+Area5)[0].scrollHeight);
  $('#'.concat(ValueElm)).html(PayloadValue);
};

function gZaxis(Area6,ValueElm,PayloadValue){
  $('#'+Area6).append("\n" + PayloadValue);
  $('#'+Area6).scrollTop($('#'+Area6)[0].scrollHeight);
  $('#'.concat(ValueElm)).html(PayloadValue);
};
