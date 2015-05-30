var editor, editor2;
var comments, tab_1;
var currentChartIndex = 0;

var charts = [
    { type: "combo", title : "Combo Box" },
    { type: "table", title : "Table" },
];

var code_list = [
    { type: "combo", title : "Basic", code : "combo_basic" },
    { type: "table", title : "Basic", code : "table_basic" }
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
                href : "#" + code.code,
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
        var index = getIndexByCode(location.hash);
            code = code_list[index];

        currentChartIndex = index;
        viewCodeEditor();

        $(".vmenu .active").removeClass("active");
        $("#chart-list-" + index).parent().addClass("active");
        $(".vmenu .chart-" + code.type).addClass("active");
    });

    // 온-로드 시점에도 발생
    $(window).hashchange();
}

function getIndexByCode(code) {
    if(code == "") return 0;

    for(var i = 0; i < code_list.length; i++) {
        if("#" + code_list[i].code == code) {
            return i;
        }
    }

    return 0;
}

function viewCodeEditor() {
    var code = code_list[currentChartIndex];

    if ($("#modal_1").css("display") == "none") {
        modal_show();
    }

    if(!editor) {
        editor = CodeMirror.fromTextArea($("#chart-code-text")[0], {
            mode: "javascript",
            lineNumbers: true,
            theme : "neo"
        });

        editor.on("change", function(cm) {
            try {
                updateComponent();
            } catch(e) {
                console.log(e);
            }
        });
    }

    if(!editor2) {
        editor2 = CodeMirror.fromTextArea($("#chart-html-text")[0], {
            mode: "htmlmixed",
            lineNumbers: true,
            theme : "neo"
        });

        editor2.on("change", function(cm) {
            try {
                updateComponent();
            } catch(e) {
                console.log(e);
            }
        });
    }

    $.ajax({
        url: "json/" + code.code + ".js",
        dataType: "text",
        success: function(data) {
            tab_1.show(0);
            editor.setValue(data);

            $.ajax({
                url : "html/" + code.code + ".html",
                dataType: "text",
                success: function(data) {
                    tab_1.show(1);
                    editor2.setValue(data);
                },
                error: function(data, error) {
                    console.log(error);
                }
            });
        },
        error: function(data, error) {
            console.log(error);
        }
    });
}

function setFunctions() {
    var $el = $(".btn-fullscreen");

    $el.on('click', function() {
        var $el = $(".chart_view");

        if ($el.hasClass("fullscreen")) {
            $el.removeClass("fullscreen").animate({ left : "50%" }, viewCodeEditor);
        } else {
            $el.addClass("fullscreen").animate({ left : "0%" }, viewCodeEditor);
        }
    });
}

function updateComponent() {
    var code = editor.getValue(),
        html = editor2.getValue();

    $("#chart-content").html(html);
    eval(code);
}

jui.ready([ "util.base", "uix.window" ], function(_, uiWin) {
    editor = null;

    loadChartList();
    setFunctions();

    // 탭 생성
    tab_1 = jui.create("uix.tab", "#tab_1", {
        target: "#tab_contents_1",
        index: 0
    });

    // 댓글 모달 윈도우
    comments = uiWin("#comments", {
        width: "90%",
        height: "90%",
        modal: true
    });

    $("#chart-list-0").click();
});