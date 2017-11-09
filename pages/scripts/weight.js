//---------------------x,y,z Axis readings--------------------------------------
var socket = io.connect('http://localhost:5000');

socket.on('connect', function (){
    socket.on('mqtt', function (msg){

      var elmarr=msg.topic.split("/");
      var elm=elmarr[3];
//console.log(elmarr);
      if( elmarr.indexOf('Weight') >= 0){//X-Axis queue
        var sendData = msg.payload;
        printText('txtArea',elm,sendData); //Publish data to the textArea
        Xaxis('Area1',elm,sendData);
      };

    });//Subscribe to the queue
    socket.emit('subscribe',{topic:'SmartHive/Weight'});
});
//-----------------------Print to Text Area-------------------------------------
function printText(chatID,ValueElm,PayloadValue){
  $('#'+chatID).append("\n" + PayloadValue);
  $('#'+chatID).scrollTop($('#'+chatID)[0].scrollHeight);
  $('#'.concat(ValueElm)).html(PayloadValue);
};
