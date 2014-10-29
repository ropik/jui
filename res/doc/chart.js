var colors = {
    "aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff","beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887","cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff","darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f","darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1","darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff","firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff","gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f","honeydew":"#f0fff0","hotpink":"#ff69b4","indianred":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c","lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2","lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de","lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6","magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee","mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5","navajowhite":"#ffdead","navy":"#000080","oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6","palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1","saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4","tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0","violet":"#ee82ee","wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5","yellow":"#ffff00","yellowgreen":"#9acd32"
};

var editor;
var currentChartIndex  = 0;
var table_1, table_2;
var realtimeIndex = 0;
var realtimeInterval = null;

var charts = [
    { type : 'bar', title : 'Bar Chart', start : 0 },
    { type : 'column', title : 'Column Chart', start : 3 },
    { type : 'pie', title : 'Pie Chart', start : 7 },
    { type : 'donut', title : 'Donut Chart', start : 8 },
    { type : 'bubble', title : 'Bubble Chart', start : 9 },
    { type : 'scatter', title : 'Scatter Chart', start : 11 },
    { type : 'area', title : 'Area Chart', start : 15 },
    { type : 'radar', title : 'Radar Chart', start : 21 },
    { type : 'line', title : 'Line Chart', start : 23 },
    { type : 'gauge', title : 'Gauge Chart', start : 30 },
    { type : 'stock', title : 'Candle Stick Chart', start : 37 },
    { type : 'mixed', title : 'Combination Chart', start : 41 },
    { type : 'realtime', title : 'Realtime Chart', start : 43 }

];

var code_list = [

    // bar
    { type : 'bar', title : "Basic Bar", description : "", code : "bar.js" },
    { type : 'bar', title : "Stack Bar", description : "", code : "stack_bar.js" },
    { type : 'bar', title : "Mini Bar", description : "", code : "mini_bar.js" },

    // column
    { type : 'column', title : "Basic Column", description : "", code : "column.js" },
    { type : 'column', title : "Stack Column", description : "", code : "stack_column.js" },
    { type : 'column', title : "Full Stack Column", description : "", code : "fullstack.js" },
    { type : 'column', title : "Equalizer", description : "", code : "equalizer.js" },

    // pie
    { type : 'pie', title : "Pie", description : "", code : "pie.js" },

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


    // radar
    { type : 'radar', title : "Basic Radar", description : "", code : "radar.js" },
    { type : 'radar', title : "Circle Radar", description : "", code : "circle_radar.js" },

    // line
    { type : 'line', title : "Basic Line", description : "", code : "line.js" },
    { type : 'line', title : "Curve Line", description : "", code : "curve_line.js" },
    { type : 'line', title : "Step Line", description : "", code : "step_line.js" },
    { type : 'line', title : "Mini Line", description : "", code : "mini_line.js" },
    { type : 'line', title : "Range Line", description : "", code : "range_line.js" },
    { type : 'line', title : "Stack Line", description : "", code : "stack_line.js" },
    { type : 'line', title : "Multi Line", description : "", code : "line2.js" },

    // gauge
    { type : 'gauge', title : "Basic Gauge", description : "", code : "gauge.js" },
    { type : 'gauge', title : "Circle Gauge", description : "", code : "circle_gauge.js" },
    { type : 'gauge', title : "Fill Gauge", description : "", code : "fill_gauge.js" },
    { type : 'gauge', title : "Full Gauge", description : "", code : "full_gauge.js" },
    { type : 'gauge', title : "Stack Gauge", description : "", code : "stack_gauge.js" },
    { type : 'gauge', title : "Bar Gauge", description : "", code : "bar_gauge.js" },
    { type : 'gauge', title : "Fill Custom Gauge", description : "", code : "fill_custom_gauge.js" },

    // candle stick
    { type : 'stock', title : "Candle Stick", description : "", code : "candlestick.js" },
    { type : 'stock', title : "Candle Stick with scroll", description : "", code : "candlestick_scroll.js" },
    { type : 'stock', title : "Candle Stick with zoom", description : "", code : "candlestick_zoom.js" },
    { type : 'stock', title : "OHLC", description : "", code : "ohlc.js" },

    // combination chart
    { type : 'mixed', title : "Basic Combination",  description : "", code : "mixed1.js" },
    { type : 'mixed', title : "Multi Axis", description : "", code : "mixed2_multi_axis.js" },

    // realtime chart
    { type : 'realtime', title : "Realtime Line",  description : "", code : "realtime_line.js" },
    { type : 'realtime', title : "Realtime Area",  description : "", code : "realtime_area.js" },
    { type : 'realtime', title : "Realtime Complex Line",  description : "", code : "realtime_line_complex.js" }
];

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
        chart.list[chart.list.length - 1].setTheme(theme);
        chart.list[chart.list.length - 1].render(true);
    }

    if(table_2 != null) {
        createTableStyle();
    }
}

function createTable() {
    var chart = window.currentChart;
    var data = chart.data();
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

    window.currentChart.bindUI(table_1);
}

