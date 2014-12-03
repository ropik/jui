var chart = jui.include("chart.builder");


chart("#chart", {
    data : [
        { quarter : "1Q", samsung : 50, lg : 35, sony: 10 },
        { quarter : "2Q", samsung : 20, lg : 30, sony: 5 },
        { quarter : "3Q", samsung : 20, lg : 5, sony: 10 },
        { quarter : "4Q", samsung : 30, lg : 25, sony: 15 }
    ],
    series : {
        samsung : {
            color : 0,
            text : "Samsung"
        },
        lg : {
            color : 1,
            text : "LG"
        },
        sony : {
            color : 2,
            text : "SONY"
        }
    },
    grid : {

        x : {
            target : "quarter",
            line : true
        },
        y1 : {
            type : "range",
            domain : [ 0, 100 ],
            format : function(value) {
                return value + "%";
            },
            line : true
        }
    },
    brush : {
        type : "fullstack",
        target : [ "samsung", "lg", "sony" ]
    },
    widget : [
        { type : "title", text : "Column Sample" },
        { type : "legend", filter : true }
    ]
});
