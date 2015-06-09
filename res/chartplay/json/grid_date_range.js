var chart = jui.include("chart.builder");
var time = jui.include("util.time");

chart("#chart", {
    axis : {
        x : {
            type : "date",
            domain : [ new Date("2015/01/01"), new Date("2015/01/02") ],
            step : [ time.hours, 6 ],
            format : "MM/dd HH:mm",
            line : true
        },
        y : {
            type : "range",
            domain : [ 0, 50 ],
            step : 5,
            line : true,
            orient : "right",
            format : function(value, i) {
                if(i > 0) return value;
            }
        }
    }
});