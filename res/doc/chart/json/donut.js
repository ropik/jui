var chart = jui.include("chart.builder");

chart("#chart", {
    data : [
        { ie : 70, ff : 11, chrome : 9, safari : 6, other : 4 }
    ],
    series : {
        ie : { text : "IE" },
        ff : { text : "FireFox" },
        chrome : { text : "Chrome" },
        safari : { text : "Safari" },
        other : { text : "Other" }
    },
    brush : {
        type : "donut"
    },
    widget : [
        { type : "title", text : "Donut Sample" },
        { type : "tooltip", position: "right" },
        { type : "legend" }
    ]
});