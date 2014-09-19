var chart = jui.include("chart.builder");

var c = chart("#chart", {
    brush : {
        type : 'fullgauge',
        value : 75,
        startAngle : -180,
        endAngle : 360,
        size : 24,
        //arrow : true,
        text : true,
        unitText : "feeds"
    }
});

c.render();
