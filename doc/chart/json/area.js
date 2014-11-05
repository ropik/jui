var chart = jui.include("chart.builder");

chart("#chart-content", {
    data : [
        { sales: 2, profit: 15, dept: 7 },
        { sales: -15, profit: 6, dept: 2 },
        { sales: 8, profit: 10, dept: 5 },
        { sales: 18, profit: 5, dept: 12 }
    ],
    grid : {
        x : {
            domain : [ "Q1", "Q2", "Q3", "Q4" ],
            full : true,
            line : true
        },
        y : {
            type: "range",
            target: [ "sales", "profit", "dept" ],
            step: 10
        }
    },
	brush : [{
		type : "area"
	}, {
		type : "line"
	}, {
        type : "scatter",
        size : 10
    }],
    widget : [{
        type : "title",
        text : "Area Sample"
    }]
});
