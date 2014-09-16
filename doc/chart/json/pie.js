var chart = jui.include('chart.basic');

chart("#chart", {
    width : 400,
    height : 400,
    data : [
        { browser : "IE", share : 70 },
        { browser : "Firefox", share : 11 },
        { browser : "Chrome", share : 9 },
        { browser : "Safari", share : 6 },
        { browser : "Other", share : 4 }
    ],
    brush : {
        type : "pie",
        target : "share"
    }
}).render();
