(function() {
    var uiApi = {
        prop: {},
        opt: {},
        method: {},
        event: {},
        tpl: {}
    };

	function analysis(obj, target) {
		target.method = $.extend(target.method, coreApi.method);
		target.prop = $.extend(target.prop, coreApi.prop);
		
		for(var key in obj) {
			var o = obj[key];
			
			if(typeof(o) == "function") {
				if(key != "init" && key != "setting" && key != "constructor" && key != "valid") {
					uiApi.method[key] = $.extend({ 
						name: (coreApi.method[key]) ? ("<i>" + key + "</i>") : key
					}, target.method[key]);
				}
			} else {
				uiApi.prop[key] = $.extend({
					name: (coreApi.prop[key]) ? ("<i>" + key + "</i>") : key
				}, target.prop[key]);
					
				if(key == "event") {
					for(var i = 0; i < o.length; i++) {
						uiApi.event[o[i].type] = $.extend({
							name: o[i].type
						}, target.event[o[i].type]);
					}
				} else if(key == "tpl") {
					for(var k in o) {
						uiApi.tpl[k] = $.extend({
							name: k
						}, target.tpl[k]);
					}
				} else if(key == "options") {
					for(var k in o) {
						var def = o[k];
						
						if(o[k] == null) {
							def = "null";
						} else if(typeof(o[k]) == "string") {
							def = "'" + o[k] + "'";
						} else if(typeof(o[k]) == "object") {
							def = ($.isArray(o[k])) ? "[]" : "{}";
						}
							
						uiApi.opt[k] = $.extend({ 
							name: (coreApi.opt[k]) ? ("<i>" + k + "</i>") : k,
							def: def,
						}, coreApi.opt[k], target.opt[k]);
					}
				}
			}
		}
		
		return uiApi;
	}
	
	function loadDisqus(url) {
		var url = (!url) ? "../../res/disqus.tpl" : url;
		
		$.get(url, function(html) {
			$("body").append(html);
		});
	}
	
	// 디스커스 댓글 추가
	$(function() {
		var url = location.href;
		if(url.indexOf("_api") != -1 || url.indexOf("custom.html") != -1 || url.indexOf("utility.html") != -1) return;

		url = (url.indexOf("install.html") == -1) ? "../../res/disqus.tpl" : "../res/disqus.tpl";
		loadDisqus(url);
	});
	
	if(typeof(jui) == "object") {
		// 로그 툴 실행 아이콘 추가
		jui.ready(function(ui, uix, _) {
			var url = location.href,
				hash = location.hash;
				
			if(url.indexOf("_api") != -1 || url.indexOf("_markup") != -1 || url.indexOf("script") == -1) return;
			
			var $icon = $('<div class="logtool" onclick="jui.log()" title="버튼을 클릭하시면 로그 툴이 실행됩니다."></div>');
			$("body").append($icon);
			
			ui.tooltip($icon, {
				position: "left",
				delay: 1000
			});
			
			jui.logUrl = "../../lib/jui.mng.html";
		});
		
		// API 문서 관련 함수
		window.juiApi = function(ui, uiApi, tplFunc, callback) {
			var uiObj = analysis(ui, uiApi);
			
			$.get("../../res/manual.tpl", function(html) {
				$("body").append(html);
				$("#method").html(tplFunc($("#tpl_3").html(), { items: uiObj.method }));
				$("#opt").html(tplFunc($("#tpl_4").html(), { items: uiObj.opt }));
				$("#event").html(tplFunc($("#tpl_2").html(), { items: uiObj.event }));
				$("#prop").html(tplFunc($("#tpl_2").html(), { items: uiObj.prop }));
				$("#tpl").html(tplFunc($("#tpl_2").html(), { items: uiObj.tpl }));

				if(typeof(callback) == "function") {
					callback();
				}
				
				loadDisqus();
			});
		};
	}
})();