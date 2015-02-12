var editor;
var currentChartIndex  = 0;
var table_1, table_2;
var chart_1, chart_2, chart_3;
var realtimeIndex = 0;
var realtimeInterval = null;

var charts = [
    { type: "etc", title : "Basic", start : 0 },
    { type: "bar", title : "Bar Chart", start : 2 },
    { type: "column", title : "Column Chart", start : 11 },
    { type: "pie", title : "Pie Chart", start : 22 },
    { type: "donut", title : "Donut Chart", start : 24 },
    { type: "bubble", title : "Bubble Chart", start : 26 },
    { type: "scatter", title : "Scatter Chart", start : 28 },
    { type: "area", title : "Area Chart", start : 32 },
    { type: "radar", title : "Radar Chart", start : 37 },
    { type: "line", title : "Line Chart", start : 39 },
    { type: "gauge", title : "Gauge Chart", start : 49 },
    { type: "stock", title : "Candle Stick Chart", start : 55 },
    { type: "mixed", title : "Combination Chart", start : 60 },
    { type: "realtime", title : "Realtime Chart", start : 64 },
    { type: "dashboard", title : "Dashboard", start : 67 }
];

var code_list = [
    // event handling
    { type: "etc", title : "Set brush events",  description : "", code : "brush_event.js" },
    { type: "etc", title : "Update axis data",  description : "", code : "brush_axis_value.js" },

    // bar
    { type: "bar", title : "Basic Bar", description : "", code : "bar.js" },
    { type: "bar", title : "Stack Bar", description : "", code : "stack_bar.js" },
    { type: "bar", title : "Active Stack Bar", description : "", code : "active_stack_bar.js" },
    { type: "bar", title : "Full Stack Bar", description : "", code : "fullstackbar.js" },
    { type: "bar", title : "Inner Bar", description : "", code : "inner_bar.js" },
    { type: "bar", title : "Overlap Bar", description : "", code : "overlap_bar.js" },
    { type: "bar", title : "Active Bar", description : "", code : "active_bar.js" },
    { type: "bar", title : "Mini Bar", description : "", code : "mini_bar.js" },
    { type: "bar", title : "Range Bar", description : "", code : "rangebar.js" },

    // column
    { type: "column", title : "Basic Column", description : "", code : "column.js" },
    { type: "column", title : "Stack Column", description : "", code : "stack_column.js" },
    { type: "column", title : "Active Stack Column", description : "", code : "active_stack_column.js" },
    { type: "column", title : "Full Stack Column", description : "", code : "fullstack.js" },
    { type: "column", title : "Inner Column", description : "", code : "inner_column.js" },
    { type: "column", title : "Overlap Column", description : "", code : "overlap_column.js" },
    { type: "column", title : "Active Column", description : "", code : "active_column.js" },
    { type: "column", title : "Mini Column", description : "", code : "mini_column.js" },
    { type: "column", title : "Range Column", description : "", code : "rangecolumn.js" },
    { type: "column", title : "Equalizer", description : "", code : "equalizer.js" },
    { type: "column", title : "Waterfall", description : "", code : "waterfall.js" },

    // pie
    { type: "pie", title : "Pie", description : "", code : "pie.js" },
    { type: "pie", title : "Overlap Pie", description : "", code : "mini_pie.js" },

    // donut
    { type: "donut", title : "Donut", description : "", code : "donut.js" },
    { type: "donut", title : "Overlap Donut", description : "", code : "mini_donut.js" },

    // bubble
    { type: "bubble", title : "Basic Bubble", description : "", code : "bubble.js" },
    { type: "bubble", title : "Range Bubble", description : "", code : "range_bubble.js" },

    // scatter
    { type: "scatter", title : "Basic Scatter", description : "", code : "scatter.js" },
    { type: "scatter", title : "Range Scatter", description : "", code : "range_scatter_cross.js" },
    { type: "scatter", title : "Stack Scatter", description : "", code : "stack_scatter.js" },
    { type: "scatter", title : "Scatter Path", description : "", code : "scatterpath.js" },

    //area
    { type: "area", title : "Basic Area", description : "", code : "area.js" },
    { type: "area", title : "Stack Area", description : "", code : "stack_area.js" },
    { type: "area", title : "Stack Curve Area", description : "", code : "stack_curve_area.js" },
    { type: "area", title : "Stack Step Area", description : "", code : "stack_step_area.js" },
    { type: "area", title : "Split Area", description : "", code : "split_area.js" },

    // radar
    { type: "radar", title : "Basic Radar", description : "", code : "radar.js" },
    { type: "radar", title : "Circle Radar", description : "", code : "circle_radar.js" },

    // line
    { type: "line", title : "Basic Line", description : "", code : "line.js" },
    { type: "line", title : "Curve Line", description : "", code : "curve_line.js" },
    { type: "line", title : "Step Line", description : "", code : "step_line.js" },
    { type: "line", title : "Active Line", description : "", code : "active_line.js" },
    { type: "line", title : "Mini Line", description : "", code : "mini_line.js", hide : true },
    { type: "line", title : "Range Line", description : "", code : "range_line.js" },
    { type: "line", title : "Stack Line", description : "", code : "stack_line.js" },
    { type: "line", title : "Multi Line", description : "", code : "line2.js" },
    { type: "line", title : "Split Line", description : "", code : "split_line.js" },

    // gauge
    { type: "gauge", title : "Basic Gauge", description : "", code : "gauge.js", hide : true },
    { type: "gauge", title : "Circle Gauge", description : "", code : "circle_gauge.js" },
    { type: "gauge", title : "Fill Gauge", description : "", code : "fill_gauge.js", hide : true },
    { type: "gauge", title : "Full Gauge", description : "", code : "full_gauge.js" },
    { type: "gauge", title : "Stack Gauge", description : "", code : "stack_gauge.js", hide : true },
    { type: "gauge", title : "Bar Gauge", description : "", code : "bar_gauge.js" },
    { type: "gauge", title : "Fill Custom Gauge", description : "", code : "fill_custom_gauge.js", hide : true },

    // candle stick
    { type: "stock", title : "Candle Stick", description : "", code : "candlestick.js" },
    { type: "stock", title : "Candle Stick with scroll", description : "", code : "candlestick_scroll.js" },
    { type: "stock", title : "Candle Stick with zoom", description : "", code : "candlestick_zoom.js" },
    { type: "stock", title : "OHLC", description : "", code : "ohlc.js" },

    // combination chart
    { type: "mixed", title : "Basic Combination",  description : "", code : "mixed1.js", hide : true },
    { type: "mixed", title : "Multi Axis", description : "", code : "mixed2_multi_axis.js" },
    { type: "mixed", title : "Compare Data", description : "", code : "bar_compare_layout.js" },
    { type: "mixed", title : "Mixed daily and intra-day", description : "", code : "mixed4_linebar.js" },
    { type: "mixed", title : "Sales Comparison", description : "", code : "mixed5.js" },

    // realtime chart
    { type: "realtime", title : "Realtime Line",  description : "", code : "realtime_line.js" },
    { type: "realtime", title : "Realtime Area",  description : "", code : "realtime_area.js" },
    { type: "realtime", title : "Realtime Complex Line",  description : "", code : "realtime_line_complex.js" },

    // dashboard
    { type: "dashboard", title : "Stock Dashboard", description : "", code : "mixed3_axis.js" },
    { type: "dashboard", title : "Candle Stick Dashboard", description : "", code : "mixed3_axis_2.js" },
    { type: "dashboard", title : "Multi Brushes", description : "", code : "dashboard.js", hide : true },
    { type: "dashboard", title : "Beautiful Dashboard", description : "", code : "dashboard2.js" },
    { type: "dashboard", title : "Company Performance", description : "", code : "dashboard3.js" },
    { type: "dashboard", title : "Sales Overview", description : "", code : "dashboard4.js" },
    { type: "dashboard", title : "Server Topologies", description : "", code : "topology.js", hide : true }
];

