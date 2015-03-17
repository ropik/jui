var chart = jui.include("chart.builder");

// The SVG icon of style components can be used in chart
chart("#chart", {
    /* When no load is 'jui.css' or Icon file of the other libraries /
    icon: {
        type: "jennifer",
        path: "../../img/icon-list.ttf"
    },
    /**/
    padding : 150,
    series : {
        ie : { text : "IE" },
        ff : { text : "FireFox" },
        chrome : { text : "Chrome" },
        safari : { text : "Safari" },
        other : { text : "Other" }
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
            type : "legend",
            icon : "{chart}"
        }
    ]
});
