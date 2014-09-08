var chart = jui.include('chart.basic');
var time = jui.include('util.time');

    function getDate() {
        return Math.round((Math.random()*1000) % 300)
    }

    function getNumber() {
        return Math.round(Math.random() * 1000  % 500);
    }


            var start = new Date();
            var end = time.add(start, time.hours, 5);
            
            var data = [];
            for(var i = 0; i < 30; i++) {
                data.push({ name : getNumber(), name2 : getNumber(), value : time.add(start, time.minutes, i*10)} )
            }

chart("#chart", {
    width: 400,
    height : 400,
   
    data : data,
    grid : {
        
        x : { 
            type : "date",  // default type is block 
            domain : [ start, end ],
            step : [time.hours, 1],
            format : "hh:mm",
            key: "value",
            line : true 
        },
        y : { 
            type : 'range', 
            target : ["name", "name2"], 
            step : 10
        }
    },
    brush : {  
        type : 'scatter',
        size : 10,
        //smooth : true, 
        invert : true
    }
}).render();
