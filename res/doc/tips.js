jui.ready(function(ui, uix, _) {
    btn_1 = ui.button("#btn_1", {
        type: "radio",
        event: {
            change: function(data, e) {
                alert(data.text);
            }
        }
    });

    btn_2 = ui.button("#btn_2", {
        type: "check",
        event: {
            change: function(data, e) {
                var words = [];

                for(var i = 0; i < data.length; i++) {
                    if(data[i] != null) {
                        words.push(data[i].text);
                    }
                }

                alert(words.join(", "));
            }
        }
    });

    paging_1 = ui.paging("#paging_1", {
        count: 1000,
        pageCount: 10,
        screenCount: 9,
        event: {
            page: function(pNo) {
                alert(pNo);
            }
        }
    });

    paging_2 = ui.paging("#paging_2", {
        pageCount: 100,
        screenCount: 9,
        event: {
            page: function(pNo) {
                paging_2_xtable.page(pNo);
            }
        }
    });

    paging_2_xtable = uix.xtable("#paging_2_xtable", {
        fields: [ "name", "age", "location" ],
        resize: true,
        buffer: "s-page", // scroll, page, s-page
        bufferCount: 100,
        event: {
            sortend: function(data, e) {
                paging_2.first();
            }
        },
        animate: true
    });

    dd_1 = ui.dropdown("#dd_1", {
        event: {
            change: function(data, e) {
                alert(data.text);
            },
            hide: function() {
                $(".btn-group").removeClass("active");
            }
        }
    });

    $(".dd-1").find(".btn-group").on("click", function(e) {
        var offset = $(this).offset();
        dd_1.show(offset.left, offset.top + 33);

        $(".btn-group").removeClass("active");
        $(this).addClass("active");
    });

    dd_2 = ui.dropdown("#dd_2", {
        keydown: true,
        event: {
            change: function(data, e) {
                alert(data.text);
            },
            hide: function() {
                $(".dropdown-toggle").removeClass("active");
            }
        }
    });

    $(".dd-2").find(".btn-group").on("click", function(e) {
        var offset = $(this).offset();
        dd_2.show(offset.left, offset.top + 33);

        $(".dropdown-toggle").removeClass("active");
        $(this).find(".dropdown-toggle").addClass("active");
    });

    var ac_words = [
        "BASIC",
        "JavaScript",
        "Python",
        "자바의 정석",
        "열혈강의 C++"
    ];

    ac_1 = uix.autocomplete("#ac_1", {
        words: ac_words,
        event: {
            change: function(text) {
                alert(text);
            }
        }
    });

    ac_2 = uix.autocomplete("#ac_2", {
        target: "input[type=text]",
        words: ac_words,
        event: {
            change: function(text) {
                alert(text);
            }
        }
    });

    tab_1 = uix.tab("#tab_1", {
        event: {
            change: function(data, e) {
                $(".tab-contents").hide();
                $("[data-index=" + data.index + "]").show();
            },
            changeMenu: function(data, e) {
                alert(data.text);
            }
        }
    });

    tab_2 = uix.tab("#tab_2", {
        event: {
            change: function(data) {
                alert(data.text);
            }
        }
    });

    modal = ui.modal("#modal", {
        color: "black"
    });

    notify = ui.notify("body", {
        position: "top-right",
        timeout: -1,
        padding: 20,
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    var table_data = [
        { name: "Hong", age: "20", location: "Ilsan" },
        { name: "Jung", age: "30", location: "Seoul" },
        { name: "Park", age: "10", location: "Dangjin" }
    ];

    var table_data_big = [
        { name: "Hong", age: "20", location: "Ilsan" },
        { name: "Jung", age: "30", location: "Seoul" },
        { name: "Park", age: "15", location: "Yeosu" },
        { name: "Kang", age: "32", location: "Seoul" },
        { name: "Song", age: "12", location: "Gwangju" },
        { name: "Yoon", age: "22", location: "Damyang" },
        { name: "Kim", age: "33", location: "Busan" },
        { name: "Hwang", age: "21", location: "Seoul" }
    ];

    table_1 = uix.table("#table_1", {
        rows: _.clone(table_data),
        animate: true
    });

    table_2 = uix.table("#table_2", {
        rows: _.clone(table_data_big),
        expand: "auto",
        animate: true,
        event: {
            expand: function(row) {
                $(row.list[0]).html("-");
            },
            expandend: function(row) {
                $(row.list[0]).html("+");
            }
        }
    });

    table_3 = uix.table("#table_3", {
        rows: _.clone(table_data_big),
        scroll: true,
        scrollHeight: 150,
        animate: true
    });

    table_4 = uix.table("#table_4", {
        rows: _.clone(table_data_big),
        resize: true,
        event: {
            rowmenu: function(row, e) {
                this.select(row.index);

                table_4_dd.move(e.pageX, e.pageY);
                table_4_dd.show();
            }
        },
        animate: true
    });

    table_4_dd = ui.dropdown("#table_4_dd", {
        event: {
            change: function(data, e) {
                alert(data.text);
            }
        }
    });

    table_5 = uix.table("#table_5", {
        fields: [ "name", "age", "location" ],
        rows: _.clone(table_data),
        resize: true,
        sort: [ 0, 1, 2 ],
        animate: true
    });

    table_6 = uix.table("#table_6", {
        fields: [ null, "name", "age", "location" ],
        rows: _.clone(table_data),
        editRow: true,
        resize: true,
        sort: true,
        event: {
            editstart: function(row, e) {
                console.log(row);
            },
            editend: function(data) {
                for(var key in data) {
                    if(key == "age" && isNaN(data[key])) {
                        alert("나이는 숫자만 입력할 수 있습니다.");
                        return false;
                    }
                }
            }
        },
        animate: true
    });

    table_7 = uix.table("#table_7", {
        fields: [ null, "name", "age", "location" ],
        rows: _.clone(table_data_big),
        scroll: true,
        resize: true,
        animate: true
    });

    table_8 = uix.table("#table_8", {
        fields: [ null, "name", "age", "location" ],
        rows: _.clone(table_data_big),
        scroll: true,
        resize: true,
        animate: true
    });

    table_9 = uix.table("#table_9", {
        fields: [ "name", "age", "location" ],
        rows: table_data_big,
        colshow: true,
        resize: true,
        event: {
            colmenu: function(column, e) {
                this.showColumnMenu(e.pageX - 25);
            }
        },
        animate: true
    });

    table_tree_1 = uix.table("#table_tree_1", {
        rows: _.clone(table_data_big),
        scroll: true,
        resize: true,
        event: {
            select: function(row) {
                alert("index(" + row.index + "), name(" + row.data.name + ")");
            }
        },
        animate: true
    });

    table_tree_2 = uix.table("#table_tree_2", {
        rows: table_data_big,
        resize: true,
        event: {
            select: function(row) {
                alert("index(" + row.index + "), name(" + row.data.name + ")");
            }
        },
        animate: true
    });

    if(table_tree_2 != null) {
        table_tree_2.append("1", {name: "Kang", age: "21"});
        table_tree_2.append("1", {name: "Jung", age: "33"});
        table_tree_2.insert("1.2", {name: "Park", age: "45"});
        table_tree_2.insert("1.3", {name: "Hwang", age: "12"});
        table_tree_2.insert("1.2.0", {name: "Roo", age: "32"});
        table_tree_2.insert("1.2.1", {name: "Jung", age: "14"});
        table_tree_2.insert("3.0", {name: "Yoon", age: "17"});
        table_tree_2.insert("3.1", {name: "Kim", age: "21"});
        table_tree_2.insert("3.2", {name: "Kim", age: "28"});

        table_tree_2.resize();
    }

    xtable_1 = uix.xtable("#xtable_1", {
        fields: [ "name", "age", "location" ],
        resize: true,
        colshow: true,
        sort: true,
        sortLoading: true,
        buffer: "scroll", // scroll, page, s-page
        bufferCount: 20,
        animate: true
    });

    xtable_2 = uix.xtable("#xtable_2", {
        fields: [ "name", "age", "location" ],
        resize: true,
        colshow: true,
        sort: true,
        sortLoading: true,
        buffer: "page", // scroll, page, s-page
        bufferCount: 5,
        event: {
            sortend: function() {
                xtable_2_page = 1;
            }
        },
        animate: true
    });

    xtable_3 = uix.xtable("#xtable_3", {
        fields: [ "name", "age", "location" ],
        resize: true,
        colshow: true,
        sort: true,
        sortLoading: true,
        buffer: "s-page", // scroll, page, s-page
        bufferCount: 20,
        event: {
            sortend: function() {
                xtable_3_page = 1;
            }
        },
        animate: true
    });
});

function pagingRun() {
    var result = [],
        dataSize = 1000000,
        nStart = new Date().getTime();

    for(var i = 0; i < dataSize; i++) {
        result.push({ name: "Alvin" + i, age: Math.floor(Math.random() * 100) + 1, location: "LA" });
    }

    var nEnd = new Date().getTime();
    paging_2_xtable.update(result);
    paging_2_xtable.resize();
    var nEnd2 = new Date().getTime();

    alert(
        "임의의 데이터 " + (dataSize / 10000) + "만개를 생성합니다.\n\n" +
        "데이터 생성시간 : " + ((nEnd - nStart) / 1000) + "sec\n" +
        "테이블 갱신시간 : " + ((nEnd2 - nEnd) / 1000) + "sec"
    );

    paging_2.reload(paging_2_xtable.count());
}

function modalNotifyRun(type) {
    if(type == 1) {
        modal.show();
    } else {
        var data = {
            msg: "<strong>HTTP Error</strong> 500 Internal server error.",
            color: "danger"
        };

        notify.add(data);
    }
}

function table2Submit(index) {
    var name = $("#table_2_name").val(),
        age = $("#table_2_age").val(),
        location = $("#table_2_location").val();

    table_2.update(index, { name: name, age: age, location: location });
    table_2.hideExpand();
}

function table7Run() {
    var rows = [];
    var nStart = new Date().getTime();

    for(var i = 0; i < 1000; i++) {
        rows.push({ name: "Alvin" + i, age: i, location: "LA" });
    }

    table_7.append(rows);
    var nEnd = new Date().getTime();

    alert("실행시간 : " + (nEnd - nStart) + "ms");
}

function table8Run() {
    var rows = [];
    var nStart = new Date().getTime();

    for(var i = 0; i < 100; i++) {
        rows.push({ name: "Alvin" + i, age: i, location: "LA" });
    }

    table_8.insert(3, rows);
    var nEnd = new Date().getTime();

    alert("실행시간 : " + (nEnd - nStart) + "ms");
}

function table10Run() {
    table_tree_1.append("1", { name: "Kang", age: "21" });
    table_tree_1.append("1", { name: "Jung", age: "33" });
    table_tree_1.insert("1.2", { name: "Park", age: "45" } );
    table_tree_1.insert("1.3", { name: "Hwang", age: "12" } );
    table_tree_1.insert("1.2.0", { name: "Roo", age: "32" } );
    table_tree_1.insert("1.2.1", { name: "Jung", age: "14" } );
    table_tree_1.insert("3.0", { name: "Yoon", age: "17" } );
    table_tree_1.insert("3.1", { name: "Kim", age: "21" } );
    table_tree_1.insert("3.2", { name: "Kim", age: "28" } );

    table_tree_1.scroll();
}

function table11Run(type) {
    if(type == 1) {
        alert("3번 로우를 4.0번으로 이동합니다.");
        table_tree_2.move("3", "4.0");
    } else if(type == 2) {
        alert("1번 로우를 삭제합니다.");
        table_tree_2.remove("1");
    } else {
        alert("2번 로우의 데이터를 변경합니다.");
        table_tree_2.update("2", { name: "AAA" });
    }
}

function xtableRun() {
    var result = [],
        dataSize = 1000000,
        nStart = new Date().getTime();

    for(var i = 0; i < dataSize; i++) {
        result.push({ name: "Alvin" + i, age: Math.floor(Math.random() * 100) + 1, location: "LA" });
    }

    var nEnd = new Date().getTime();
    xtable_1.update(result);
    var nEnd2 = new Date().getTime();

    alert(
        "임의의 데이터 " + (dataSize / 10000) + "만건을 생성합니다.\n\n" +
        "데이터 생성시간 : " + ((nEnd - nStart) / 1000) + "sec\n" +
        "테이블 갱신시간 : " + ((nEnd2 - nEnd) / 1000) + "sec"
    );
}

function xtable2Run() {
    var result = [],
        dataSize = 1000000,
        nStart = new Date().getTime();

    for(var i = 0; i < dataSize; i++) {
        result.push({ name: "Alvin" + i, age: Math.floor(Math.random() * 100) + 1, location: "LA" });
    }

    var nEnd = new Date().getTime();
    xtable_2.update(result);
    xtable_2.resize();
    xtable_2_page = 1;
    var nEnd2 = new Date().getTime();

    alert(
        "임의의 데이터 " + (dataSize / 10000) + "만건을 생성합니다.\n\n" +
        "데이터 생성시간 : " + ((nEnd - nStart) / 1000) + "sec\n" +
        "테이블 갱신시간 : " + ((nEnd2 - nEnd) / 1000) + "sec"
    );
}

function xtable2Page(no) {
    if(xtable_2_page == null) return;

    xtable_2_page += no;
    xtable_2_page = (xtable_2_page < 1) ? 1 : xtable_2_page;
    xtable_2.page(xtable_2_page);
}

function xtable3Run() {
    var result = [],
        dataSize = 1000000,
        nStart = new Date().getTime();

    for(var i = 0; i < dataSize; i++) {
        result.push({ name: "Alvin" + i, age: Math.floor(Math.random() * 100) + 1, location: "LA" });
    }

    var nEnd = new Date().getTime();
    xtable_3.update(result);
    xtable_3.resize();
    xtable_3_page = 1;
    var nEnd2 = new Date().getTime();

    alert(
        "임의의 데이터 " + (dataSize / 10000) + "만건을 생성합니다.\n\n" +
        "데이터 생성시간 : " + ((nEnd - nStart) / 1000) + "sec\n" +
        "테이블 갱신시간 : " + ((nEnd2 - nEnd) / 1000) + "sec"
    );
}

function xtable3Page(no) {
    if(xtable_3_page == null) return;

    xtable_3_page += no;
    xtable_3_page = (xtable_3_page < 1) ? 1 : xtable_3_page;
    xtable_3.page(xtable_3_page);
}


/**
 *  Summernote Codes
 *
 */

jui.ready([ "chart.builder" ], function(builder) {
    if(!$.summernote) return;

    var editor;

    function resetChart() {
        var charts = jui.getAll();

        for(var i = 0; i < charts.length; i++) {
            if(charts[i].type == "chart.builder") {
                var obj = jui.remove(i);
                obj.destroy();
            }
        }
    }

    $.summernote.plugins = {
        "chart" : {
            label : 'chart',
            icon : 'fa fa-area-chart',
            list : [
                { type : 'area' },
                { type : 'bar' },
                { type : 'column' },
                { type : 'bubble' },
                { type : 'donut' },
                { type : 'gauge' },
                { type : 'line' },
                { type : 'mixed', file : 'mixed2_multi_axis' },
                { type : 'pie' },
                { type : 'radar' },
                { type : 'scatter' }
            ],
            dropdown : function() {
                var $dropdown = $("<ul class='dropdown-menu' />").css({
                    width: 380,
                    padding: 5,
                    left : -332
                })

                for(var i = 0; i < this.list.length; i++) {
                    var type = this.list[i].type;
                    var file = this.list[i].file;

                    var $img = $("<img />").attr({
                        'src' : '../../res/doc/chart/img/' + type + ".svg",
                        'data-value' : type,
                        'data-file' : file
                    }).css({
                        'max-width' : 68,
                        'max-height' : 68,
                        border : '1px solid #dddddd'
                    })

                    var $text = $("<p />").html(type),
                        $li = $("<li />").addClass('btn btn-default').css({
                            border : 0
                        }).attr({
                            'data-event' : 'chart',
                            'data-value' : type
                        }).append($img).append($text);

                    $dropdown.append($li);
                }

                return $dropdown.wrap("<div />").parent().html();
            },
            createPopup : function(type, file, saveCallback) {
                $.ajax({
                    url : "../../res/doc/chart/json/" + (file || type) + ".js",
                    dataType : 'text',
                    success : function (data) {
                        data = data.replace(").render();", "");
                        data = data.replace("var chart = jui.include(\"chart.builder\");", "");
                        data = data.replace("chart(\"#chart-content\", ", "");
                        data = data.replace("chart(\"#chart\", ", "");
                        data = data.replace(/\)\;/g, "");

                        var $chart = $("#chart-modal").attr({
                            'data-value': type,
                            'data-code' : data
                        });

                        $chart.find(".modal-title").html(type);
                        $chart.find(".save-btn").click(function() {
                            var size = currentChart.svg.size();

                                var img = $("<img />").css(size).attr('src', currentChart.svg.toDataURL())[0];

                                saveCallback(img);
                                $chart.modal('hide');

                        });

                        $chart.modal('show');

                        $chart.on("show.bs.modal", function() {
                            $("#chart-content").empty();
                        });

                        $chart.on("shown.bs.modal", function() {
                            editor.setValue($(this).attr('data-code'));
                        });

                        $chart.on("hidden.bs.modal", function() {
                            $chart.find(".save-btn").off();
                        });
                    },
                    error : function(data, error) {
                        console.log(error);
                    }
                })
            },
            createChart : function (e, editor, layout) {
                var type = $(e.target).data('value');
                var file = $(e.target).data('file');

                this.createPopup(type, file, function(dom) {
                    var $editable = layout.editable();
                    $editable.trigger('focus');

                    editor.insertDom($editable, dom);
                });
            },
            event : function(e, editor, layout) {
                this.createChart(e, editor, layout);
            }
        }
    }

    $('#summernote').summernote({
        height: 500,
        tabsize: 2,
        toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['table', ['table']],
            ['chart', ['chart']]

        ]
    });

    editor = CodeMirror.fromTextArea($("#chart-code-text")[0], {
        mode: "javascript",
        lineNumbers: true,
        styleActiveLine: true,
        matchBrackets: true,
        theme : "neo"
    });

    editor.on("change", function(cm, change) {
        try {
            $.globalEval("var chartOptions = " + cm.getValue() + ";");
        } catch(e) {
            console.log(e);
        }

        resetChart();
        $("#chart-content").empty();

        window.currentChart = chart("#chart-content", chartOptions);
    });

    window.chart = builder;
});