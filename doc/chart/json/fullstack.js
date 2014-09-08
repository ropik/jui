var chart = jui.include('chart.basic');


chart("#chart", {
    width: 400,
    height : 400,
    data : [
        { name : 2, value : 15, test : 20 },
        { name : 15, value : 6, test : 20 },
        { name : 8, value : 10, test : 20 },
        { name : 18, value : 5, test : 20 }
    ],
    grid : {

        x : {
            domain : [ "week1", "week2", "week3", "week4" ],
            line : true
        },
        y : {
            type : 'range',
            domain : [0, 100],
            format : function(value) { return value + "%" ;},
            line : true

        }
    },
    brush : {
        type : 'fullstack',
        target : ['name', 'value', 'test']
    }
}).render();
