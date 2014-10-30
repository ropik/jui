var iframe = { obj: null, height: null };

var menuInfo = {
    home: {
        src: "home.html",
        title: "Home",
        msg: "JUI is html5-based user interface library."
    },
    about: {
        src: "about.html"
    },
    install: {
        src: "install.html",
        title: "Getting Started",
        msg: "JUI library is very easy to install and use."
    },
    core: {
        title: "Framework",
        msg: "To make it easier to develop a user interface provides many core functions.",
        menu: {
            common: "core/common",
            api: "core/api",
            log: "core/log",
            custom: "core/custom",
            util: "core/utility"
        }
    },
    script: {
        title: "Components",
        msg: "To represent data provides a variety of UI components.",
        menu: {
            common: "script/common",
            button: "script/button",
            combo: "script/combo",
            window: "script/window",
            table: "script/table",
            xtable: "script/xtable",
            dropdown: "script/dropdown",
            tab: "script/tab",
            tooltip: "script/tooltip",
            modal: "script/modal",
            tree: "script/tree",
            paging: "script/paging",
            autocomplete: "script/autocomplete",
            datepicker: "script/datepicker",
            notify: "script/notify",
            layout: "script/layout",
            chart: "script/chart",
			realtime: "script/realtime"
        }
    },
    style: {
        title: "CSS",
        msg: "Fundamental HTML Elements styled and enhanced with extensible classes.",
        menu: {
            common: "style/common",
            typography: "style/typography",
            form: "style/form",
            icon: "style/icon",
            button: "style/button",
            group: "style/group",
            vgroup: "style/vgroup",
            vmenu: "style/vmenu",
            dropdown: "style/dropdown",
            navbar: "style/navbar",
            table: "style/table",
            tab: "style/tab",
            window: "style/window",
            msgbox: "style/msgbox",
            grid: "style/grid",
            tree: "style/tree",
            paging: "style/paging",
            panel: "style/panel",
            bargraph: "style/bargraph",
            datepicker: "style/datepicker",
            notify: "style/notify"
        }
    },
    chart: {
        title: "Charts",
        msg: "Provides a variety of data visualization components.",
        src : "chart/common.html"
    },
    tips: {
    	title: "+Bootstrap",
    	msg: "JUI library can be used with the Bootstrap.",
    	menu: {
    		common: "tips/common",
    		bootstrap: "tips/bootstrap",
			pure: "tips/pure"
    	}
    }
};

var loading = null;

function initHashEvent() {
	$(window).hashchange(function() {
		if(location.hash.indexOf("#") != -1) {
			hash = location.hash.substring(1).split("/");
			
			if (hash[0].indexOf("chart-") > -1) {
			    return;
			}
			
			initMenuUrl(hash);
			initIFrameResize();				

		} else {
			initMenuUrl([ "home" ]);
		}
		
		$("body").scrollTop(0);
	});
	
	// 온-로드 시점에도 발생
	$(window).hashchange();
}

function initMenuUrl(hash) {
	if(hash[0] != "home") {
		$("header .menu").find("a").removeClass("active");
	}
	
	var src = menuInfo[hash[0]].src;

    // 타이틀 & 메시지 처리
    if(hash == "home") {
        $(".main, nav.download").show();
        $("nav.sub").hide();
    } else if(hash == "about") {
        $(".main, nav.download, nav.sub").hide();
        $("nav.about").show();
    } else {
		$(".main, nav.download, nav.about").hide();
		$("nav.sub").show();
		$("nav.sub .title").html(menuInfo[hash[0]].title);
		$("nav.sub .msg").html(menuInfo[hash[0]].msg);
	}
	
	// 영역 보이기 및 숨기기
	$("article").hide();
	$("#" + hash[0]).show();
	
	// 상단 메뉴바 선택 효과 처리
	$("[href*=" + hash[0] + "]").addClass("active");
	
	// 자바스크립트 및 스타일 처리
	if(hash[0] == "core" || hash[0] == "script" || hash[0]  == "style" || hash[0]  == "tips") {
		for(var key in menuInfo[hash[0]].menu) {
			initSubMenuUrl(hash);
			break;
		}
	} else if (hash[0] == 'chart') {
		if (src) {
			loadPage(hash, src);
		}
	} else {
		if (src) {
			loadIframe($("#" + hash[0]).find("iframe"), src);
		}
		
	}
}

function initSubMenuUrl(hash) {
	// 초기값 처리...
	hash[1] = (hash[1]) ? hash[1] : "common";
	
	var src = menuInfo[hash[0]].menu[hash[1]];
	var $target = $("#" + hash[0]),
		$menu = $target.find(".vmenu a[href='#" + hash[0] + "/" + hash[1] + "']");
		
	$target.find("a").removeClass("active");
	$menu.addClass("active");
	
	if (src) {

		if (hash[0] == 'chart') {
			loadPage(hash, src);
		} else {
			loadIframe($target.find("iframe"), src);			
		}

	}


	if(hash[0] == "script") {
		initLeafMenuUrl(hash, src, $target, $menu);
	}
}

