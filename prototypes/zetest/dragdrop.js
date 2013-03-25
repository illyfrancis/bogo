$(function() {

    var helper = function (e, ui) {
        console.log(e, ui);
        // return $('<i class="icon-search"></i>');
        var columnName = ui.find('span[data-original-title]').attr('data-original-title');
        // return $("<span class='label'>" + columnName + "</span>");
        return $("<div><span class='label'>" + columnName + "</span></div>");
    };

    $('.search-result thead tr').sortable({
        start: function (e, ui) {
            // hide tooltip
            // $('#element').tooltip('hide')
            console.log('starting...' + ui.position);

        },
        update: function (e, ui) {
            var i = ui.item.index();
            console.log('done [' + i + ']');
        },
        cursor: 'move',
        cursorAt: {
            left: 0
        },
        distance: 2,
        // forceHelperSize: true,  // what does it do?
        // helper: 'clone',
        helper: helper,
        forcePlaceholderSize: true,  // what does it do?
        placeholder: "placeholder", // style 'placeholder' defined in html
        // revert: true,    // animation
        // opacity: 0.5,
        axis: 'x'
    });

});
