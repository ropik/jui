var chart = jui.include("chart.builder");

var data = [{
    id: "usa",
    airport: "small"
}, {
    id: "britain",
    routes: [ "usa", "iceland", "sweden", "lithuania", "portugal", "spain", "italy", "ukraine" ],
    airport: "large"
}, {
    id: "iceland",
    airport: "small"
}, {
    id: "portugal",
    airport: "small"
}, {
    id: "spain",
    airport: "small"
}, {
    id: "france",
    airport: "small"
}, {
    id: "sweden",
    airport: "small"
}, {
    id: "ukraine",
    airport: "small"
}, {
    id: "italy",
    airport: "small"
}, {
    id: "ireland",
    airport: "small"
}, {
    id: "norway",
    airport: "small"
}, {
    id: "greece",
    airport: "small"
}, {
    id: "lithuania",
    airport: "large"
}];

chart("#chart", {
    padding : 0,
    axis : [{
        map : {
            path : "resource/worldFree2.svg",
            width : 950,
            height : 620,
            scale : 2.5,
            viewX : -200,
            viewY : -300
        },
        data : data
    }],
    brush : [{
        type : "map.flightroute"
    }],
    widget : [{
        type : "map.control",
        align : "start",
        orient : "top",
        dx : 10,
        dy : 10,
        minScale : 2,
        maxScale : 4
    }],
    style : {
        mapPathBackgroundColor : "#FFCC00",
        mapPathBackgroundOpacity : 0.4,
        mapControlButtonColor : "#FFCC00"
    }
});
