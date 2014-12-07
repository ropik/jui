var chart = jui.include("chart.builder");

var showEventMessage = function(obj) {
    alert("[" + obj.dataIndex + "] " +
        obj.dataKey + "=" + obj.data[obj.dataKey]);
}

var c = chart("#chart", {
    data : [
        { quarter : "1Q", sales : 50, profit : 35 },
        { quarter : "2Q", sales : -20, profit : -30 },
        { quarter : "3Q", sales : 10, profit : -5 },
        { quarter : "4Q", sales : 30, profit : 25 }
    ],
    grid : {
        x : {
            target : "quarter",
            line : true
        },
        y : {
            type : "range",
            target : [ "sales", "profit" ],
            step : 10,
            line : true
        }
    },
    brush : {
        type : "column",
        target : [ "sales", "profit" ]
    },
    event : {
        click : function(obj, e) {
            showEventMessage(obj);
        }
    }
});

// Events defined by the method
c.on("rclick", function(obj, e) {
    showEventMessage(obj);
});