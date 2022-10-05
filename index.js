
$("#currentDay").text(moment().format("MMM Do YY")); 
var hour= moment().hours(); 
console.log (hour) 
function timeKeeping() { 
    $(".time-block").each(function(){ 
        var hourBlock= $(this).attr("id"); 
        if (hourBlock<hour){ 
            $(this).addClass("past")
        } 
        if (hourBlock==hour){ 
            $(this).addClass("present")
        } 
        if (hourBlock>hour){ 
            $(this).addClass("future")
        } 
})
}
timeKeeping() 
$(".saveBtn").on("click", function(){ 
    var timeCurrent=$(this).parent().attr("id"); 
    var textArea=$(this).siblings("textarea").val(); 
localStorage.setItem(timeCurrent, textArea); 


}) 
$("#9 textarea").val(localStorage.getItem("9")) 
$("#10 textarea").val(localStorage.getItem("10")) 
$("#11 textarea").val(localStorage.getItem("11")) 
$("#12 textarea").val(localStorage.getItem("12")) 
$("#13 textarea").val(localStorage.getItem("13")) 
$("#14 textarea").val(localStorage.getItem("14")) 
$("#15 textarea").val(localStorage.getItem("15")) 
$("#16 textarea").val(localStorage.getItem("16")) 
$("#17 textarea").val(localStorage.getItem("17")) 
$("#18 textarea").val(localStorage.getItem("18")) 