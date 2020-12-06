$(document).ready(function () {
    function updateEmployee(data) {
        $.put("/api/cases/", data)}

    $(".updateButton").on("click", function () {
        var updatedInfo = {
            id : "",
            firstName: firstNameInput.val().trim(),
            lastName: lastNameInput.val().trim(),
            covidConfirmed: PosDate.val().trim(),
            currentCondition: condition.val().trim(),
            quarantineStart: qStart.val().trim(),
            quarantineEnd: qEnd.val().trim()
        }
        console.log(updatedInfo);
        updateEmployee(updatedInfo);

    })
});
//finish post to backend
$("#webapi").on("click", function () {
    var email = $(".input").val()

    $.post("/api/sendemail", {email}, function(results) {
        console.log(results)
        $( ".result" ).html(results);

    })
 
});
