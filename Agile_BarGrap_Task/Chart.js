//window.onload=function(){check();}
var d111=[92,76,71,84];
var d112=[92,76,71,84];
var d121=[80,70,71,69];
var d122=[46,81,62,44];

var d211=[50,46,78,50];
var d212=[73,56,14,77];
var d221=[65,56,56,87];
var d222=[61,93,76,81];




function getDatapoints()
{

var a=document.getElementById('category').value;

var b=document.getElementById('product').value;

var c=document.getElementById('brand').value;

var y=[];
if(a=="food")
{
    if(b=='ceral' && c=='ceral1')
    y=d111;
    else if(b=='ceral' && c=='ceral2')
    y=d112;
    else if(b=='fruit' && c=='fruit1')
    y=d121;
    else if(b=='fruit' && c=='fruit2')
    y=d122;
}
else if(a=="cloth")
{
   if(b=='shirt' && c=='shirt1')
   y=d211;
   else if(b=='shirt' && c=='shirt2')
   y=d212;
   else if(b=='pant' && c=='pant1')
   y=d221;
   else if(b=='pant' && c=='pant2')
   y=d222;
}
return y; 
}


 function grapher()
{
    var y=getDatapoints();

    
    var myData = {
      labels: ["January","February","March","April"],
      title:{
        display:true,
        text:'Sales of the Products By Month',
        fontSize:25
      },
      datasets: [{
        label: "Sales By Month for:",
        
        backgroundColor: ['#319AE1','#319AE1','#319AE1','#319AE1'],
    
        data:y
      }]
    };

    var ctx = document.getElementById('my_Chart').getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'bar',    	
				data: myData    	
      });
      
      updateChartType();
}

function updateChartType() {
  // Destroy the previous chart
myChart.destroy();
  // Draw a new chart on the basic of dropdown
myChart = new Chart(ctx, {
type: 'bar', // Select chart type from dropdown
data: myData
});
};