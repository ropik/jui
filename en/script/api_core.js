window.coreApi = {
    prop: {
        selector: {
            detail: "UI를 생성할 때의 셀렉터 문자열입니다."
        },
        root: {
            detail: "UI의 대상 엘리먼트입니다."
        },
        options: {
            detail: "UI가 생성할 때의 옵션입니다."
        },
        tpl: {
            detail: "UI가 사용하는 템플릿 함수 목록입니다."
        },
        event: {
            detail: "UI에 정의된 커스텀 이벤트 목록입니다."
        },
        listen: {
            detail: "UI에 정의된 DOM 이벤트 목록입니다."
        },
        timestamp: {
            detail: "UI를 생성할 때의 타임스탬프 값입니다."
        },
        index: {
        	detail: "UI 객체가 배열일 경우, 각각의 UI에 대한 인덱스 값입니다."
        },
        module: {
            detail: "UI의 생성자와 타입을 알 수 있는 객체입니다."
        },
        parent: {
            detail: "부모 객체를 참조할 수 있는 프로퍼티입니다."
        }
    },
    method: {
        emit: {
            param: "eventType, sendObject",
            ret: "none",
            detail: "커스텀 이벤트를 발생시킵니다. 첫번째 파라메터가 커스텀 이벤트의 종류이며, 옵션이나 on 메소드로 정의된 함수가 호출됩니다."
        },
        on: {
            param: "eventType, callback",
            ret: "none",
            detail: "emit 메소드가 호출되면 on 메소드의 정의된 콜백 함수가 실행됩니다."
        },
        off: {
            param: "eventType | callback",
            ret: "none",
            detail: "해당 타입 또는 콜백 핸들러의 커스텀 이벤트를 제거합니다."
        },
        addEvent: {
            param: "selector, domEventType, callback",
            ret: "none",
            detail: "DOM 엘리먼트의 브라우저 이벤트를 정의합니다."
        },
        addTrigger: {
        	param: "selector, domEventType",
        	ret: "none",
        	detail: "DOM 엘리먼트에 해당 이벤트를 발생시킵니다."
        },
        addValid: {
            param: "methodName, typeList",
            ret: "none",
            detail: "UI 메소드의 파라메터 타입 체크를 하며, 잘못된 값이 들어왔을 경우에는 에러를 발생시킵니다."
        },
        callBefore: {
        	param: "methodName, callback",
        	ret: "none | object",
        	detail: "UI 메소드가 실행되기 전에 호출되는 콜백 함수를 설정합니다."
        },
        callAfter: {
        	param: "methodName, callback",
        	ret: "none | object",
        	detail: "UI 메소드가 실행된 후에 호출되는 콜백 함수를 설정합니다."
        },
        callDelay: {
        	param: "methodName, callObj",
        	ret: "none",
        	detail: "UI 메소드의 실행 전후의 콜백 함수 및 지연 시간을 설정합니다."
        },
        setTpl: {
            param: "tplName, tplHtml",
            ret: "none",
            detail: "UI의 템플릿 메소드를 동적으로 정의합니다."
        },
        setVo: {
            param: "none",
            ret: "none",
            detail: "UI에 바인딩 라이브러리인 jBinder를 적용합니다."
        },
        setOption: {
            param: "object | optionName, optionValue",
            ret: "none",
            detail: "UI의 옵션을 동적으로 정의합니다."
        },
        destroy: {
            param: "none",
            ret: "none",
            detail: "UI 객체와 DOM 엘리먼트에 설정된 이벤트를 모두 제거합니다."
        }
    },
    opt: {
        event: {
            detail: "UI에서 사용할 DOM 이벤트를 정의합니다."
        },
        tpl: {
            detail: "UI에서 사용할 템플릿 마크업을 정의합니다."
        },
        animate: {
        	detail: "UI의 애니메이션 효과를 사용유무를 설정합니다."
        }
    },
    grid: {
        domain: {
            detail: "축에 표시되는 값을 설정합니다."
        },
        step: {
            detail: "축에 표시되는 값의 간격을 설정합니다."
        },
        min: {
            detail: "축의 최소 값을 설정합니다."
        },
        max: {
            detail: "축의 최대 값을 설정합니다."
        },
        reverse: {
            detail: "축에 표시되는 값들을 반대로 보여지게 합니다."
        },
        key: {
            detail: "해당 키의 값으로 실제 축의 값을 처리합니다."
        },
        hide: {
            detail: "해당 축을 표시 여부를 설정합니다."
        },
        unit: {
            detail: "축의 값을 해당 값의 배수로 보여지게 합니다."
        },
        line: {
            detail: "축 배경에 라인 표시 여부를 정합니다."
        },
        format: {
            detail: "축 값의 포맷을 설정합니다."
        },
        color: {
            detail: "축의 색상을 설정합니다."
        },
        title: {
            detail: "축에 보여지는 텍스트를 설정합니다."
        },
        textRotate: {
            detail: "축에 표시되는 텍스트의 기울기를 설정합니다."
        }
    }
};