function initLeafMenuUrl(hash, src, $target, $menu) {
	var $submenu = $("#" + hash[0]).find(".submenu");

	if(hash[1] == "common") {
		$submenu.hide();
		return;
	}

	// 서브메뉴 위치 설정
	$submenu.insertAfter($menu);
	$submenu.find("li").attr("data-key", hash[1]);		
	$submenu.find("li").removeClass("active");
	$submenu.find("li:first").addClass("active");
	$submenu.show();
	
	// 클릭 이벤트 처리
	$submenu.unbind("click").on("click", "li:not(.active)", function(e) {
		var subkey = $(this).data("subkey");
			
		$submenu.find("li").removeClass("active");
		$(this).addClass("active");	
		
		loadIframe($target.find("iframe"), src + subkey);
	});
}

function initIFrameResize() {
	setInterval(function() {
		if(iframe.obj != null) {
			if(iframe.height != getIFrameheight(iframe.obj)) {
				setIFrameHeight(iframe.obj);
			}
		}
	}, 3000);
}

function getIFrameheight(obj) {
	var height = 0;
	
	if(obj.contentDocument && obj.contentDocument.body) {
        height = obj.contentDocument.body.offsetHeight + 40;
    } else if(obj.contentWindow.document.body) {
        height = obj.contentWindow.document.body.scrollHeight;
    }
    
    return height;
}

function setIFrameHeight(obj, id) {
    if($("#" + id).find("iframe")[0] != obj && id) return;

    if(obj.contentDocument && obj.contentDocument.body) {
        obj.height = obj.contentDocument.body.offsetHeight + 40;
    } else if(obj.contentWindow.document.body) {
        obj.height = obj.contentWindow.document.body.scrollHeight;
    }
    
	iframe.obj = obj;
	iframe.height = obj.height;
}

function checkIeVersion() {
	if(document.all && !document.addEventListener) {
	    alert('JUI 메뉴얼 페이지는 IE 9+ 이상의 브라우저에서만 동작합니다.');
	}
}

function loadIframe($iframe, src) {
	//loading.show();
	
	$iframe.attr("src", src + ((src.indexOf(".html") != -1) ? "" : ".html"));
	$iframe.unbind("load");
	
	$iframe.on("load", function(e) {
		//loading.hide();
	});
}

function loadPage(hash, src) {
	$("#chart .center").load(src);
}

function initAnimation() {
	var $slider = $(".main").find("nav"),
		$prev = $(".img-control-left"),
		$next = $(".img-control-right");

	var index = 0,
		count = $slider.size(),
		isRun = false,
		duration = 500,
		opacity = 1;

	function prev() {
		var prev = index,
			current = index + 1;

		if(current == count) {
			current = 0;
			index = 0;
		} else {
			index++;
		}

		var $prev = $($slider.get(prev)),
			$current = $($slider.get(current));

		isRun = true;

		$prev.addClass("pt-page-moveToLeftFade");
		$current.show().addClass("pt-page-moveFromRightFade");
		$current.on("webkitAnimationEnd", handler);
		$current.on("oAnimationEnd", handler);
		$current.on("MSAnimationEnd", handler);
		$current.on("animationend", handler);

		function handler(e) {
			$prev.removeClass("pt-page-moveToLeftFade");
			$current.removeClass("pt-page-moveFromRightFade");
			show();
		}
	}

	function next() {
		var prev = index,
			current = index - 1;

		if(current == -1) {
			current = count - 1;
			index = count - 1;
		} else {
			index--;
		}

		var $prev = $($slider.get(prev)),
			$current = $($slider.get(current));

		isRun = true;

		$prev.addClass("pt-page-moveToRightFade");
		$current.show().addClass("pt-page-moveFromLeftFade");
		$current.on("webkitAnimationEnd", handler);
		$current.on("oAnimationEnd", handler);
		$current.on("MSAnimationEnd", handler);
		$current.on("animationend", handler);

		function handler(e) {
			$prev.removeClass("pt-page-moveToRightFade");
			$current.removeClass("pt-page-moveFromLeftFade");
			show();
		}
	}

	function show() {
		$slider.each(function(i) {
			if(i == index) {
				$(this).show();
			} else {
				$(this).hide();
			}
		});

		isRun = false;
	}

	$prev.on("click", function(e) {
		next();
	}).hover(function(e) {
		$prev.fadeTo(duration, opacity);
	}, function(e) {
		$prev.fadeTo(duration, opacity / 2);
	});

	$next.on("click", function(e) {
		prev();
	}).hover(function(e) {
		$next.fadeTo(duration, opacity);
	}, function(e) {
		$next.fadeTo(duration, opacity / 2);
	});

	$slider.parent().hover(function(e) {
		$prev.fadeTo(duration, opacity / 2);
		$next.fadeTo(duration, opacity / 2);
	}, function(e) {
		$prev.fadeOut(duration);
		$next.fadeOut(duration);
	});
}

jui.ready(function(ui, uix, _) {
	loading = ui.modal("#floatingBarsG", {
		color: "black"
	});
	
	initHashEvent();
	initAnimation();
	checkIeVersion();

	$("#btn_about").on("click", function(e) {
		location.hash = "#about";
		return false;
	});
});
