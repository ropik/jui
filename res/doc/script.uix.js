var ac_words = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
];

var ac_words_hangul = [
    "자바의 정석",
    "열혈강의 C++",
    "유쾌한 심리학"
];

var tab_2_count = 3;

var xtable_3_page = 1;

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

function tab2Run(type) {
    switch(type) {
        case 1:
            tab_2_count += 1;
            tab_2.append({ text: "Tab" + tab_2_count });

            alert("탭을 마지막 위치에 추가합니다.");
            break;
        case 2:
            tab_2_count += 1;
            tab_2.prepend({ text: "Tab" + tab_2_count });

            alert("탭을 처음 위치에 추가합니다.");
            break;
        case 3:
            tab_2_count += 1;
            tab_2.insert(2, { text: "Tab" + tab_2_count });

            alert("2번 탭 위치에 추가합니다.");
            break;
        case 4:
            tab_2.remove(0);

            alert("0번 탭을 삭제합니다.");
            break;
        case 5:
            tab_2.move(0, 2);

            alert("0번 탭을 2번 탭 위치로 변경합니다.");
            break;
    }
}

function table2Submit(index) {
    var name = $("#table_2_name").val(),
        age = $("#table_2_age").val(),
        location = $("#table_2_location").val();

    table_2.update(index, { name: name, age: age, location: location });
    table_2.hideExpand();
}

function table8Color(bind, key) {
    var r = Math.floor(Math.random() * 255),
        g = Math.floor(Math.random() * 255),
        b = Math.floor(Math.random() * 255);

    var style = "rgb(" + r + "," + g + "," + b + ")";

    bind.color(key, style);
    bind.rgb(key, style);
}

function table7Sec(bind, sec) {
    var nowSecObj = bind.val("sec");

    setTimeout(function() {
        bind.sec(sec, parseInt(nowSecObj[sec]) + 1);
        table7Sec(bind, sec);
    }, sec * 1000);
}

function table9Run() {
    var rows = [];
    var nStart = new Date().getTime();

    for(var i = 0; i < 1000; i++) {
        rows.push({ name: "Alvin" + i, age: i, location: "LA" });
    }

    table_9.append(rows);
    var nEnd = new Date().getTime();

    alert("실행시간 : " + (nEnd - nStart) + "ms");
}

function table10Run() {
    var rows = [];
    var nStart = new Date().getTime();

    for(var i = 0; i < 100; i++) {
        rows.push({ name: "Alvin" + i, age: i, location: "LA" });
    }

    table_10.insert(3, rows);
    var nEnd = new Date().getTime();

    alert("실행시간 : " + (nEnd - nStart) + "ms");
}

function table13Run(page) {
    table_13.uit.pagingRows(page);
}

function table14RunA() {
    var rows = [];

    for(var i = 0; i < 3; i++) {
        rows.push({ "job": "test" + i, "like": "test" + i });
    }

    table_14.uit.appendColumn("column1", rows);
}

function table14RunB() {
    var rows = [];

    for(var i = 0; i < 3; i++) {
        rows.push({ "etc": "test" + i });
    }

    table_14.uit.appendColumn("column2", rows);
}

function table11Run() {
    alert("선택된 로우 개수 : " + table_11.listChecked().length);
}


