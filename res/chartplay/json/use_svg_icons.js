var chart = jui.include("chart.builder");

// The SVG icon of style components can be used in chart
chart("#chart", {
    padding : 150,
    series : {
        ie : { text : "{new-window} IE" },
        ff : { text : "{gear} FireFox" },
        chrome : { text : "{calendar} Chrome" },
        safari : { text : "{download} Safari" },
        other : { text : "{upload} Other" }
    },
    axis : {
        data : [
            { ie : 70, ff : 11, chrome : 9, safari : 6, other : 4 }
        ]
    },
    brush : {
        type : "pie",
        showText : true
    },
    widget : [
    	{
            type : "title",
            text : "Pie Sample"
        }, {
            type : "tooltip",
            orient : "left",
            format : function(k, v) {
                return this.icon("label") + v;
            }
        }, {
            type : "legend"
        }
    ]
});
