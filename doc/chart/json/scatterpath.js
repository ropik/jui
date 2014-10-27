var chart = jui.include("chart.builder"),
    theme = jui.include("chart.theme.pastel"),
    time = jui.include("util.time");

var start = new Date(),
    end = time.add(start, time.hours, 5);

chart("#chart", {
    theme : theme,
    data : getRandomData(),
    grid : {
        x : {
            type : "date",  // default type is block
            domain : [ start, end ],
            step : [ time.hours, 1 ],
            format : "hh:00",
            key: "date",
            line : true
        },
        y : {
            type : "range",
            target : [ "q1", "q2", "q3" ],
            step : 10,
            line : true
        }
    },
    brush : [{
        type : 'scatterpath',
        target : "q1",
        symbol : "circle",
        colors : [ theme.colors[0] ]
    }, {
        type : 'scatterpath',
        target : "q2",
        symbol : "triangle",
        colors : [ theme.colors[1] ]
    }, {
        type : 'scatterpath',
        target : "q3",
        symbol : "rectangle",
        colors : [ theme.colors[2] ]
    }]
});

function getRandomData() {
    var data = [];

    for(var i = 0; i < 30000; i++) {
        data.push({
            date : time.add(start, time.seconds, getTime()),
            q1 : getNumber(),
            q2 : getNumber(),
            q3 : getNumber()
        });
    }

    function getNumber() {
        return Math.floor(Math.random() * 1000) + 1;
    }

    function getTime() {
        return Math.floor(Math.random() * 5 * 60 * 60) + 1;
    }

    return data;
}