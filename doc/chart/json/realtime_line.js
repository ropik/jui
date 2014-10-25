var chart = jui.include("chartx.realtime");
var time = jui.include('util.time');

var c = chart("#chart", {
    data : getRealtimeData(5),
    brush : {
        type : "line",
        target : [ "s1", "s2", "s3" ]
    },
    widget : [{
        type : "title",
        text : "Realtime Sample"
    }, {
        type : "legend"
    }, {
        type : "cross",
        format : function(d) {
            if(typeof(d) == "number") {
                return Math.round(d);
            } else {
                return time.format(d, "hh:mm:ss");
            }
        }
    }, {
        type : "tooltip"
    }]
});

runRealtimeData(c);