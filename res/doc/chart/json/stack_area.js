var chart = jui.include("chart.builder");
var data = [
    { sales : 2, profit : 6, dept : 7 },
    { sales : 5, profit : 6, dept : 2 },
    { sales : 8, profit : 4, dept : 5 },
    { sales : 10, profit : 5, dept : 12 }
];

chart("#chart-content", {
    series : {
        sales : {
            color : 0
        },
        profit : {
            color : 1
        },
        dept : {
            color : 2
        }
    },
    axis : {
        x : {
            domain : [ "Q1", "Q2", "Q3", "Q4" ],
            full : true,
            line : true
        },
        y : {
            type: "range",
            target: function(data) {
                return data.sales + data.profit + data.dept;
            },
            step: 10
        },
        data : data
    },
    brush : [{
        type : "stackarea"
    }, {
        type : "stackline"
    }, {
        type : "stackscatter",
        size : 10,
        symbol : "circle"
    }],
    widget : [{
        type : "title",
        text : "Area Sample"
    }, {
        type : "legend",
        filter : true,
        brush : [ 0, 1, 2 ],
        brushSync : true
    }]
});
