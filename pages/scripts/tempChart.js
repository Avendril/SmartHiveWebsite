var value;  //Temperature sensor 1 values
var value2; //Temperature sensor 2 values

createGraph(); //Call the functions for it to make a clean graph at the start.

var values = []; //create an Array of values from Temperature sensor 1
var values2 = []; //create an Array of values from Temperature sensor 2

var times = []; //create an Array of times

var text = 'txtArea'; //enter the name of the text field
//---------------------Temperature1 + 2 ----------------------------------------
var socket = io.connect('http://localhost:5000');

socket.on('connect', function (){
    socket.on('mqtt', function (msg){

      var elmarr=msg.topic.split("/");
      var elm=elmarr[3];

      if( elmarr.indexOf('Temp1') >= 0){//Temperature1 queue
        var sendData = "Internal: " + msg.payload;
        printText(text,elm,sendData); //Publish data to the textArea
        var value = (parseFloat(msg.payload)); //convert the string to float
        values.push(value); //Pass the temperature reading into the array
      };

      if( elmarr.indexOf('Temp2') >= 0){//Temperature2 queue
        var sendData2 = "External: " + msg.payload;
        printText(text,elm,sendData2); //Publish data to the textArea
        var value2 = (parseFloat(msg.payload)); //convert the string to float
        values2.push(value2); //Pass the temperature reading into the array
      };

      var d = new Date();//Get Date/Time for the times array
      var n = d.getHours()+ ":" + d.getMinutes()+ ":" + d.getSeconds();
      times.push(n);

        if(values.length > 6)//Delete the first value in the Temperature Array
        {
          values.splice(0, 1);
        }

        if(values2.length > 6)//Delete the first value in the Temperature Array
        {
          values2.splice(0, 1);
        }

        if(times.length > 6)//Delete the first value in the Time Array
        {
          times.splice(0, 1);
        }

      createGraph(values, values2, times);

    });//Subscribe to the queue
    socket.emit('subscribe',{topic:'SmartHive/Temperature/#'});
});
//-----------------------Print to Text Area-------------------------------------
function printText(chatID,ValueElm,PayloadValue){
  $('#'+chatID).append("\n" + PayloadValue);
  $('#'+chatID).scrollTop($('#'+chatID)[0].scrollHeight);
  $('#'.concat(ValueElm)).html(PayloadValue);
};
//-----------------------Line Graph---------------------------------------------
//Function to create the line graph
function createGraph(dataValues, dataValues2, dataTimes){
  var options = {
  type: 'line',
  data: {
    labels: dataTimes,//Passing the array to be the labels
    datasets: [{
	      label: 'Internal Temperature',
	      data: dataValues,//Passing the array to be the data set
        borderColor: "#3e95cd",
        fill: false
    	},
      {
	      label: 'External Temperature',
	      data: dataValues2,//Passing the array to be the data set
        borderColor: "#ff00e5",
        fill: false
    	}
		]
  },
  options: {
  	scales: {
    	yAxes: [{
        ticks: {
					reverse: false
        }
      }]
    }
  }
}
  var ctx = document.getElementById("myChart").getContext('2d');
  new Chart(ctx, options);
};