function tableTree1Run() {
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

function tableTree2RunA() {
    alert("3번 로우를 4.0번으로 이동합니다.");
    table_tree_2.move("3", "4.0");
}

function tableTree2RunB() {
    alert("1번 로우를 삭제합니다.");
    table_tree_2.remove("1");
}

function tableTree2RunC() {
    alert("2번 로우의 데이터를 변경합니다.");
    table_tree_2.update("2", { name: "AAA" });
}

function tableTree3Run(count) {
    var key = "0",
        rows = [];

    for(var i = 0; i < count; i++) {
        rows.push({ index: key, data: { name: "Hong" + i, age: Math.floor(Math.random() * 100) } });
        key += ".0";
    }

    table_tree_3.updateTree(rows);
}

function xtableRun(type) {
    var result = [],
        dataSize = 1000000,
        nStart = new Date().getTime();

    for(var i = 0; i < dataSize; i++) {
        result.push({ name: "Alvin" + i, age: Math.floor(Math.random() * 100) + 1, location: "LA" });
    }

    var nEnd = new Date().getTime();
    if(type == 1) {
        xtable_1.update(result);
    }
    if(type == 2) {
        xtable_2.update(result);
        xtable_2_page = 1;
        xtable_2.resize();
    }
    if(type == 3) {
        xtable_3.update(result);
        xtable_3_page = 1;
        xtable_3.resize();
    }
    if(type == 4) {
        paging_2_xtable.update(result);
        paging_2_xtable.resize();
    }
    if(type == 5) {
        xtable_5.update(result);
    }
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

function xtable3Page(no) {
    if(xtable_3_page == null) return;

    xtable_3_page += no;
    xtable_3_page = (xtable_3_page < 1) ? 1 : xtable_3_page;
    xtable_3.page(xtable_3_page);
}

function xtableFilter() {
    alert("테이블의 'location' 컬럼의 값에 문자열 'eo'가 포함된 로우를 반환합니다.");

    xtable_4.filter(function(data) {
        if(data.location.indexOf("eo") != -1) {
            return true;
        }
    });
}

function xtableFilterMulti() {
    alert("테이블의 'age' 컬럼 값이 '30'보다 크거나 'name'컬럼 값에 'ng'가 포함된 로우를 반환합니다.");

    xtable_4.filter(function(data) {
        if(data.age >= 30 || data.name.indexOf("ng") != -1) {
            return true;
        }
    });
}

function getTableData() {
    var result = [];

    for(var i = 0; i < 1000; i++) {
        result.push({ name: "Alvin" + i, age: Math.floor(Math.random() * 100) + 1, location: "LA" });
    }

    return result;
}

function winTest(modal, type) {
    if(!modal) {
        if(type == 1) win_1.show();
        if(type == 2) win_1_2.show();
        if(type == 3) win_1_3.show();
    } else {
        win_2.show();
    }
}

function addTreeData(tree) {
    tree.append({ title: "Windows" });
    tree.append({ title: "Download" });
    tree.append({ title: "Program Files" });
    tree.append({ title: "Apache" });
    tree.append("0", { title: "run.exe" });
    tree.append("0", { title: "setting.conf" });
    tree.append("1", { title: "jui.torrrent" });
    tree.insert("2.0", { title: "Riot Games" });
    tree.insert("2.0.0", { title: "lol.exe" });
    tree.append("3", { title: "startup.bat" });
    tree.fold("0");
    tree.fold("1");
    tree.fold("3");
}

function tree2RunA() {
    alert("'3' 인덱스 노드를 '2.1' 인덱스 노드로 이동합니다.");
    tree_1[4].move("3", "2.1");
}

function tree2RunB() {
    alert("'1' 인덱스 노드를 삭제합니다.");
    tree_1[4].remove("1");
}

function tree2RunC() {
    alert("'2' 인덱스 노드의 이름을 변경합니다.");
    tree_1[4].update("2", { title: "Applications" });
}

jui.ready([ "util.base", "ui.dropdown", "uix.table", "uix.xtable", "uix.autocomplete", "uix.tab", "uix.window", "uix.tree" ],
    function(_, dropdown, table, xtable, autocomplete, tab, window, tree) {

    // 자동완성
    ac_1 = autocomplete(".ac", {
        target: "input[type=text]",
        words: ac_words,
        event: {
            change: function(text) {
                alert(text);
            }
        }
    });

    // 탭, tab-top
    tab_1 = tab("#tab_1", {
        event: {
            change: function(data) {
                alert(data.text);
            },
            changemenu: function(data) {
                alert(data.text);
            }
        },
        target: "#tab_contents_1",
        index: 2
    });

    // 탭, tab-bottom
    pill_1 = tab("#pill_1", {
        event: {
            change: function(data) {
                alert(data.text);
            },
            changemenu: function(data) {
                alert(data.text);
            }
        },
        target: "#pill_contents_1"
    });

    // 탭, append/prepend
    tab_2 = tab("#tab_2", {
        nodes: [
            { text: "Tab1" },
            { text: "Tab2" },
            { text: "Tab3" }
        ],
        event: {
            change: function(data) {
                $("#tab_2_contents").html(data.text);
            }
        },
        tpl: {
            node: "<li><a href='#'><!= text !></a></li>"
        }
    });

    // 탭, tab-top
    tab_3 = tab("#tab_3", {
        event: {
            change: function(data) {
                alert(data.text);
            }
        },
        drag: true,
        target: "#tab_contents_3"
    });

    // 3-1. 일반 윈도우
    win_1 = window("#win_1", {
        width: 500,
        height: 300,
        left: 100,
        top: 100,
        animate: true
    });

    win_1_2 = window("#win_1_2", {
        width: 500,
        height: 300,
        left: 100,
        top: 400,
        animate: true
    });

    win_1_3 = window("#win_1_3", {
        width: 500,
        height: 300,
        left: 100,
        top: 700,
        animate: true
    });

    // 3-2. 모달 윈도우
    win_2 = window("#win_2", {
        width: 500,
        height: 300,
        modal: true,
        animate: true
    });

    win_3 = window("#win_3", {
        width: 350,
        height: 150,
        top: 1274,
        animate: true
    });

    // 9-1. 트리 데이터 추가
    tree_1 = tree(".tree:not(.tree-etc)", {
        root: { title: "C:\\" },
        event: {
            select: function(node) {
                this.select(node.index);
                alert("index(" + node.index + "), title(" + node.data.title + ")");
            }
        },
        tpl: {
            node: $("#tpl_tree").html()
        }
    });

    if(tree_1 != null) {
        for (var i = 0; i < tree_1.length; i++) {
            addTreeData(tree_1[i]);
        }
    }

    tree_2 = tree("#tree_2", {
        root: { title: "C:\\" },
        drag: true,
        tpl: {
            node: $("#tpl_tree").html()
        }
    });

    if(tree_2 != null) {
        addTreeData(tree_2);
    }

    tree_3 = tree("#tree_3", {
        root: { title: "C:\\" },
        drag: true,
        dragChild: false,
        tpl: {
            node: $("#tpl_tree").html()
        }
    });

    if(tree_3 != null) {
        addTreeData(tree_3);
    }

    // 4-1. 기본
    table_1 = table("#table_1", {
        data: _.clone(table_data),
        animate: true
    });

    // 4-2-1. 확장 영역 + 데이터 바인딩
    table_2 = table("#table_2", {
        data: _.clone(table_data),
        event: {
            expand: function(row, e) {
                $(row.list[0]).html("<i class='icon-right'></i>");
            },
            expandend: function(row, e) {
                $(row.list[0]).html("<i class='icon-left'></i>");
            }
        },
        expand: true,
        animate: true
    });

    // 4-3. 스크롤 + 높이 설정
    table_3 = table("#table_3", {
        data: _.clone(table_data_big),
        scroll: true,
        scrollHeight: 150,
        animate: true
    });

    // 4-11. 로우 체크
    table_11 = table("#table_11", {
        data: _.clone(table_data_big),
        event: {
            click: function(row, e) {
                if($(row.element).hasClass("checked")) {
                    this.uncheck(row.index);
                } else {
                    this.check(row.index);
                }
            }
        },
        animate: true
    });

    // 4-4. 싱글 로우 선택
    table_4 = table("#table_4", {
        data: _.clone(table_data_big),
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
    table_4_dd = dropdown("#table_4_dd", {
        event: {
            change: function(data) {
                alert(data.text);
            }
        }
    });

    // 4-5. 정렬 기능
    table_5 = table("#table_5", {
        fields: [ "name", "age", "location" ],
        data: _.clone(table_data_big),
        resize: true,
        sort: [ 0, 1, 2 ],
        event: {
            sort: function(column, e) {
                var className = {
                    "desc": "icon-arrow1 icon-white",
                    "asc": "icon-arrow3 icon-white"
                }[column.order];

                $(column.element).children("i").remove();
                $(column.element).append("<i class='" + className + "'></i>");
            }
        },
        animate: true
    });

    // 4-6. 정렬 기능 + 스크롤
    table_6 = table("#table_6", {
        fields: [ "name", "age", "location" ],
        data: _.clone(table_data_big),
        sort: true,
        resize: true,
        scroll: true,
        scrollHeight: 150,
        animate: true
    });

    // 4-18. 셀 에디트 기능
    table_18 = table("#table_18", {
        fields: [ null, "name", "age", "location" ],
        data: _.clone(table_data_big),
        editCell: [ 1, 3 ],
        event: {
            editstart: function(row, e) {
                console.log(row);
            }
        },
        animate: true
    });

    // 4-19. 로우 에디트 기능
    table_19 = table("#table_19", {
        fields: [ null, "name", "age", "location" ],
        data: _.clone(table_data_big),
        editRow: true,
        resize: true,
        sort: true,
        event: {
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

    // 4-22. 로우 에디트 기능 + 드롭다운 메뉴
    table_22 = table("#table_22", {
        fields: [ null, "name", "age", "location" ],
        data: _.clone(table_data_big),
        editRow: true,
        editEvent: false,
        event: {
            rowmenu: function(row, e) {
                this.select(row.index);

                table_22_dd.move(e.pageX, e.pageY);
                table_22_dd.show();
            }
        },
        animate: true
    });

    table_22_dd = dropdown("#table_22_dd", {
        event: {
            change: function(data) {
                if(data.index == 0) {
                    var index = table_22.activeIndex();

                    if(index != null) {
                        table_22.showEditRow(index);
                    }
                }

                table_22.unselect();
            }
        }
    });

    // 4-16. 로우 삭제 기능
    table_16 = table("#table_16", {
        fields: [ null, "name", "age", "location" ],
        data: _.clone(table_data_big),
        animate: true
    });

    // 4-7. 데이터 바인딩 (1)
    table_7 = table("#table_7", {
        vo: true,
        animate: true
    });

    if(table_7 != null) {
        table7Sec(table_7.bind, 1);
        table7Sec(table_7.bind, 3);
        table7Sec(table_7.bind, 5);
        table7Sec(table_7.bind, 7);
        table7Sec(table_7.bind, 10);
    }

    // 4-8. 데이터 바인딩 (2)
    table_8 = table("#table_8", {
        vo: true,
        animate: true
    });

    if(table_8 != null) {
        setInterval(function () {
            for (var key in table_8.bind.val("color")) {
                table8Color(table_8.bind, key);
            }
        }, 1000);
    }

    table_9 = table("#table_9", {
        fields: [ null, "name", "age", "location" ],
        data: _.clone(table_data_big),
        scroll: true,
        resize: true,
        animate: true
    });

    table_10 = table("#table_10", {
        fields: [ "name", "age", "location" ],
        data: _.clone(table_data_big),
        sort: [ 0, 1, 2 ],
        scroll: true,
        resize: true,
        animate: true
    });

    table_15 = table("#table_15", {
        fields: [ "name", "age", "location" ],
        data: _.clone(table_data),
        colshow: true,
        sort: true,
        resize: true,
        event: {
            colmenu: function(column, e) {
                this.showColumnMenu(e.pageX - 25);
            }
        },
        animate: true
    });

    // Export CSV
    table_20 = table("#table_20", {
        fields: [ "name", "age", "location" ],
        csv: [ "name", "age" ],
        csvNames: [ "이름", "나이" ],
        data: _.clone(table_data_big),
        resize: true,
        sort: true,
        event: {
            sort: function(column, e) {
                $("#table_20_btn").attr("href", table_20.getCsvBase64());
            }
        },
        animate: true
    });

    if(table_20 != null) {
        $("#table_20_btn").attr("href", table_20.getCsvBase64());
    }

    // Import CSV
    table_21 = table("#table_21", {
        fields: [ "name", "age" ],
        resize: true,
        sort: true,
        animate: true
    });

    if(table_21 != null) {
        $("#table_21_btn").change(function (e) {
            table_21.setCsvFile(e.target.files[0]);
        });
    }

    table_tree_1 = table("#table_tree_1", {
        data: _.clone(table_data_big),
        scroll: true,
        resize: true,
        event: {
            select: function(row) {
                alert("index(" + row.index + "), name(" + row.data.name + ")");
            }
        },
        animate: true
    });

    table_tree_2 = table("#table_tree_2", {
        data: _.clone(table_data_big),
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
    }

    table_tree_3 = table("#table_tree_3", {
        resize: true,
        animate: true
    });

    // X-Table, scroll
    xtable_1 = xtable("#xtable_1", {
        fields: [ "name", "age", "location" ],
        resize: true,
        colshow: true,
        sort: true,
        sortLoading: true,
        buffer: "scroll", // scroll, page, s-page
        bufferCount: 20,
        event: {
            colmenu: function(column, e) {
                this.showColumnMenu(e.pageX - 25);
            }
        },
        animate: true
    });

    // X-Table, page
    xtable_2 = xtable("#xtable_2", {
        fields: [ "name", "age", "location" ],
        resize: true,
        sort: true,
        buffer: "page", // scroll, page, s-page
        bufferCount: 20,
        animate: true
    });

    // X-Table, scroll-page
    xtable_3 = xtable("#xtable_3", {
        fields: [ "name", "age", "location" ],
        resize: true,
        sort: true,
        buffer: "s-page", // scroll, page, s-page
        bufferCount: 20,
        animate: true
    });

    // X-Table, filter
    xtable_4 = xtable("#xtable_4", {
        fields: [ "name", "age", "location" ],
        data: table_data,
        resize: true,
        sort: true,
        buffer: "s-page", // scroll, page, s-page
        bufferCount: 20,
        animate: true
    });

    // X-Table, scrollWidth
    xtable_5 = xtable("#xtable_5", {
        fields: [ "name", "age", "location" ],
        data: table_data,
        resize: true,
        sort: true,
        width: 1000,
        scrollWidth: 727,
        animate: true
    });
});