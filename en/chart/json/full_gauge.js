var chart = jui.include("chart.builder");

chart("#chart", {
    brush : {
        type : "fullgauge",
        value : 75,
        startAngle : -180,
        endAngle : 360,
        size : 24,
        text : true,
        unitText : "feeds"
    }
});
