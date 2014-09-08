var chart = jui.include('chart.basic');

chart("#chart", {
    width: 400,
    height : 400,
    data : [
        { key : 'yellow', 	name : 70, 	value : 85 },
        { key : 'red',		name : 55, 	value : 6 },
        { key : 'black',	name : 8, 	value : 30 },
        { key : 'blue',		name : 18, 	value : 5 },
        { key : 'green',		name : 18, 	value : 5 },
        { key : 'blue2',		name : 8, 	value : 5 },
        { key : 'blue3',		name : 50, 	value : 100 },
        { key : 'blue4',		name : 18, 	value : 5 },
    ],

    grid : {
        type : 'radar',
        shape : 'circle',
        //line : false,
        //extra : true,
        target : 'key'
    },
    brush : [
        { type : 'path', target : ['name', 'value'] }
    ]
}).render();