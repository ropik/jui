var chart = jui.include('chart.basic');
var time = jui.include('util.time');

function getNumber() {
    return Math.round(Math.random() * 30  % 20);
}

var start = new Date(),
    end = time.add(start, time.hours, 5),
    data = [];

for(var i = 0; i < 30; i++) {
    data.push({
        time : time.add(start, time.minutes, i*10),
        v1 : getNumber(),
        v2 : getNumber(),
        v3 : getNumber(),
        v4 : getNumber(),
        v5 : getNumber()
    });
}
    
chart("#chart", {
    width : 400,
    height : 400,
    data : data,
    grid : {
        x : {
            type : "date",
            domain : [ start, end ],
            step : [ time.hours, 1 ],
            format : "hh:mm",
            key: "time",
            line : true
        },
        y : {
            type : "range",
            target : "v1",
            step : 10,
            line : true
        }
    },
    brush : {
        type : "bubble",
        min : 1,
        max : 50,
        target : [ "v1", "v2", "v3", "v4", "v5" ]
    }
}).render();
