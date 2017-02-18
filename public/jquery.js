$(document).ready(function () {
    $(".buttons").click(function () {
        var cntrl = $(this).html();
        $("#txt-area").append(cntrl);
    });
});