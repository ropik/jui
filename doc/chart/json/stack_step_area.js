var chart = jui.include('chart.basic');

chart("#chart", {
    width: 400,
    height : 400,
    data : [
        { name : 2, value : 6, test : 5 },
        { name : 5, value : 6, test : 2 },
        { name : 8, value : 4, test : 5 },
        { name : 10, value : 5, test : 12 }
    ],
    grid : {
        x : {
            domain : [ "week1", "week2", "week3", "week4" ],
            full: true,
            line : true
        },
        y : {
            type : 'range',
            target : function(data) {
                return data.name + data.value + data.test + 10;
            },
            step : 10
        }
    },

    brush : [{
        type : 'stackarea',
        symbol: "step"
    }, {
        type : "stackline",
        symbol: "step"
    }, {
        type : "stackscatter",
        symbol : "circle",
        size: 8
    }]
}).render();