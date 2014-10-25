var chart = jui.include("chartx.realtime");
var time = jui.include('util.time');

var c = chart("#chart", {
    data : getRealtimeData(5),
    brush : [{
        type : "line",
        target : [ "s1", "s2", "s3" ]
    }, {
        type : "area",
        target : [ "s1", "s2", "s3" ]
    }],
    widget : [{
        type : "title",
        text : "Realtime Sample"
    }, {
        type : "legend"
    }]
});

runRealtimeData(c);