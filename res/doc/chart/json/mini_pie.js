var chart = jui.include("chart.builder");

chart("#chart", {
    width : 100,
    height : 50,
    padding : "empty",
    axis : {
        data : [
            { ie : 70, ff : 11, chrome : 9, safari : 6, other : 4 }
        ]
    },
    brush : {
        type : "pie"
    }
});
