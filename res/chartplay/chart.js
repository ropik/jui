var editor;
var comments;
var currentChartIndex = 0;
var table_1, table_2;
var chart_1, chart_2, chart_3;
var realtimeIndex = 0;
var realtimeInterval = null;

var charts = [
    { type: "etc", title : "Basic" },
    { type: "grid", title : "Grid Style" },
    { type: "map", title : "Map Chart" },
    { type: "3d", title : "3D Chart" },
    { type: "mixed", title : "Combination Chart" },
    { type: "realtime", title : "Realtime Chart" },
    { type: "dashboard", title : "Dashboard" },
    { type: "topology", title : "Topology Map" },
    { type: "bar", title : "Bar Chart" },
    { type: "column", title : "Column Chart" },
    { type: "pie", title : "Pie Chart" },
    { type: "donut", title : "Donut Chart" },
    { type: "bubble", title : "Bubble Chart" },
    { type: "scatter", title : "Scatter Chart" },
    { type: "area", title : "Area Chart" },
    { type: "radar", title : "Radar Chart" },
    { type: "line", title : "Line Chart" },
    { type: "gauge", title : "Gauge Chart" },
    { type: "stock", title : "Candle Stick Chart" }
];

var code_list = [
    // basic
    { type: "etc", title : "Set brush events",  code : "brush_event.js" },
    { type: "etc", title : "Set brush colors",  code : "brush_colors.js" },
    { type: "etc", title : "Set theme styles",  code : "change_theme.js" },
    { type: "etc", title : "Update axis data",  code : "brush_axis_value.js" },
    { type: "etc", title : "Use SVG Icons",  code : "use_svg_icons.js" },

    // grid line style
    { type: "grid", title : "Solid Line", code : "grid_solid.js" },
    { type: "grid", title : "Solid + Gradient", code : "grid_solid_gradient.js" },
    { type: "grid", title : "Solid + Rect", code : "grid_solid_rect.js" },
    { type: "grid", title : "Dashed Line", code : "grid_dashed.js" },
    { type: "grid", title : "Dashed + Gradient", code : "grid_dashed_gradient.js" },
    { type: "grid", title : "Dashed + Rect", code : "grid_dashed_rect.js" },

    // map chart
    { type: "map", title : "Population Maps",  code : "worldmap1.js" },
    { type: "map", title : "Airplane Routes",  code : "worldmap2.js" },

    // 3d chart
    { type: "3d", title : "Basic 3D Bar",  code : "bar3d.js" },
    { type: "3d", title : "Stacked 3D Bar",  code : "stack_bar3d.js" },
    { type: "3d", title : "Full Stacked 3D Bar",  code : "fullstackbar3d.js" },
    { type: "3d", title : "Clustered 3D Bar",  code : "cluster_bar3d.js" },
    { type: "3d", title : "Basic 3D Column",  code : "column3d.js" },
    { type: "3d", title : "Stacked 3D Column",  code : "stack_column3d.js" },
    { type: "3d", title : "Full Stacked 3D Column",  code : "fullstackcolumn3d.js" },
    { type: "3d", title : "Clustered 3D Column",  code : "cluster_column3d.js" },
    { type: "3d", title : "Basic 3D Cylinder",  code : "cylinder3d.js" },
    { type: "3d", title : "Stacked 3D Cylinder",  code : "stack_cylinder3d.js" },
    { type: "3d", title : "Full Stacked 3D Cylinder",  code : "fullstackcylinder3d.js" },
    { type: "3d", title : "Clustered 3D Cylinder",  code : "cluster_cylinder3d.js" },

    // combination chart
    { type: "mixed", title : "Basic Combination",  code : "mixed1.js", hide : true },
    { type: "mixed", title : "Multi Axis", code : "mixed2_multi_axis.js" },
    { type: "mixed", title : "Compare Data", code : "bar_compare_layout.js" },
    { type: "mixed", title : "Mixed daily and intra-day", code : "mixed4_linebar.js" },
    { type: "mixed", title : "Sales Comparison", code : "mixed5.js" },

    // realtime chart
    { type: "realtime", title : "Realtime Line",  code : "realtime_line.js" },
    { type: "realtime", title : "Realtime Area",  code : "realtime_area.js" },
    { type: "realtime", title : "Realtime Complex Line",  code : "realtime_line_complex.js" },

    // dashboard
    { type: "dashboard", title : "Stock Dashboard", code : "mixed3_axis.js" },
    { type: "dashboard", title : "Candle Stick Dashboard", code : "mixed3_axis_2.js" },
    { type: "dashboard", title : "Candle Stick Dashboard (+Scroll)", code : "mixed3_axis_3.js" },
    { type: "dashboard", title : "Multi Brushes", code : "dashboard.js", hide : true },
    { type: "dashboard", title : "Beautiful Dashboard", code : "dashboard2.js" },
    { type: "dashboard", title : "Company Performance", code : "dashboard3.js" },
    { type: "dashboard", title : "Sales Overview", code : "dashboard4.js" },

    // topology map
    { type: "topology", title : "Server Topologies", code : "topology.js" },
    { type: "topology", title : "Server Topologies with image", code : "topology2.js" },
    { type: "topology", title : "Inner Chart Topologies", code : "topology3.js" },

    // bar
    { type: "bar", title : "Basic Bar", code : "bar.js" },
    { type: "bar", title : "Stacked Bar", code : "stack_bar.js", hide : true },
    { type: "bar", title : "Active Stacked Bar", code : "active_stack_bar.js" },
    { type: "bar", title : "Full Stacked Bar", code : "fullstackbar.js" },
    { type: "bar", title : "Inner Bar", code : "inner_bar.js" },
    { type: "bar", title : "Overlap Bar", code : "overlap_bar.js" },
    { type: "bar", title : "Active Bar", code : "active_bar.js" },
    { type: "bar", title : "Mini Bar", code : "mini_bar.js", hide : true },
    { type: "bar", title : "Range Bar", code : "rangebar.js" },

    // column
    { type: "column", title : "Basic Column", code : "column.js" },
    { type: "column", title : "Stacked Column", code : "stack_column.js", hide : true },
    { type: "column", title : "Active Stacked Column", code : "active_stack_column.js" },
    { type: "column", title : "Full Stacked Column", code : "fullstack.js" },
    { type: "column", title : "Inner Column", code : "inner_column.js" },
    { type: "column", title : "Overlap Column", code : "overlap_column.js" },
    { type: "column", title : "Active Column", code : "active_column.js" },
    { type: "column", title : "Mini Column", code : "mini_column.js", hide : true },
    { type: "column", title : "Range Column", code : "rangecolumn.js" },
    { type: "column", title : "Equalizer", code : "equalizer.js" },
    { type: "column", title : "Waterfall", code : "waterfall.js" },
    { type: "column", title : "Image Column", code : "imagecolumn.js" },

    // pie
    { type: "pie", title : "Basic Pie", code : "pie.js" },
    { type: "pie", title : "Active Pie", code : "active_pie.js" },
    { type: "pie", title : "Pie (3D)", code : "3d_pie.js" },
    { type: "pie", title : "Overlap Pie", code : "mini_pie.js" },

    // donut
    { type: "donut", title : "Basic Donut", code : "donut.js" },
    { type: "donut", title : "Active Donut", code : "active_donut.js" },
    { type: "donut", title : "Donut (3D)", code : "3d_donut.js" },
    { type: "donut", title : "Overlap Donut", code : "mini_donut.js" },

    // bubble
    { type: "bubble", title : "Basic Bubble", code : "bubble.js" },
    { type: "bubble", title : "Range Bubble", code : "range_bubble.js" },

    // scatter
    { type: "scatter", title : "Basic Scatter", code : "scatter.js" },
    { type: "scatter", title : "Range Scatter", code : "range_scatter_cross.js" },
    { type: "scatter", title : "Stacked Scatter", code : "stack_scatter.js" },
    { type: "scatter", title : "Scatter Path", code : "scatterpath.js" },

    //area
    { type: "area", title : "Basic Area", code : "area.js" },
    { type: "area", title : "Stacked Area 1", code : "stack_area.js" },
    { type: "area", title : "Stacked Area 2", code : "stack_area2.js" },
    { type: "area", title : "Stacked Curve Area", code : "stack_curve_area.js" },
    { type: "area", title : "Stacked Step Area", code : "stack_step_area.js" },
    { type: "area", title : "Split Area", code : "split_area.js" },
    { type: "area", title : "Reverse Area", code : "reverse_area.js", hide : true },

    // radar
    { type: "radar", title : "Basic Radar", code : "radar.js" },
    { type: "radar", title : "Circle Radar", code : "circle_radar.js" },

    // line
    { type: "line", title : "Basic Line", code : "line.js" },
    { type: "line", title : "Step Line ", code : "step_line.js" },
    { type: "line", title : "Curve Line (+Dotted)", code : "curve_line.js" },
    { type: "line", title : "Active Line", code : "active_line.js" },
    { type: "line", title : "Mini Line", code : "mini_line.js", hide : true },
    { type: "line", title : "Range Line", code : "range_line.js" },
    { type: "line", title : "Stacked Line", code : "stack_line.js" },
    { type: "line", title : "Multi Line", code : "line2.js" },
    { type: "line", title : "Split Line", code : "split_line.js" },

    // gauge
    { type: "gauge", title : "Basic Gauge", code : "gauge.js", hide : true },
    { type: "gauge", title : "Circle Gauge", code : "circle_gauge.js" },
    { type: "gauge", title : "Fill Gauge", code : "fill_gauge.js", hide : true },
    { type: "gauge", title : "Full Gauge", code : "full_gauge.js" },
    { type: "gauge", title : "Stacked Gauge", code : "stack_gauge.js", hide : true },
    { type: "gauge", title : "Bar Gauge", code : "bar_gauge.js" },
    { type: "gauge", title : "Fill Custom Gauge", code : "fill_custom_gauge.js", hide : true },

    // candle stick
    { type: "stock", title : "Candle Stick", code : "candlestick.js" },
    { type: "stock", title : "Candle Stick with scroll", code : "candlestick_scroll.js" },
    { type: "stock", title : "Candle Stick with zoom", code : "candlestick_zoom.js" },
    { type: "stock", title : "OHLC", code : "ohlc.js" }
];

