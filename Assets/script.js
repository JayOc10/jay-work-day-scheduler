$(document).ready(function (){

    // Get values and localStorage 
    
    $(".saveBtn").on("click", function(){
        let. values = $(this).siblings(".description").vals();
        let time = $(this).parents().attr("id");

        localStorage.setItem(values, time)
    })
})

    
