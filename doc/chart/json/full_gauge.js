var chart = jui.include('chart.basic');

var c = chart("#chart", {
    width: 400,
    height : 400,
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
