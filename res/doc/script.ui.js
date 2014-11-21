var btn_radio_options = {
    type: "radio",
    event: {
        change: function(data) {
            alert("index(" + data.index + "), value(" + data.value + ")");
        }
    }
};

var btn_check_options = {
    type: "check",
    event: {
        change: function(data) {
            var result = "";

            for(var i = 0; i < data.length; i++) {
                if(data[i] != null) {
                    result += "index(" + data[i].index + "), value(" + data[i].value + ")" + "\n";
                }
            }

            alert(result);
        }
    }
};

function dd_4_update() {
    dd_4.update([
        { value: 4, text: "text4" },
        { value: 5, text: "text5" },
        { value: 6, text: "text6" }
    ]);
}

function notifyTest(type, color) {
    var data = { title: "Caution message Send!!!", message: "Feb 15, 2013-12-24 02:24:19", color: color };

    if(type == 1) notify1.add(data);
    if(type == 2) notify2.add(data);
    if(type == 3) notify3.add(data);
    if(type == 4) notify4.add(data);
    if(type == 5) notify5.add(data);
    if(type == 6) notify6.add(data);
}

function paging2Run() {
    xtableRun();
    paging_2.reload(paging_2_xtable.count());
}

function xtableRun(type) {
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
}

jui.ready([ "ui.button", "ui.combo", "ui.datepicker", "ui.dropdown", "ui.layout", "ui.modal", "ui.notify", "ui.paging", "ui.tooltip", "uix.xtable" ],
    function(button, combo, datepicker, dropdown, layout, modal, notify, paging, tooltip, xtable) {

    // 버튼-라디오
    btn_radio_1 = button("#btn_radio_1", btn_radio_options);
    btn_radio_2 = button("#btn_radio_2", btn_radio_options);
    btn_radio_3 = button("#btn_radio_3", btn_radio_options);

    // 버튼-체크
    btn_check = button("#btn_check", btn_check_options);
    btn_check_2 = button("#btn_check_2", btn_check_options);

    // 콤보박스
    combo_1 = combo("#combo_1", {
        index: 2,
        position: "top",
        event: {
            change: function(data) {
                alert("text(" + data.text + "), value(" + data.value + ")");
            }
        }
    });

    // 콤보박스 (스크롤 + 인덱스)
    combo_2 = combo("#combo_2", {
        index: 3,
        width: 196,
        keydown: true,
        event: {
            change: function(data) {
                alert("text(" + data.text + "), value(" + data.value + ")");
            }
        }
    });

    // 달력 기본형
    datepicker1 = datepicker("#datepicker1", {
        titleFormat: "yyyy년 MM월",
        format: "yyyy/MM/dd",
        event: {
            select: function(date, e) {
                alert(date);
            },
            prev: function(e) {
                alert("prev");
            },
            next: function(e) {
                alert("next");
            }
        },
        animate: true
    });

    // 달력 월 선택
    datepicker2 = datepicker("#datepicker2", {
        type: "monthly",
        titleFormat: "yyyy년",
        format: "yyyy/MM",
        event: {
            select: function(date, e) {
                alert(date);
            }
        },
        animate: true
    });

    // 달력 월 선택
    datepicker3 = datepicker("#datepicker3", {
        type: "yearly",
        titleFormat: "연도 선택",
        format: "yyyy",
        event: {
            select: function(date, e) {
                alert(date);
            }
        },
        animate: true
    });

    // 드롭다운
    dd_1 = dropdown("#dd_1", {
        event: {
            change: function(data) {
                alert(data.value + ", " + data.text);
            }
        }
    });

    // 드롭다운, 앵커
    dd_2 = dropdown("#dd_2", {
        close: false,
        event: {
            change: function(data) {
                alert(data.value + ", " + data.text);
            }
        }
    });

    // 드롭다운, 스타일
    dd_3 = dropdown("#dd_3", {
        keydown: true,
        event: {
            change: function(data) {
                alert(data.value + ", " + data.text);
            }
        }
    });

    // 드롭다운, 업데이트
    dd_4 = dropdown("#dd_4", {
        nodes: [
            { value: 1, text: "text1" },
            { value: 2, text: "text2" },
            { value: 3, text: "text3" }
        ],
        event: {
            change: function(data) {
                alert(data.value + ", " + data.text);
            }
        }
    });

    // 레이아웃
    layout_1 = layout("#container", {
        width: "auto",
        height: 300,
        left: {
            size: 100,
            min: 100,
            max: 300,
            resize: true
        },
        right: {
            size: 100,
            min: 100,
            max: 300,
            resize: true
        }
    });

    // 모달 (글로벌)
    modal_1 = modal("#modal_1", {
        color: "black"
    });

    // 모달 (이너)
    modal_2 = modal("#modal_2_msg", {
        target: "#modal_2",
        opacity: 0.5,
        color: 'white'
    });

    // 알림 1
    notify1 = notify("body", {
        position: "top-right",
        event: {
            show: function(data) {
                console.log("show : " + JSON.stringify(data));
            },
            hide: function(data) {
                console.log("hide : " + JSON.stringify(data));
            },
            click: function(data) {
                console.log("click : " + JSON.stringify(data));
            }
        },
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    // 알림 2
    notify2 = notify("body", {
        position: "top-left",
        timeout: 0,
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    // 알림 3
    notify3 = notify("body", {
        position: "top",
        timeout: 2000,
        padding: {
            top: 100
        },
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    // 알림 4
    notify4 = notify("section:first", {
        position: "bottom",
        timeout: 0,
        distance: 30,
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    // 알림 5
    notify5 = notify("section:first", {
        position: "bottom-left",
        showDuration: 1000,
        hideDuration: 1000,
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    // 알림 6
    notify6 = notify("section:first", {
        position: "bottom-right",
        showEasing: "linear",
        tpl: {
            item: $("#tpl_alarm").html()
        }
    });

    // 페이징
    paging_1 = paging("#paging_1", {
        count: 1000,
        pageCount: 10,
        screenCount: 7,
        event: {
            page: function(pNo) {
                alert(pNo);
            }
        }
    });

    // 테이블 + 페이징
    paging_2 = paging("#paging_2", {
        pageCount: 100,
        event: {
            page: function(pNo) {
                paging_2_xtable.page(pNo);
            }
        }
    });

    paging_2_xtable = xtable("#paging_2_xtable", {
        fields: [ "name", "age", "location" ],
        resize: true,
        sort: true,
        sortLoading: true,
        buffer: "s-page", // scroll, page, s-page
        bufferCount: 100,
        event: {
            sortend: function(data, e) {
                paging_2.first();
            }
        },
        animate: true
    });

    // 툴팁 Top
    tooltip_1 = tooltip(".tooltip_1");

    // 툴팁 Bottom
    tooltip_2 = tooltip(".tooltip_2", {
        position: "bottom",
        color: "gray",
        showType: "click"
    });

    // 툴팁 Left
    tooltip_3 = tooltip(".tooltip_3", {
        position: "left",
        delay: 1000
    });

    // 툴팁 Right
    tooltip_4 = tooltip(".tooltip_4", {
        position: "right",
        width: 300,
        align: "center"
    });
});