function getTodayData() {
    var start = new Date(2014, 10, 7),
        end = time.add(start, time.hours, 23);

    var data = [],
        value = 240;

    for(var i = 0; i < 60 * 23; i++) {
        if(value < 60 * 8) {
            value += 1;
        }

        data.push({ time: time.add(start, time.minutes, i), value: value })
    }

    return {
        start: start,
        end: end,
        data: data
    };
}

function getRealtimeData(min) {
    var start = time.add(new Date(), time.minutes, -5),
        data = [];

    for(var i = 0; i < min * 60; i++) {
        data.push(getRealtimeRowData(time.add(start, time.seconds, i + 1)));

        realtimeIndex++;
    }

    return data;
}

function runRealtimeData(realtime) {
    if(realtimeInterval != null) {
        clearInterval(realtimeInterval);
    }

    realtimeInterval = setInterval(function() {
        realtime.append(getRealtimeRowData(new Date()));

        realtimeIndex++;
    }, 1000);
}

function changeTheme(theme) {
    var chart = jui.get("chart.builder").pop();

    if(typeof(chart.options.theme) != "object") {
        chart[chart.length - 1].setTheme(theme);
    }

    if(table_2 != null) {
        createTableStyle();
    }
}

function createTable() {
    if(jui.include("util.base").browser.msie) return;

    var chart = window.currentChart;
    var data = chart.get("axis", 0).data;
    var obj = data[0];

    var fields = [];
    for(var key in obj) {
        if (typeof obj[key] == 'function') continue;
        fields.push(key);
    }

    var $head = $('#table_1 thead tr');
    // create thead
    $head.empty();

    for(var i = 0; i < fields.length; i++) {
        $head.append("<th>" + fields[i] + "</th>");
    }

    // create template
    var list = [];
    for(var i = 0; i < fields.length; i++) {
        list.push("<td><!= " + fields[i] + " !></td>");
    }

    var tpl = ["<tr>", list.join("") ,"</tr>"].join("");

    table_1 = jui.create("uix.table", "#table_1", {
        fields: fields,
        data: data,
        editRow: true,
        resize: true,
        tpl: {
            row: tpl
        }
    });

    table_1.resize();

    window.currentChart.bindUI(0, table_1);
}

