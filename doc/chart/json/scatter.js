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
	        target : [ "name", "value", "test" ],
	        step : 10
	    }
	},
	series : {
	    name : { text : "이름",symbol : "rectangle" },
	    value : { text : "값",symbol : "cross" },
	    test : { text : "테스트값",symbol : "triangle" }
	},
	brush : [{
	    type : 'scatter',
	    size : 10,
	    //symbol: "rectangle",
	        invert: true
	    }]
	}
).render();