$(function () {
    $('div').on('click', '.remove-view', function () {
        console.log('button clicked');
        $(this).remove();
    });

    $('tr').on('click', '.foo', function () {
        console.log('row clicked');
        $(this).remove();
    });
});