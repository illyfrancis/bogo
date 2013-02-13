$(function() {

    var onClick = function() {
        $(".search-me").modal({
            backdrop: "static",
            keyboard: false
        });

        $(".spinme").spin();
        $(".bar").css('width', '60%');

        // var spinner = new Spinner().spin();
        // debugger;

    };

    $(".search-btn").click(onClick);

});