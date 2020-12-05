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

