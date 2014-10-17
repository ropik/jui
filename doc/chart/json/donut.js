var chart = jui.include("chart.builder");

chart("#chart", {
    data : [
        { browser : "IE", share : 70 },
        { browser : "Firefox", share : 11 },
        { browser : "Chrome", share : 9 },
        { browser : "Safari", share : 6 },
        { browser : "Other", share : 4 }
    ],
    brush : {
        type : "donut",
        target : "share",
        legend : 'browser',
        size : 100
    },
    widget : [
    	{ type : 'title', text : 'Donut Sample'},
    	{ type : 'legend' }
    ]
});