function createTableStyle() {
    if(jui.include("util.base").browser.msie) return;

    var themes = window.currentChart.theme();

    table_2 = jui.create("uix.table", "#table_2", {
        fields: [ "key", "value" ],
        editRow: [ 1 ],
        resize: true,
        event: {
            editend: function(row, e) {
                var chart = window.currentChart,
                    theme = chart.theme(),
                    data = row.data;

                if(data.key == "colors") {
                    theme[data.key] = data.value.split("|");
                } else {
                    theme[data.key] = data.value;
                }

                chart.setTheme(theme);
            }
        },
        tpl: {
            row: "<tr><td><!= key !></td><td><!= value !></td></tr>"
        }
    });

    // 테이블 초기화
    table_2.reset();

    for(var key in themes) {
        if(key == "colors") {
            table_2.append({ key: key, value: themes[key].join("|") });
        } else {
            table_2.append({ key: key, value: themes[key] });
        }
    }
}

function createTab() {
    if(jui.include("util.base").browser.msie) return;

    tab_1 = jui.create("uix.tab", "#tab_1", {
        event: {
            change: function(data) {
                if(data.index == 1) {
                    createTable();
                } else if(data.index == 2) {
                    createTableStyle();
                }
            }
        },
        target: "#tab_contents_1",
        index: 0
    });
}

function resetChart() {
    var charts = jui.getAll();

    for(var i = 0; i < charts.length; i++) {
        if(charts[i].type == "chartx.realtime") {
            var list = charts[i];

            for(var j = 0; j < list.length; j++) {
                list[j].stop();
            }

            realtimeIndex = 0;
        }
    }

    for(var i = 0; i < charts.length; i++) {
        if(charts[i].type == "chart.builder" || charts[i].type == "chartx.realtime") {
            jui.remove(i);
        }
    }
}

function modal_show() {
    var padding = 10;

    $("#modal_1").css({
        position : 'fixed',
        'width' : $(window).width() - padding*2,
        'height' : $(window).height() - padding*2,
        left : padding,
        top : padding
    }).show().appendTo("body");

    $("#modal_1").find(".close").on("click", function() {
        $('#modal_1').hide();

        return false;
    });

    $(window).resize(function ChartResize() {
        var padding = 10;

        $("#modal_1").css({
            position : 'fixed',
            'width' : $(window).width() - padding*2,
            'height' : $(window).height() - padding*2,
            left : padding,
            top : padding
        });
    });
}

