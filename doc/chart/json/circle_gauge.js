var chart = jui.include("chart.builder");

var c = chart("#chart", {
    width: 400,
    height : 400,
    brush : {
        type : 'circlegauge',
        value : 50,
        min : 0,
        max : 100
	}
}).render();
