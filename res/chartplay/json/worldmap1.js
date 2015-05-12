var chart = jui.include("chart.builder");

var data = [{
    id: "south korea",
    x: 790,
    y: 205,
    value: 10
}, {
    id: "china",
    x: 730,
    y: 220,
    value: 100
}, {
    id: "usa",
    x: 195,
    y: 200,
    value: 70
}, {
    id: "france",
    x: 460,
    y: 195,
    value: 50
}, {
    id: "brazil",
    x: 310,
    y: 370,
    value: 80
}, {
    id: "australia",
    x: 820,
    y: 435,
    value: 20
}];

chart("#chart", {
    padding : 0,
    axis : [{
        map : {
            path : "resource/worldFree.svg",
            width : 950,
            height : 620,
            scale : 1
        },
        data : data
    }],
    brush : [{
        type : "map.bubble",
        color : function(d) {
            if(d.value > 70) {
                return "linear(top) #ff686c,0.9 #fa5559";
            } else if(d.value > 35) {
                return "linear(top) #ff9d46,0.9 #ff7800";
            }

            return "linear(top) #9694e0,0.9 #7977C2";
        }
    }, {
        type : "map.selector",
        activeEvent : "map.click"
    }],
    widget : [{
        type : "map.control",
        align : "start",
        orient : "top",
        dx : 10,
        dy : 10
    }, {
        type : "map.tooltip",
        format : function(d) {
            if(d.id == "south korea") {
                return "Korea";
            }

            return d.id;
        }
    }]
});
