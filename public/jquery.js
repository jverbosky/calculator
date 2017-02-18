// borrowed button press capture script from here:
// http://jsfiddle.net/arunpjohny/YD6PL/
//
// per StackOverflow question:
// http://stackoverflow.com/questions/21026041/when-click-a-button-add-value-to-textarea

$(document).ready(function () {
    $(".buttons").click(function () {
        var cntrl = $(this).html();
        $("#txt-area").append(cntrl);
    });
});