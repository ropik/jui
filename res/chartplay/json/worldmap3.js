var chart = jui.include("chart.builder");

var data = [{
    id: "usa",
    flag: true
}, {
    id: "britain"
}, {
    id: "spain",
    flag: true
}, {
    id: "france"
}, {
    id: "ukraine",
    flag: true
}, {
    id: "italy",
    flag: true
}, {
    id: "ireland"
}, {
    id: "norway",
    flag: true
}, {
    id: "greece",
    flag: true
}, {
    id: "lithuania"
}];

chart("#chart", {
    padding : 0,
    axis : [{
        map : {
            path : "resource/worldFree2.svg",
            width : 950,
            height : 620
        },
        data : data
    }],
    brush : [{
        type : "map.marker",
        width : 16,
        height : 16,
        html : function(d) {
            if(d.flag) {
                return "<img src='resource/flag.png' width='16' height='16' />";
            }
        },
        svg : function(d) {
            if(d.id == "britain") {
                return "<circle fill='#7977C2' r='6'></circle>"
            }
        }
    }],
    widget : [{
        type : "map.control",
        align : "start",
        orient : "top",
        dx : 10,
        dy : 10,
        minScale : 1,
        maxScale : 2
    }],
    style : {
        mapPathBackgroundColor : "#15A892",
        mapPathBackgroundOpacity : 0.6,
        mapControlButtonColor : "#15A892"
    }
});
