var chart = jui.include("chart.builder");

 chart("#chart", {
    width: 400,
    height : 400,
    data : [
        { quarter : "1Q", samsung : 50, lg : 35, sony: 10 },
        { quarter : "2Q", samsung : 20, lg : 30, sony: 5 },
        { quarter : "3Q", samsung : 20, lg : 5, sony: 10 },
        { quarter : "4Q", samsung : 30, lg : 25, sony: 15 }
    ],
    grid : {
        x : {
            target : "quarter",
            line : true
        },
        y : {
            type : "range",
            target : function(data) {
                return data.samsung + data.lg + data.sony;
            },
            line : true
        }
    },
    brush : {
        type : "stackcolumn",
        target : [ "samsung", "lg", "sony" ]
    }
}).render();