function createTableStyle() {
    var themes = window.currentChart.theme();

    table_2 = jui.create("uix.table", "#table_2", {
        fields: [ "key", "value" ],
        editRow: [ 1 ],
        resize: true,
        event: {
            editend: function(data, e) {
                var chart = window.currentChart;

                if(data.key == "colors") {
                    chart.setTheme(data.key, data.value.split("|"));
                } else {
                    chart.setTheme(data.key, data.value);
                }

                chart.render(true);
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

function resetChart() {
    var charts = jui.getAll();

    for(var i = 0; i < charts.length; i++) {
        if(charts[i].type == "chartx.realtime") {
            var list = charts[i].list;

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

function checkColor(color) {
    if (typeof colors[color.toLowerCase()] != 'undefined')
        return colors[color.toLowerCase()];

    if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color)) {
        return color;
    }

    return null;
}

function createRangeSlider() {
    $("input[type=range]").rangeslider('destroy');
    $("input[type=range]").rangeslider().off().on('change', function(e) {
        var value = $(this).val();

        if (window.token) {
            editor.replaceRange(value + "", {
                line : editor.getCursor().line,
                ch : window.token.start
            },  {
                line : editor.getCursor().line,
                ch : window.token.start + value.length
            })

            $(".EditorWidget").hide();
        }
    });
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

    $("#modal_1").find(".close").on("click", function() {
        $('#modal_1').hide();

        return false;
    });
}

function loadChartList() {
    var $menu = $("<div class='vmenu' />");

    for(var  i = 0; i < charts.length; i++) {
        var chart = charts[i];
        var $el = $("<a />").data('start', chart.start).addClass('chart-' + chart.type).on('click', function() {
            var start = $(this).data('start');

            $("[data-index=" + start + "]").click();

        });
        $el.append(chart.title)

        var $icon = $("<i class='icon-gear icon-edge' />");
        //$el.append($icon)

        $menu.append($el);

        var $submenu = $("<ul class='submenu' />");

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

            $c = $("<li />").html($a);
            $submenu.append($c);

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

        editor.on('change', function(cm, change) {
            try {
                $("#chart-content").empty();

                resetChart();
                $.globalEval(cm.getValue());
                changeTheme($("select").find("option:selected").val());

                var chart = jui.get("chart.builder").pop();
                window.currentChart = chart.list[chart.list.length -1];
            } catch(e) {
                console.log(e);
            }
        })

        editor.on('cursorActivity', function(cm) {
            var pos = cm.getCursor();

            var token = editor.getTokenAt(editor.getCursor());

            if (token.type == 'number') {
                // show number slider

                var sub = editor.getRange({
                    line : editor.getCursor().line,
                    ch : token.start-1
                }, {
                    line : editor.getCursor().line,
                    ch : token.end
                })

                if (sub.indexOf("-") == 0) {
                    token.string = sub;
                    token.start--;
                }

                $("#color_picker").hide();
                $("#range_slider").show();

                var value = parseFloat(token.string);
                $("input[type=range]").val(value).attr({
                    min : value - 100,
                    max : value + 100
                });

                $(".min_value").html(value-100);
                $(".max_value").html(value+100);

                createRangeSlider();

                cm.addWidget({line : pos.line, ch : token.start - 10}, $("#range_slider")[0], true);
                window.token = token;
                return;
            } else if (token.type == 'string') {
                var color = checkColor(token.string.replace(/(\'|\")/g, ""));
                if (color) {
                    // show color picker
                    $("#range_slider").hide();
                    $("#color_picker").show();
                    $("#picker").colpickSetColor(color.replace("#", ""), true);

                    var count = cm.lineCount();

                    if (pos.line > count) {
                        cm.addWidget({
                            line : count,
                            ch : pos.ch
                        }, $("#color_picker")[0], true);
                    } else {
                        cm.addWidget(pos, $("#color_picker")[0], true);
                    }


                    window.token = token;

                    return ;
                }
            }

            $(".EditorWidget").hide();
            window.token = null;
        });
    }

    $.ajax({
        url : 'chart/json/' + code.code,
        dataType : 'text',
        success : function (data) {
            if (data.indexOf("#chart-content") > -1) {
                editor.setValue(data);
            } else if (data.indexOf("#chart") > -1) {
                editor.setValue(data.replace("#chart", "#chart-content"));
            }

            if(tab_1.activeIndex() == 1) { // 활성화 탭이 테이블일 경우...
                createTable();
            } else if(tab_1.activeIndex() == 2) {
                //createTableStyle();
            }

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
}

$(function() {
    var $row = $(".row.gallery"),
        $dom = $("#tpl_col").html();

    for(var i = 0, len = charts.length; i <len; i++ ) {
        var $el = $($dom);

        (function(chart) {
            if (chart.type == 'realtime') {
                $el.removeClass("col-3").addClass('col-6');
            }

            $el.find(".head").html(chart.title);
            $el.find(".body img").attr({
                'src': 'chart/img/' + chart.type + '.svg'
            }).css({
                'max-width': '100%',
                height: '200px'
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

    editor = null;

    $("#picker").colpick({
        flat: true,
        layout : 'hex',
        submit : 0,
        onChange : function(hbs, hex, rgb, el, bySetColor) {
            if (!bySetColor) {
                if (window.token) {
                    editor.replaceRange('"#' + hex + '"', {
                        line : editor.getCursor().line,
                        ch : window.token.start
                    },  {
                        line : editor.getCursor().line,
                        ch : window.token.end
                    })
                }
            }
        }
    })

    createRangeSlider();
    loadChartList();
    setFunctions();
})

jui.ready(function(ui, uix, _) {
    tab_1 = uix.tab("#tab_1", {
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
});

// 디스커스 댓글 로드
loadIframe($("#chart").find("iframe"), "chart/disqus.html");