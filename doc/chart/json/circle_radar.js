var chart = jui.include('chart.basic');

chart("#chart", {
    width: 400,
    height : 400,
    data : [
        { type : "STR", warrior : 100, wizard : 30, archer : 35 },
        { type : "VIT", warrior : 80, wizard : 50, archer : 70 },
        { type : "DEX", warrior : 50, wizard : 70, archer : 95 },
        { type : "AGI", warrior : 70, wizard : 60, archer : 75 },
        { type : "INT", warrior : 30, wizard : 100, archer : 30 },
        { type : "WIS", warrior : 50, wizard : 90, archer : 40 }
    ],
    grid : {
        type : "radar",
        shape : "circle",
        target : "type"
    },
    brush : {
        type : "path",
        target : [ "warrior", "wizard", "archer" ]
    }
}).render();
