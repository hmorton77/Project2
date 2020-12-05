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

    var firstNameInput = $("#firstName");
    var lastNameInput = $("#lastName");
    var hosp = $("#hosp");
    var condition = $("#condition");
    var qStart = $("#qStart");
    var qEnd = $("#qEnd");

    function submitEmployee(data) {
        $.post("/api/cases/", data)
    };
    



    // Click event to record employee details and call post request.
    $("#newEmp").on("click", function () {
        // event.preventDefault();
        console.log("clicked");
        // On success, post to the console.
        var newEmployee = {
            firstName: firstNameInput.val().trim(),
            lastName: lastNameInput.val().trim(),
            hospitalized: hosp.val().trim(),
            currentCondition: condition.val().trim(),
            quarantineStart: qStart.val().trim(),
            quarantineEnd: qEnd.val().trim()
        };
        console.log(newEmployee);
        submitEmployee(newEmployee);
    });




});


function test() {
    alert("Information Submitted!");
    console.log($('#validationCustom01').val())
    console.log($('#validationCustom02').val())
    console.log($('#validationCustom03').val())
    console.log($('#validationCustom04').val())
    console.log($('#validationCustom05').val())
    console.log($('#validationCustom06').val())
    console.log($('#date').val())
    return true;
 }



// $('#form').submit(function(){
//     $.ajax({
//       url: $('#form').attr('action'),
//       type: 'POST',
//       data : $('#form').serialize(),
//       success: function(){
//         console.log('form submitted.');
//       }
//     });
//     return false;
// });