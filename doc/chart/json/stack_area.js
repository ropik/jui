var chart = jui.include('chart.basic');

chart("#chart", {
    width: 400,
    height : 400,
    data : [
        { name : 2, value : 5, test : 3 },
        { name : 9, value : 6, test : 5 },
        { name : 8, value : 7, test : 6 },
        { name : 7, value : 5, test : 4 }
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
        type : 'stackarea'
    }, {
        type : "stackline"
    }, {
        type : "stackscatter",
        symbol : "circle",
        size: 8
    }],

    event: {
        click: function(elem, data) {
            console.log(elem, data);
        }
    }
}).render();