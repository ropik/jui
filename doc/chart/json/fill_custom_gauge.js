var chart = jui.include('chart.basic');

var c = chart("#chart", {
    width: 150,
    height : 330,
    padding : 'empty',
    brush : {
        type : 'fillgauge',
        shape : 'custom', // default circle
        direction : 'horizontal',
        value : 50,
        min : 0,
        max : 100,
        svg : "chart/resource/woman.svg"

    }
});

c.render();
