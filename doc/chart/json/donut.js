var chart = jui.include('chart.basic');

chart("#chart", {
    width: 400,
    height : 400,
    data : [
        { key : 'yellow', 	name : 46, 	value : 15 },
        { key : 'red',		name : 25, 	value : 6 },
        { key : 'black',	name : 18, 	value : 10 },
        { key : 'blue',		name : 10, 	value : 5 },
    ],
    brush : [{
        type : 'donut',
        target : 'name'
        }]
}).render();