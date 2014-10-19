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
        size : 100
    },
    series : {
        share: {
            text: "점유율(%)"
        }
    },
    widget : [
        { type : "title", text : "Donut Sample" },
        { type : "tooltip", position: "right" },
        { type : "legend", key : "browser" }
    ]
});