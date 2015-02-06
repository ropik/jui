var chart = jui.include("chart.builder");

var dataSource = [
    { date: "", value: 0, value2: 0 },
    { date: "22 Dec", value: 27000, value2: 9000 },
    { date: "23 Dec", value: 39000, value2: 36000 },
    { date: "24 Dec", value: 48000, value2: 81000 },
    { date: "25 Dec", value: 70000, value2: 65000 },
    { date: "26 Dec", value: 74000, value2: 48000 },
    { date: "27 Dec", value: 93000, value2: 60000 },
    { date: "28 Dec", value: 70000, value2: 98000 },
    { date: "29 Dec", value: 72000, value2: 39000 },
    { date: "30 Dec", value: 68000, value2: 82000 },
    { date: "31 Dec", value: 49000, value2: 45000 },
    { date: "", value: 0, value2: 0 }
];

var dataSource2 = [
    { title : 'Overall Visits', value : 192, max : 200, min : 0, unit : "k" },
    { title : 'New Visits', value : 66, max : 100, min : 0, unit : "%" },
    { title : 'Mobile Visits', value : 75, max : 100, min : 0, unit : "%" },
    { title : 'Desktop Visits', value : 25, max : 100, min : 0, unit : "%" }
]

chart("#chart", {
    height : 400,
    format : function(d) {
        if(typeof(d) == "number")
            return (d / 1000) + "K";

        return d;
    },
    axis : [{
        x : {
            type : "block",
            domain : "date",
            full : true
        },
        y : {
            type : "range",
            domain : [ 0, 100000 ],
            step : 4,
            line : true
        },
        area : { height : "45%" },
        data : dataSource
    }, {
        c : {
            type : "table",
            rows : 1,
            columns : 4,
            padding: 10
        },
        data : dataSource2,
        area : { height : '30%', y : '65%'}
    }],
    series : {
        value : {
            color : 0
        },
        value2 : {
            color : 1
        }
    },
    brush : [{
        type : "line",
        target : [ "value", "value2" ],
        symbol : "curve",
        axis : 0,
        animate : true
    }, {
        type : "area",
        target : [ "value", "value2" ],
        symbol : "curve",
        axis : 0,
        animate : true
    }, {
        type : "fullgauge",
        axis : 1,
        size : 10,
        titleX : -47
    } ],
    widget : [{
        type : "title",
        text : "AUDIENCE",
        align : "start",
        dx : -35
    }, {
        type : "title",
        text : "DETAILS",
        align : "start",
        dx : -35,
        dy : 215
    }],
    style : {
        areaBackgroundOpacity : 0.85,
        lineBorderWidth : 3
    }
});