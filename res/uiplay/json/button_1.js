jui.ready([ "ui.button" ], function(button) {
    button_1 = button("#button_1", {
        type: "radio",
        event: {
            change: function(data) {
                alert("index(" + data.index + "), value(" + data.value + ")");
            }
        }
    });
});