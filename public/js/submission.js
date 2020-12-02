$(document).ready(function() {
// webshim.setOptions('forms-ext', {
//     replaceUI: 'auto',
//     types: 'date',
//     date: {
//         startView: 2,
//         inlinePicker: true,
//         classes: 'hide-inputbtns'
//     }
// });
// webshim.setOptions('forms', {
//     lazyCustomMessages: true
// });
// //start polyfilling
// webshim.polyfill('forms forms-ext');

// var routes = require("../routes/api-routes.js");

//only last example using format display
$(function () {
    $('.format-date').each(function () {
        var $display = $('.date-display', this);
        $(this).on('change', function (e) {
            //webshim.format will automatically format date to according to webshim.activeLang or the browsers locale
            var localizedDate = webshim.format.date($.prop(e.target, 'value'));
            $display.html(localizedDate);
        });
    });
});
var firstNameInput = $("#firstName");
var lastNameInput = $("#lastName");
var PosDate = $("#posDate");
var condition = $("#condition");
var qStart = $("#qStart");
var qEnd = $("#qEnd");

function submitEmployee(Quarantine) {
    $.post("/api/cases/", Quarantine)
};

// Send AJAX post request with on click event.
$("#newEmp").on("click", function () {
    // event.preventDefault();
    console.log("clicked");
    $.post("/api/cases")
    // On success, post to the console.
    var newEmployee = {
        firstName: firstNameInput.val().trim(),
        lastName: lastNameInput.val().trim(),
        covidConfirmed: PosDate.val().trim(),
        currentCondition: condition.val().trim(),
        quarantineStart: qStart.val().trim(),
        quarantineEnd: qEnd.val().trim()

    };
    console.log(newEmployee);
    submitEmployee(newEmployee);
});


});


