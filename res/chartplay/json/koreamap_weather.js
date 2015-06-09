var chart = jui.include("chart.builder");

var data = [{
    id: "서울",
    temperature: 25,
    weather: "cloudy"
}, {
    id: "인천",
    temperature: 28,
    weather: "sunny",
    x: 35,
    y: 150
}, {
    id: "강원",
    temperature: 25,
    weather: "rain"
}, {
    id: "충북",
    temperature: 26,
    weather: "rain",
    x: 195
}, {
    id: "충남",
    temperature: 22,
    weather: "sunny"
}, {
    id: "전북",
    temperature: 26,
    weather: "murky"
}, {
    id: "전남",
    temperature: 25,
    weather: "cloudy",
    x: 110
}, {
    id: "경북",
    temperature: 25,
    weather: "sunny"
}, {
    id: "경남",
    temperature: 26,
    weather: "cloudy"
}, {
    id: "제주",
    temperature: 24,
    weather: "murky",
    x: 60,
    y: 575
}];

chart("#chart", {
    padding : 0,
    axis : [{
        map : {
            path : "../../lib/jui/img/map/korea-500x650.svg",
            width : 500,
            height : 650
        },
        data : data
    }],
    brush : [{
        type : "map.weather",
        format : function(id) {
            if(id == "서울") {
                return "서울/경기";
            } else if(id == "인천") {
                return "서해5도";
            }
        }
    }],
    style : {
        mapPathBackgroundColor : "white",
        mapPathBorderColor : "#a9a9a9"
    }
});