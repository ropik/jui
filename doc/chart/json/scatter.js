var chart = jui.include("chart.builder");

chart("#chart", {
    data: [
        { sales: 2, profit: 15, total: 20 },
        { sales: 15, profit: 6, total: 20 },
        { sales: 8, profit: 10, total: 20 },
        { sales: 18, profit: 5, total: 20 }
    ],
    grid: {
        x: {
            domain: [ "Q1", "Q2", "Q3", "Q4" ],
            line: true
        },
        y: {
            type: "range",
            target: "total",
            step: 10
        }
    },
    series: {
        sales : { symbol : "rectangle" },
        profit : { symbol : "cross" },
        total : { symbol : "triangle" }
    },
    brush: {
        type: "scatter",
        size: 10
    }
}).render();