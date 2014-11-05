var chart = jui.include("chart.builder");

chart("#chart-content", {
    data : [
        { quarter : "1Q", samsung : 300, apple : 450, google : 430, facebook: 350 },
        { quarter : "2Q", samsung : 200, apple : 430, google : 410, facebook: 280 },
        { quarter : "3Q", samsung : 190, apple : 360, google : 380, facebook: 320 },
        { quarter : "4Q", samsung : 260, apple : 470, google : 350, facebook: 340 }
    ],
    grid : {
        x : {
            target : "quarter",
            line : true
        },
        y1 : {
            type : "range",
            step : 10,
            line : true,
            format : function(d) {
                return "$" + d + "B";
            },
            target : function(d) {
                return 500;
            }
        }
    },
    brush : {
        type : "column",
        target : [ "samsung", "apple", "google", "facebook" ],
        innerPadding : -30,
        outerPadding : 30
    },
    widget : [
        { type : "title", text : "Column Sample" },
        { type : "tooltip" },
        { type : "legend" }
    ]
});
