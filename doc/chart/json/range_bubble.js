var chart = jui.include('chart.basic');
var time = jui.include('util.time');

function getDate() {
    return Math.round((Math.random()*100) % 30)
}

function getNumber() {
    return Math.round(Math.random() * 30  % 20);
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
            target : ["name"],
            step : 10,
            line : true
        }
    },
    brush : {
        type : 'bubble',
        //smooth : true,
        min : 1,
        max : 50,
        target : ["name", "name2"]
    }
}).render();
