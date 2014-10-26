var chart = jui.include("chartx.realtime");
var time = jui.include('util.time');

var c = chart("#chart", {
    data : getRealtimeData(5),
    grid : {
        target: function(d) {
            return d.s5 * 2;
        }
    },
    brush : {
        type : "line",
        target : [
            "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10",
            "s11", "s12", "s13", "s14", "s15", "s16", "s17", "s18", "s19", "s20"
        ]
    },
    widget : [{
        type : "title",
        text : "Realtime Sample"
    }, {
        type : "tooltip"
    }]
});

function getRealtimeRowData(time) {
    return {
        time : time,
        s1 : Math.sin(realtimeIndex / 10) * 1.5,
        s2 : Math.sin(realtimeIndex / 10) * 2.0,
        s3 : Math.sin(realtimeIndex / 10) + 2.5,
        s4 : Math.sin(realtimeIndex / 10) * 3,
        s5 : Math.sin(realtimeIndex / 10) * 3.5,
        s6 : Math.sin(realtimeIndex / 15) * 3.5,
        s7 : Math.sin(realtimeIndex / 15) * 3.0,
        s8 : Math.sin(realtimeIndex / 15) + 2.5,
        s9 : Math.sin(realtimeIndex / 15) * 2,
        s10 : Math.sin(realtimeIndex / 15) * 1.5,
        s11 : Math.sin(realtimeIndex / 20) * 1.5,
        s12 : Math.sin(realtimeIndex / 20) * 2.0,
        s13 : Math.sin(realtimeIndex / 20) + 2.5,
        s14 : Math.sin(realtimeIndex / 20) * 3,
        s15 : Math.sin(realtimeIndex / 20) * 3.5,
        s16 : Math.sin(realtimeIndex / 10) * 3.5,
        s17 : Math.sin(realtimeIndex / 10) * 3.0,
        s18 : Math.sin(realtimeIndex / 10) + 2.5,
        s19 : Math.sin(realtimeIndex / 10) * 2,
        s20 : Math.sin(realtimeIndex / 10) * 1.5
    }
}

runRealtimeData(c);