function loadChartList() {
    var $menu = $("<div />").addClass("vmenu vmenu-rect");

    for(var  i = 0; i < charts.length; i++) {
        var chart = charts[i];
        var $el = $("<a />").data('start', chart.start).addClass('chart-' + chart.type).on('click', function() {
            var start = $(this).data('start');

            $("[data-index=" + start + "]").click();

        });

        $el.append(chart.title);
        $menu.append($el);

        var $submenu = $("<ul />").addClass("submenu");

        for (var index = chart.start; index < code_list.length; index++) {
            var code = code_list[index];

            if (chart.type != code.type) {
                break;
            }

            var $a = $("<a />").data({
                'index': index,
                type : code.type,
                fullscreen : code.fullscreen
            }).attr({
                'data-index' :  index,
                id : 'chart-list-' + index
            }).html(code.title).on('click', function(e) {
                e.preventDefault();

                var index = $(this).data('index');
                var type = $(this).data('type');
                var fullscreen = $(this).data('fullscreen');
                currentChartIndex = index;

                viewCodeEditor();

                $(".vmenu .active").removeClass("active");

                $(this).parent().addClass('active');
                $(".vmenu .chart-" + type).addClass('active');

                if (fullscreen) {
                    $(".chart_view").addClass('fullscreen').css({left : '255px' });
                }

                return false;
            })

            if(!code.hide) {
                $c = $("<li />").html($a);
                $submenu.append($c);
            }
        }

        $menu.append($submenu);
    }

    $(".chart_list").html($menu);
}

function viewCodeEditor() {
    var code = code_list[currentChartIndex];

    if ($("#modal_1").css('display') == 'none') {
        modal_show();
    }

    if (!editor) {
        editor = CodeMirror.fromTextArea($("#chart-code-text")[0], {
            mode: "javascript",
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true,
            theme : 'neo'
        });

        editor.on('change', function(cm) {
            var code = code_list[currentChartIndex].code;

            try {
                if(code == "bar_compare.js") {
                    $("#chart-content").html($("#tpl_compare").html());
                } else {
                    $("#chart-content").empty();
                }

                resetChart();
                $.globalEval(cm.getValue());

                var chart = jui.get("chart.builder").pop();
                window.currentChart = chart[chart.length -1];

                changeTheme($("select").find("option:selected").val());
            } catch(e) {
                console.log(e);
            }
        });
    }

    $.ajax({
        url : '../res/doc/chart/json/' + code.code,
        dataType : 'text',
        success : function (data) {
            if(code.code == "bar_compare.js") {
                editor.setValue(data);
            } else {
                if (data.indexOf("#chart-content") > -1) {
                    editor.setValue(data);
                } else if (data.indexOf("#chart") > -1) {
                    editor.setValue(data.replace("#chart", "#chart-content"));
                }
            }

            // 현재 데이터 적용
            createTable();

            // 현재 테마 적용
            changeTheme($("select").find("option:selected").val());

            // 리얼타임일 경우, 테마와 데이터 탭 제거
            if(code.type == "realtime") {
                $("#tab_1").find("li:not(:first-child)").hide();
            } else {
                $("#tab_1").find("li").show();

                if(realtimeInterval != null) {
                    clearInterval(realtimeInterval);
                }
            }
        },
        error : function(data, error) {
            console.log(error);
        }
    });
}

function setFunctions() {
    var $el = $(".btn-fullscreen");

    $el.on('click', function() {
        var $el = $(".chart_view");

        if ($el.hasClass('fullscreen')) {
            $el.removeClass('fullscreen').animate({left : '710px' }, viewCodeEditor);
        } else {
            $el.addClass('fullscreen').animate({left : '255px' }, viewCodeEditor);
        }
    });

    $(".btn-style").on("click", function() {
        if(table_2 != null) {
            var rows = table_2.list(),
                data = [];

            for(var i = 0; i < rows.length; i++) {
                var val = rows[i].data.value;

                if(typeof(val) == "string") {
                    data.push(rows[i].data.key + " : \"" + val + "\"");
                } else {
                    data.push(rows[i].data.key + " : " + val);
                }
            }

            table_2.downloadCsv("jui_style");
            console.log(data.join("\n"));
        } else {
            alert("Style data is not loaded.");
        }
    });

    $(".btn-image").on("click", function() {
        var chart = window.currentChart;
        chart.svg.downloadImage("jui_image");
    });

    $(".btn-api").on("click", function() {
        location.hash = "#script/chart";
        $('#modal_1').hide();

        setTimeout(function() {
            $("li[data-subkey=_api][data-key=chart]").trigger("click");
        }, 500);
    });
}

