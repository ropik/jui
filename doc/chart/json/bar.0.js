var chart = jui.include('chart.basic');

chart("#chart-content", {
    width: 450,
    height : 450,
    data : [
        { name : 2, value : 15 },
        { name : -15, value : 6 },
        { name : 8, value : 10 },
        { name : 18, value : 5 },
    ],
    grid : {
        y : {
            domain : [ "week1", "week2", "week3", "week4" ],
            line : true 
        },
        x : {
            type : 'range',
            target : ["name", "value"],
            step : 10,
      		line : true 
        }
    },
    brush : {
        type : 'bar',
        target : ['name', 'value']
    }
}).render();