// 시작 위치 설정
for(var i = 0; i < charts.length; i++) {
    var c = charts[i];

    for(var j = 0; j < code_list.length; j++) {
        if(c.type == code_list[j].type && c.start == undefined) {
            c.start = j;
        }
    }
}

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

            var $a = $("<a />").attr({
                id : "chart-list-" + index,
                href : "#" + index,
                "data-type" : code.type
            }).html(code.title).on('click', function(e) {

            });

            if(!code.hide) {
                $c = $("<li />").html($a);
                $submenu.append($c);
            }
        }

        $menu.append($submenu);
    }

    $(".menu").html($menu);

    // 외부 URL 유입으로 인한 해쉬 이벤트 처리
    $(window).hashchange(function() {
        var hash = (location.hash.indexOf("#") != -1) ? location.hash : "#0",
            index = parseInt(hash.substring(1)),
            type = code_list[index].type;

        currentChartIndex = index;
        viewCodeEditor();

        $(".vmenu .active").removeClass("active");
        $("#chart-list-" + index).parent().addClass("active");
        $(".vmenu .chart-" + type).addClass("active");
    });

    // 온-로드 시점에도 발생
    $(window).hashchange();
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
            theme : "neo"
        });

        editor.on("change", function(cm) {
            try {
                $("#chart-content").empty();

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
        url : "json/" + code.code,
        dataType : "text",
        success : function (data) {
            if (data.indexOf("#chart-content") > -1) {
                editor.setValue(data);
            } else if (data.indexOf("#chart") > -1) {
                editor.setValue(data.replace("#chart", "#chart-content"));
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

        if ($el.hasClass("fullscreen")) {
            $el.removeClass("fullscreen").animate({ left : "442px" }, viewCodeEditor);
        } else {
            $el.addClass("fullscreen").animate({ left : "0px" }, viewCodeEditor);
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
}

jui.ready([ "util.base", "uix.window" ], function(_, uiWin) {
    editor = null;

    loadChartList();
    setFunctions();
    createTab();

    // 댓글 모달 윈도우
    comments = uiWin("#comments", {
        width: "90%",
        height: "90%",
        modal: true,
        event: {
            show: function() {
                /*/
                DISQUS.reset({
                    reload: true,
                    config: function () {
                        this.page.identifier = window.location.hash;
                        this.page.url = window.location.href;
                    }
                });
                /**/
            }
        }
    });

    // IE일 경우, 탭 제거
    if(_.browser.msie) {
        $("#tab_1").hide();
        $("#table_1").hide();
        $("#table_2").hide();
    }

    $("#chart-list-0").click();
});