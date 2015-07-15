jui.defineUI("ui.scroll", [ "jquery", "util.base" ], function($, _) {

    /**
     * @class ui.scroll
     *
     * @extends core
     * @alias Scroll
     * @requires jquery
     */
    var UI = function() {
        var $xHandle = null,
            $yHandle = null;

        function setHorizontalScroll(self) {
            $xHandle = createHandleObject(self);

            if($xHandle != null) {
                $(self.root).css({
                    "overflow-x": "hidden",
                    "max-width": self.options.width
                }).append($xHandle);

                $xHandle.css({
                    "left": "0px",
                    "bottom": "0px"
                });

                setHorizontalHandleEvent(self);
            }
        }

        function setVerticalScroll(self) {
            $yHandle = createHandleObject(self);

            if($yHandle != null) {
                $(self.root).css({
                    "overflow-y": "hidden",
                    "max-height": self.options.height
                }).append($yHandle);

                $yHandle.css({
                    "top": "0px",
                    "right": "0px"
                });

                setVerticalHandleEvent(self);
            }
        }

        function setVerticalHandleEvent(self) {
            var handleSize = $yHandle.height(),
                maxHeight = self.options.height,
                scrollHeight = $(self.root)[0].scrollHeight,
                rate = scrollHeight / (maxHeight - handleSize),
                handleY = 0,
                startY = 0,
                moveY = 0;

            self.addEvent($yHandle, "mousedown", function(e) {
                if(startY != 0) return;
                startY = e.pageY;
            });

            self.addEvent("body", "mousemove", function(e) {
                if(startY == 0) return;
                moveY = handleY + e.pageY - startY;

                if(moveY >= 0 && moveY <= maxHeight - handleSize) {
                    $(self.root).scrollTop(rate * moveY);
                    setHandleScrollTop(self, moveY);
                }
            });

            self.addEvent("body", "mouseup", function(e) {
                if(startY == 0) return;

                handleY = moveY;
                startY = 0;
                moveY = 0;
            });
        }

        function setHorizontalHandleEvent(self) {
            var handleSize = $xHandle.width(),
                maxWidth = self.options.width,
                scrollWidth = $(self.root)[0].scrollWidth,
                rate = scrollWidth / (maxWidth - handleSize),
                handleX = 0,
                startX = 0,
                moveX = 0;

            self.addEvent($xHandle, "mousedown", function(e) {
                if(startX != 0) return;
                startX = e.pageX;
            });

            self.addEvent("body", "mousemove", function(e) {
                if(startX == 0) return;
                moveX = handleX + e.pageX - startX;

                if(moveX >= 0 && moveX <= maxWidth - handleSize) {
                    $(self.root).scrollLeft(rate * moveX);
                    setHandleScrollLeft(self, moveX);
                }
            });

            self.addEvent("body", "mouseup", function(e) {
                if(startX == 0) return;

                handleX = moveX;
                startX = 0;
                moveX = 0;
            });
        }

        function setHandleScrollTop(self, y) {
            var top = $(self.root).scrollTop();

            $xHandle.css("top", (top + $(self.root).outerHeight() - $xHandle.height()) + "px");
            $yHandle.css("top", (top + y) + "px");
        }

        function setHandleScrollLeft(self, x) {
            var left = $(self.root).scrollLeft();

            $xHandle.css("left", (left + x) + "px");
            $yHandle.css("left", (left + $(self.root).outerWidth() - $yHandle.width()) + "px");
        }

        function createHandleObject(self) {
            var tpl = self.tpl.handle;

            if(tpl != null) {
                return $(tpl()).css({
                    "position": "absolute",
                    "cursor": "pointer"
                });
            }

            return null;
        }

        this.init = function() {
            // 루트 포지션 설정
            $(this.root).css("position", "relative");

            // 세로 스크롤 설정
            if(_.typeCheck("integer", this.options.width)) {
                setVerticalScroll(this);
            }

            // 가로 스크롤 설정
            if(_.typeCheck("integer", this.options.height)) {
                setHorizontalScroll(this);
            }
        }
    }

    UI.setup = function() {
        return {
            width: null,
            height: null
        }
    }

    return UI;
});