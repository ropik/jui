var chart = jui.include('chart.basic');

chart("#chart", {
    width: 400,
    height : 400,
    data : [
        { apple : 26.1, microsoft : 24.86, oracle : 22.08 },
        { apple : 43.83, microsoft : 25.14, oracle : 30.15 },
        { apple : 55.03, microsoft : 24, oracle : 24.88 },
        { apple : 72.95, microsoft : 25.39, oracle : 32.78 }
    ],
    grid : {
        x : {
            domain : [ "2010", "2011", "2012", "2013" ],
            line : true,
            full : true
        },
        y : {
            type : "range",
            target : function(data) {
                return data.apple + data.microsoft + data.oracle;
            },
            step : 10
        }
    },
    brush : {
        type : "stackline"
    }
}).render();
