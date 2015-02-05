var editor;
var currentChartIndex  = 0;
var table_1, table_2;
var realtimeIndex = 0;
var realtimeInterval = null;

var charts = [
    { type : 'etc', title : "Basic", start : 0 },
    { type : 'bar', title : 'Bar Chart', start : 2 },
    { type : 'column', title : 'Column Chart', start : 11 },
    { type : 'pie', title : 'Pie Chart', start : 22 },
    { type : 'donut', title : 'Donut Chart', start : 24 },
    { type : 'bubble', title : 'Bubble Chart', start : 25 },
    { type : 'scatter', title : 'Scatter Chart', start : 27 },
    { type : 'area', title : 'Area Chart', start : 31 },
    { type : 'radar', title : 'Radar Chart', start : 38 },
    { type : 'line', title : 'Line Chart', start : 40 },
    { type : 'gauge', title : 'Gauge Chart', start : 54 },
    { type : 'stock', title : 'Candle Stick Chart', start : 56 },
    { type : 'mixed', title : 'Combination Chart', start : 60 },
    { type : 'realtime', title : 'Realtime Chart', start : 64 },
    { type : 'dashboard', title : "Dashboard", start : 67 }
];

var code_list = [
    // event handling
    { type : 'etc', title : "Set brush events",  description : "", code : "brush_event.js" },
    { type : 'etc', title : "Update axis data",  description : "", code : "brush_axis_value.js" },

    // bar
    { type : 'bar', title : "Basic Bar", description : "", code : "bar.js" },
    { type : 'bar', title : "Stack Bar", description : "", code : "stack_bar.js" },
    { type : 'bar', title : "Active Stack Bar", description : "", code : "active_stack_bar.js" },
    { type : 'bar', title : "Full Stack Bar", description : "", code : "fullstackbar.js" },
    { type : 'bar', title : "Inner Bar", description : "", code : "inner_bar.js" },
    { type : 'bar', title : "Overlap Bar", description : "", code : "overlap_bar.js" },
    { type : 'bar', title : "Active Bar", description : "", code : "active_bar.js" },
    { type : 'bar', title : "Mini Bar", description : "", code : "mini_bar.js" },
    { type : 'bar', title : "Range Bar", description : "", code : "rangebar.js" },

    // column
    { type : 'column', title : "Basic Column", description : "", code : "column.js" },
    { type : 'column', title : "Stack Column", description : "", code : "stack_column.js" },
    { type : 'column', title : "Active Stack Column", description : "", code : "active_stack_column.js" },
    { type : 'column', title : "Full Stack Column", description : "", code : "fullstack.js" },
    { type : 'column', title : "Inner Column", description : "", code : "inner_column.js" },
    { type : 'column', title : "Overlap Column", description : "", code : "overlap_column.js" },
    { type : 'column', title : "Active Column", description : "", code : "active_column.js" },
    { type : 'column', title : "Mini Column", description : "", code : "mini_column.js" },
    { type : 'column', title : "Range Column", description : "", code : "rangecolumn.js" },
    { type : 'column', title : "Equalizer", description : "", code : "equalizer.js" },
    { type : 'column', title : "Waterfall", description : "", code : "waterfall.js" },

    // pie
    { type : 'pie', title : "Pie", description : "", code : "pie.js" },
    { type : 'pie', title : "Mini Pie", description : "", code : "mini_pie.js" },

    // donut
    { type : 'donut', title : "Donut", description : "", code : "donut.js" },

    // bubble
    { type : 'bubble', title : "Basic Bubble", description : "", code : "bubble.js" },
    { type : 'bubble', title : "Range Bubble", description : "", code : "range_bubble.js" },

    // scatter
    { type : 'scatter', title : "Basic Scatter", description : "", code : "scatter.js" },
    { type : 'scatter', title : "Range Scatter", description : "", code : "range_scatter_cross.js" },
    { type : 'scatter', title : "Stack Scatter", description : "", code : "stack_scatter.js" },
    { type : 'scatter', title : "Scatter Path", description : "", code : "scatterpath.js" },

    //area
    { type : 'area', title : "Basic Area", description : "", code : "area.js" },
    { type : 'area', title : "Curve Area", description : "", code : "curve_area.js" },
    { type : 'area', title : "Step Area", description : "", code : "step_area.js" },
    { type : 'area', title : "Stack Area", description : "", code : "stack_area.js" },
    { type : 'area', title : "Stack Curve Area", description : "", code : "stack_curve_area.js" },
    { type : 'area', title : "Stack Step Area", description : "", code : "stack_step_area.js" },
    { type : 'area', title : "Split Area", description : "", code : "split_area.js" },

    // radar
    { type : 'radar', title : "Basic Radar", description : "", code : "radar.js" },
    { type : 'radar', title : "Circle Radar", description : "", code : "circle_radar.js" },

    // line
    { type : 'line', title : "Basic Line", description : "", code : "line.js" },
    { type : 'line', title : "Curve Line", description : "", code : "curve_line.js" },
    { type : 'line', title : "Step Line", description : "", code : "step_line.js" },
    { type : 'line', title : "Active Line", description : "", code : "active_line.js" },
    { type : 'line', title : "Mini Line", description : "", code : "mini_line.js" },
    { type : 'line', title : "Range Line", description : "", code : "range_line.js" },
    { type : 'line', title : "Stack Line", description : "", code : "stack_line.js" },
    { type : 'line', title : "Multi Line", description : "", code : "line2.js" },
    { type : 'line', title : "Split Line", description : "", code : "split_line.js" },

    // gauge
    { type : 'gauge', title : "Basic Gauge", description : "", code : "gauge.js", hide : true },
    { type : 'gauge', title : "Circle Gauge", description : "", code : "circle_gauge.js", hide : true },
    { type : 'gauge', title : "Fill Gauge", description : "", code : "fill_gauge.js", hide : true },
    { type : 'gauge', title : "Full Gauge", description : "", code : "full_gauge.js", hide : true },
    { type : 'gauge', title : "Stack Gauge", description : "", code : "stack_gauge.js", hide : true },
    { type : 'gauge', title : "Bar Gauge", description : "", code : "bar_gauge.js" },
    { type : 'gauge', title : "Fill Custom Gauge", description : "", code : "fill_custom_gauge.js", hide : true },

    // candle stick
    { type : 'stock', title : "Candle Stick", description : "", code : "candlestick.js" },
    { type : 'stock', title : "Candle Stick with scroll", description : "", code : "candlestick_scroll.js" },
    { type : 'stock', title : "Candle Stick with zoom", description : "", code : "candlestick_zoom.js" },
    { type : 'stock', title : "OHLC", description : "", code : "ohlc.js" },

    // combination chart
    { type : 'mixed', title : "Basic Combination",  description : "", code : "mixed1.js" },
    { type : 'mixed', title : "Multi Axis", description : "", code : "mixed2_multi_axis.js" },
    { type : 'mixed', title : "Compare Data", description : "", code : "bar_compare_layout.js" },
    { type : 'mixed', title : "Mixed daily and intra-day", description : "", code : "mixed4_linebar.js" },

    // realtime chart
    { type : 'realtime', title : "Realtime Line",  description : "", code : "realtime_line.js" },
    { type : 'realtime', title : "Realtime Area",  description : "", code : "realtime_area.js" },
    { type : 'realtime', title : "Realtime Complex Line",  description : "", code : "realtime_line_complex.js" },

    // dashboard
    { type : 'dashboard', title : "Stock Chart (Axis group)", description : "", code : "mixed3_axis.js" },
    { type : 'dashboard', title : "Stock Chart with Candle Stick", description : "", code : "mixed3_axis_2.js" },
    { type : 'dashboard', title : "Multi Brushes", description : "", code : "dashboard.js" },
    { type : 'dashboard', title : "Beautiful Dashboard", description : "", code : "dashboard2.js" }
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

jui.ready([ "util.base" ], function(_) {
    var $row = $(".row.gallery");

    for(var i = 0, len = charts.length; i <len; i++ ) {
        var $el = $("<div />").html($("#tpl_col").html());

        if(charts[i].type != "etc") {
            (function (chart) {
                if (chart.type == 'realtime' || chart.type == 'dashboard') {
                    $el.find(".body img").css("width", "428px");
                    $el.addClass('col col-6');
                } else {
                    $el.addClass("col col-3");
                }

                $el.find(".head").html(chart.title);
                $el.find(".body img").attr({
                    'src': '../res/doc/chart/img/' + chart.type + '.svg'
                }).css({
                    'max-width': '100%',
                    'max-height': '200px',
                    'height': '200px'
                }).data('obj', chart).on('click', function (e) {
                    var obj = $(this).data('obj');

                    currentChartIndex = obj.start;
                    viewCodeEditor();

                    // 차트플레이 활성화 메뉴 설정
                    $(".vmenu .active").removeClass("active");
                    var $target = $("a[data-index=" + currentChartIndex + "]");
                    $target.parent().addClass('active');
                    $(".chart_list").scrollTop($target.offset().top - $("body").scrollTop() - 200);
                });
            })(charts[i]);

            $row.append($el);
        }
    }

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
});

// 디스커스 댓글 로드
loadIframe($("#chart").find("iframe"), "chart/disqus.html");