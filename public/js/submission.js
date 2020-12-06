$(document).ready(function () {
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

    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var posDate = $("#posDate");
    var condition = $("#condition");
    var qStart = $("#qStart");
    var qEnd = $("#qEnd");

    function submitEmployee(data) {
        console.log("jQuerypost call")
        $.post("/api/cases", data)
    };
    



    // Click event to record employee details and call post request.
    $("#newEmp").on("click", function () {
        // event.preventDefault();
        console.log("clickity");
        console.log(firstName.val());
        // On success, post to the console.
        var newEmployee = {
            firstName: firstName.val().trim(),
            lastName: lastName.val().trim(),
            covidConfirmed: posDate.val().trim(),
            currentCondition: condition.val().trim(),
            quarantineStart: qStart.val().trim(),
            quarantineEnd: qEnd.val().trim()
        };
        console.log(newEmployee);
        submitEmployee(newEmployee);
    });




});



