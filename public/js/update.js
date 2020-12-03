$(document).ready(function () {
    function updateEmployee(data) {
        $.post("/api/cases/", data)
    };
    var firstNameInput = $("#firstName");
    var lastNameInput = $("#lastName");
    var PosDate = $("#posDate");
    var condition = $("#condition");
    var qStart = $("#qStart");
    var qEnd = $("#qEnd");

    function updatePost(post) {
        $.ajax({
            method: "PUT",
            url: "/api/posts",
            data: post
        })
            .then(function () {
                window.location.href = "/hospitalized.html";
            });
    }

    $("#updateButton").on("click", function () {
        var updatedInfo = {
            firstName: firstNameInput.val().trim(),
            lastName: lastNameInput.val().trim(),
            covidConfirmed: PosDate.val().trim(),
            currentCondition: condition.val().trim(),
            quarantineStart: qStart.val().trim(),
            quarantineEnd: qEnd.val().trim()
        }
        console.log(updatedInfo);
        updatePost(updatedInfo);

    })
});

