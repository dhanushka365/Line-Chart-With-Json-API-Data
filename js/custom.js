var xmlhttp = new XMLHttpRequest();
var url = "http://localhost/Line%20Chart%20With%20Json%20API%20Data/js/jsonData.json";
xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var data =JSON.parse(this.responseText);
        console.log(data);
        const date =data.months_temparature.map(function(elem)
        {
            return elem.date;
        })
        console.log(date);
        var high =data.months_temperature.map(function(elem){
            return elem.high;
        })
        console.log(high);
        var low =data.months_temparature.map(function(elem){
            return elem.low;
        })
        console.log(low);
        var ctx = document.getElementById('canvas').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: date,
                datasets: [{
                    label: 'High Temparature F',
                    data: high,
                    backgroundColor:'transparent',
                    borderColor:'red',
                    borderWidth: 4
                },
                {
                    label: 'Low Temparature F',
                    data: low,
                    backgroundColor:'transparent',
                    borderColor:'green',
                    borderWidth: 4
                },
            ]
            },
            options: {
                elements:{
                    line:{
                       tension:0
                    } 
                },
                scales: {
                    yAxes:[{
                        ticks:{
                            beginAtZero: true
                        }
                   }] 
                }
            }
        });
    }
}