function createRealtime() {
    var chart = jui.include("chartx.realtime"),
        time = jui.include("util.time"),
        index = 0;

    chart_1 = chart(".main-chart-3 .chart", {
        axis : {
            data : getRealtimeData(5),
            xline : true,
            yline : false
        },
        brush : {
            type : "line",
            target : [ "value" ],
            colors : [ 2 ],
            animate : true
        }
    });

    function getRealtimeData(min) {
        var start = time.add(new Date(), time.minutes, -5),
            data = [];

        for(var i = 0; i < min * 60; i++) {
            data.push(getRealtimeRowData(time.add(start, time.seconds, i + 1)));
            index++;
        }

        return data;
    }

    function getRealtimeRowData(time) {
        var sin = Math.sin(index / 10);

        return {
            time : time,
            value : sin * 2.5
        }
    }

    chart_interval = setInterval(function() {
        chart_1.append(getRealtimeRowData(new Date()));
        index++;
    }, 1000);
}

function createDashboard() {
    var chart = jui.include("chart.builder");

    var dataSource = [
        { date : "J", profit1 : 48000, profit2 : 110 },
        { date : "F", profit1 : 31000, profit2 : 58 },
        { date : "M", profit1 : 62000, profit2 : 104 },
        { date : "A", profit1 : 40500, profit2 : 357 },
        { date : "M", profit1 : 44550, profit2 : 294 },
        { date : "J", profit1 : 29500, profit2 : 367 },
        { date : "J", profit1 : 46000, profit2 : 285 },
        { date : "A", profit1 : 70050, profit2 : 340 },
        { date : "S", profit1 : 39500, profit2 : 397 },
        { date : "O", profit1 : 45800, profit2 : 425 },
        { date : "N", profit1 : 29000, profit2 : 254 },
        { date : "D", profit1 : 15000, profit2 : 187 }
    ];

    var dataSource2 = [
        { unit1 : 16, unit2 : 21, unit3 : 15, unit4 : 18, unit5 : 20 }
    ]

    var dataSource3 = [
        { date: "Jan", sales1: 31000, sales2: 11500, sales3: 21500 },
        { date: "Feb", sales1: 39500, sales2: 36750, sales3: 29550 },
        { date: "Mar", sales1: 24300, sales2: 7000, sales3: 14500 },
        { date: "Apr", sales1: 36000, sales2: 44500, sales3: 16500 },
        { date: "May", sales1: 38000, sales2: 11500, sales3: 28450 },
        { date: "Jun", sales1: 45500, sales2: 28450, sales3: 35600 },
        { date: "Jul", sales1: 28500, sales2: 42900, sales3: 21550 },
        { date: "Aug", sales1: 38000, sales2: 26750, sales3: 18750 },
        { date: "Sep", sales1: 21000, sales2: 13050, sales3: 11600 },
        { date: "Oct", sales1: 17000, sales2: 32600, sales3: 7500 },
        { date: "Nov", sales1: 24000, sales2: 12500, sales3: 14750 },
        { date: "Dec", sales1: 17500, sales2: 14300, sales3: 16000 }
    ];

    chart_2 = chart(".main-chart-4 .chart", {
        padding : {
            left : 60
        },
        axis : [{
            data : dataSource,
            x : {
                type : "block",
                domain : "date"
            },
            y : {
                type : "range",
                domain : [ 0, 100000 ],
                step : 4,
                line : true
            },
            area : {
                width : "65%",
                height : "40%"
            }
        }, {
            data : dataSource,
            x : {
                extend : 0,
                hide : true
            },
            y : {
                extend : 0,
                domain : [ 0, 500 ],
                orient : "right"
            },
            area : {
                width : "65%",
                height : "40%"
            }
        }, {
            data : dataSource2,
            area : {
                x : "70%",
                width : "40%",
                height : "40%"
            }
        }, {
            data : dataSource3,
            x : {
                extend : 0
            },
            y : {
                extend : 0,
                domain : [ 0, 50000 ]
            },
            area : {
                height : "40%",
                y : "60%"
            }
        }],
        brush : [{
            type : "column",
            target : "profit1",
            axis : 0,
            colors : [ 0 ],
            animate : true
        }, {
            type : "line",
            target : "profit2",
            axis : 1,
            colors : [ 2 ],
            animate : true
        }, {
            type : "scatter",
            target : "profit2",
            size : 10,
            axis : 1,
            colors : [ 2 ]
        }, {
            type : "pie",
            showText : true,
            format : function(t, v) {
                return v;
            },
            axis : 2
        }, {
            type : "column",
            target : [ "sales1", "sales2", "sales3" ],
            outerPadding : 10,
            innerPadding : 3,
            axis : 3,
            animate : true
        }],
        widget : [{
            type : "title",
            text : "Sales Overview",
            align : "start"
        }, {
            type : "title",
            text : "Net Profit",
            align : "start",
            orient : "center",
            dx : -55,
            dy : -125
        }, {
            type : "title",
            text : "Sales by Employee",
            align : "start",
            orient : "center",
            dx : -80,
            dy : 110
        }, {
            type : "tooltip",
            format : function(k, v) {
                return v;
            },
            brush : [ 0, 2, 3, 4 ]
        }],
        style : {
            backgroundColor : "transparent",
            scatterBorderWidth : 1.5,
            titleFontSize : "11px",
            titleFontWeight : "bold"
        },
        format : function(v) {
            if(typeof(v) == "number") {
                return ((v > 1000) ? Math.floor(v / 1000) : v) + "k";
            }

            return v;
        }
    });
}

