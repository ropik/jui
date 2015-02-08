var chart = jui.include("chart.builder");

//"MR 1","MR 2","MR 3","MR 4","MR 5","MR 6","MR 7","MR 8","MR 9","MR 10","MR 11","MR 12"
//[4470,6300,4590,4500,5550,6500,4775,4950,4400,4100,4800,5100],
//[3650,4000,5150,5150,3800,6100,6800,4000,4030,3100,2090,4100],

//:["Apr","May","Jun","Jul","Aug","Sept"],
//[36,30,20,41,26,21],
//:[42,24,28,36,34,28],
var data = [
    { mr : "MR 1", value1 : 49.9, value2 : 1016 },
    { mr : "MR 2", value1 : 71.5, value2 : 1016 },
    { mr : "MR 3", value1 : 106.49, value2 : 1015.9 },
    { mr : "MR 4", value1 : 129.2, value2 : 1015.5 },
    { mr : "MR 5", value1 : 144.0, value2 : 1012.3 },
    { mr : "MR 6", value1 : 176.0, value2 : 1009.5 },
    { mr : "MR 7", value1 : 135.6, value2 : 1009.6 },
    { mr : "MR 8", value1 : 148.5, value2 : 1010.2 },
    { mr : "MR 9", value1 : 216.4, value2 : 1013.1 },
    { mr : "MR 10", value1 : 194.1, value2 : 1016.9 },
    { mr : "MR 11", value1 : 95.6, value2 : 1018.2 },
    { mr : "MR 12", value1 : 54.4, value2 : 1016.7 }
];

chart("#chart", {
    padding : {
        right : 120
    },
    axis : [{
        x : {
            domain : "month",
            line : true
        },
        y : {
            type : "range",
            domain: [ 0, 300 ],
            step : 6,
            color : "#7cb5ec",
            format : function(value) {
                return value + " mm";
            }
        },
        data : data
    }, {
        x : {
            extend : 0,
            hide : true
        },
        y : {
            type : "range",
            domain : [ 1008, 1020 ],
            step : 6,
            dist : 50,
            color : "#434348",
            format : function(value) {
                return value + " mb";
            },
            orient : "right"
        },
        data : data
    }, {
        x : {
            extend : 0,
            hide : true
        },
        y : {
            type: "range",
            domain: [ 5, 35 ],
            step: 6,
            color: "#90ed7d",
            format: function (value) {
                return value + " ℃";
            },
            orient : "right"
        },
        data : data
    }],
    brush : [
    	{ type : "column", target : "rainfall", colors : [ "#7cb5ec" ], outerPadding : 5 },
    	{ type : "line", target : "sealevel", axis : 1, colors : [ "#434348" ] , symbol : "curve" },
    	{ type : "line", target : "temperature", axis : 2, colors: [ "#90ed7d" ], symbol : "curve" },
    	{ type : "scatter", target : "temperature", axis : 2, colors: [ "#90ed7d" ], symbol : "triangle", size : 8 }
    ],
    widget : [
    	{ type : "title", text : "Combination Sample" },
    	{ type : "legend", brush : [ 0, 1, 2 ], align : "end" }
    ]
});