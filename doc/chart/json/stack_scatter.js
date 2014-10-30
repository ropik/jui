var chart = jui.include("chart.builder");

chart("#chart", {
    data: [
        { sales : 2, profit : 6, dept : 7 },
        { sales : 5, profit : 6, dept : 2 },
        { sales : 8, profit : 4, dept : 5 },
        { sales : 10, profit : 5, dept : 12 }
    ],
    grid: {
        x: {
            domain: [ "Q1", "Q2", "Q3", "Q4" ],
            line: true
        },
        y: {
            type: "range",
            target: function(data) {
                return data.sales + data.profit + data.dept;
            },
            step: 10
        }
    },
    series: {
        sales : { symbol : "rectangle" },
        profit : { symbol : "cross" },
        total : { symbol : "triangle" }
    },
    brush: {
        type: "stackscatter",
        size: 10
    },
    widget : [
        { type : "title", text : "Scatter Sample"},
        { type : "tooltip" }
    ]
});