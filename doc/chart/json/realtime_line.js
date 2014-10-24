var chart = jui.include("chartx.realtime");
var time = jui.include('util.time');
var realtimeIndex = 0;

var getRealtimeData = function(min) {
    var start = time.add(new Date(), time.minutes, -5),
        data = [];

    for(var i = 0; i < min * 60; i++) {
        data.push({
            time : time.add(start, time.seconds, i + 1),
            s1 : Math.sin(realtimeIndex / 20) - 4,
            s2 : Math.sin(realtimeIndex / 10) * 2.5,
            s3 : Math.sin(realtimeIndex / 15) + 5
        });

        realtimeIndex++;
    }

    return data;
}

var runRealtimeData = function(realtime) {
    setInterval(function() {
        realtime.append({
            time : new Date(),
            s1 : Math.sin(realtimeIndex / 20) - 4,
            s2 : Math.sin(realtimeIndex / 10) * 2.5,
            s3 : Math.sin(realtimeIndex / 15) + 5
        });

        realtimeIndex++;
    }, 1000);
}

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