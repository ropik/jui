var chart = jui.include("chart.builder");

var c = chart("#chart", {
    brush : {
        type : 'circlegauge',
        value : 50,
        min : 0,
        max : 100
	}
}).render();