function createTopology() {
    var chart = jui.include("chart.builder");

    var data = [
        { key: "1000_1", name: "W1", type: "was", outgoing: [ "1000_2" ] },
        { key: "1000_2", name: "W2", type: "was", outgoing: [ "1000_3", "1000_4" ] },
        { key: "1000_3", name: "W3", type: "was", outgoing: [ "1_2_3_4", "1000_2" ] },
        { key: "1000_4", name: "W4", type: "server", outgoing: [ "1_2_3_4" ] },
        { key: "1_2_3_4", name: "Oracle", type: "db", outgoing: [] }
    ];

    var edgeData = [
        { key: "1000_1:1000_2", count: 3, time: 1000 },
        { key: "1000_2:1000_3", count: 3, time: 1000 },
        { key: "1000_2:1000_4", count: 3, time: 1000 },
        { key: "1000_3:1_2_3_4", count: 3, time: 1000 },
        { key: "1000_3:1000_2", count: 3, time: 1000 },
        { key: "1000_4:1_2_3_4", count: 3, time: 1000 }
    ];

    chart_3 = chart(".main-chart-5 .chart", {
        padding: 5,
        axis: {
            c: {
                type: "topologytable"
            },
            data: data
        },
        brush: {
            type: "topologynode",
            edgeData: edgeData,
            edgeText: function(data, align) {
                var text = data.time + "/" + data.count;

                if(align == "end") {
                    text = text + " →";
                } else {
                    text = "← " + text;
                }

                return text;
            },
            nodeColor: "#729ff1",
            nodeText: function(data) {
                if(data.type == "server") {
                    return "{server}";
                } else if(data.type == "was") {
                    return "{was}";
                } else {
                    return "{db}";
                }
            },
            nodeTitle: function(data) {
                return data.name;
            },
            activeEdge: "1000_2:1000_3"
        },
        widget: {
            type: "topologyctrl"
        }
    });

    // 임시 애니메이션
    $(chart_3.root).css("opacity", 0).animate({
        opacity: 1
    }, 1500);
}

jui.ready([ "util.base" ], function(_) {
    editor = null;

    loadChartList();
    setFunctions();
    createTab();

    // IE일 경우, 탭 제거
    if(_.browser.msie) {
        $("#tab_1").hide();
        $("#table_1").hide();
        $("#table_2").hide();
    }

    $(window).scroll(function() {
       var top = $(window).scrollTop();

        if(chart_1 == null && top > 265) {
            createRealtime();
        }
        if(chart_2 == null && top > 1050) {
            createDashboard();
        }
        if(chart_3 == null && top > 1950) {
            createTopology();
        }
    });
});