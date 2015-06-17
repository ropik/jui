var chart = jui.include("chart.builder");

var data = [{
    id: "KR",
    value: 10
}, {
    id: "CN",
    value: 100
}, {
    id: "US",
    value: 70
}, {
    id: "FR",
    value: 50
}, {
    id: "BR",
    value: 80
}, {
    id: "AU",
    value: 20
}];

chart("#chart", {
    padding : 0,
    axis : [{
        map : {
            path : "../../lib/jui/img/map/world-1040x660.svg",
            width : 1040,
            height : 630,
            scale : 1.5
        },
        data : data
    }],
    brush : [{
        type : "map.bubble",
        colors : function(d) {
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
        format : function(obj) {
            if(obj.data.id == "south korea") {
                return "Korea";
            }

            return obj.data.id;
        }
    }],
    style: {
        mapPathBorderWidth: 0.5
    }
});
