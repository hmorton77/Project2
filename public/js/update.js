$(document).ready(function () {
    function updateEmployee(data) {
        $.put("/api/cases/", data)
    };

    // function deleteEmployee(data) {
    //     $.put("/api/cases/delete", data)
    // };

    // var firstNameInput = $("#firstName");
    // var lastNameInput = $("#lastName");
    // var PosDate = $("#posDate");
    // var condition = $("#condition");
    // var qStart = $("#qStart");
    // var qEnd = $("#qEnd");

    // function updateEmployee(post) {
    //     $.ajax({
    //         method: "PUT",
    //         url: "/api/posts",
    //         data: post
    //     })
    //         .then(function () {
    //             window.location.href = "/hospitalized.html";
    //         });
    // }

    $(".updateButton").on("click", function () {
        var updatedInfo = {
            id = "",
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

// $("#deleteButton").on("click", function () {
//     var identifier = {
//         id = ""
//     }
//     updateEmployee(identifier);

// });

// Testing for get request
$.get("api/cases/symptomatic").then(function(data){
    console.log(data)
  //   for (let i = 0; i < data.length; i++) {
  //   var div = document.createElement("div")
  // div.innerHTML = `
  // <p> firstName: ${data[i].firstName}</p>
  // `
  // console.log(div);
  // document.getElementById("symptomatic-employees").appendChild(div)
    
  // }
  })
  
  // var data = [
  //   {
  //     firstName: "Joe",
  //     lastName: "Bob"
  //   },
  //   {
  //     firstName: "Jill",
  //     lastName: "Bob"
  //   },
  //   {
  //     firstName: "Billy",
  //     lastName: "Bob"
  //   },
  // ]
  
  
  // for (let i = 0; i < data.length; i++) {
  //   var div = document.createElement("div")
  // div.innerHTML = `
  // <p> firstName: ${data[i].firstName}</p>
  // `
  // console.log(div);
  // document.getElementById("symptomatic-employees").appendChild(div)
    
  // }

