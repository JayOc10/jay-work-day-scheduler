// Start of Assigment 
// Get values and localStorage 

$(document).ready(function (){
    $(".saveBtn").on("click", function() {
        let values = $(this).parents(".description").val();
        let time = $(this).sublings().attr("id");

        localStorage.setItem(values, time);
    });


// Current time function and loop

function updateHour() {
    let currentTime = moment().hours();

    $(".time-block").each(function() {
      let hourBlock = parseInt($(this).attr("id").split("-")[1]);

      if (hourBlock < currentTime) {
        $(this).addClass("past");
      } 
      else if (currentTime === hourBlock) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  updateHour();

  let interval = setInterval(updateHour, 18000);
  

//Save the data from localStorage

$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));

$("#currentDay").text(moment().format("dddd, MMMM Do"));

});


