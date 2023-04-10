$(document).ready(function(){
    for(var i=0; i <100; i++){
        $("<div class=\"color\"></div>").appendTo('.flex-container')
        var back = ["white","blue","red","green","pink","yellow","orange","purple","gray","aqua"];
        var rand = back[Math.floor(Math.random() * back.length)];
        $(".color").eq(i).css("background",rand)
    }
    $(".color").mouseenter(function(){
        var color = $(this).css("background-color");
        $("body").css("background-color",color);
    });
    $(".color").mouseleave(function(){
        $("body").css("background-color","white");
    });
})
