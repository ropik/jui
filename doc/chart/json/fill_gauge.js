var chart = jui.include("chart.builder");

var c = chart("#chart", {
    width: 400,
    height : 400,
    grid : {
        y : {
           type : 'range',
           domain : [0, 100],
           step : 10,
           dist : -150
        }
    },
    brush : {
        type : 'fillgauge',
        //shape : 'rect', // default circle
        value : 70,
        min : 0,
        max : 100
        // title : "title"  생략 가능

    }
});

c.render();
