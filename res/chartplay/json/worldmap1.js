var chart = jui.include("chart.builder");

chart("#chart", {
    padding : 0,
    axis : [{
        map : {
            path : "resource/worldFree.svg",
            width : 950,
            height : 620,
            scale : 1
        }
    }],
    brush : [{
        type : "map.bubble"
    }],
    widget : {
        type : "map.control",
        align : "start",
        orient : "top"
    }
});
