$("#signup").click(function(){
    $("form").removeClass("toLeft");
    $("form").addClass("toRight");
    $(".boxes").css("background", "hsl(355, 73%, 52%)");
    $("body").css("background", "var(--red)");
    $("section").first().css("left", "-30vw");
    $("section").first().css("right", "30vw");
    $("section").last().css("left", "0");
    $("section").last().css("right", "0");
})

$("#signin").click(function(){
    $("form").removeClass("toRight");
    $("form").addClass("toLeft");
    $(".boxes").css("background", "hsl(271, 75%, 58%)");
    $("body").css("background", "var(--blue)");
    $("section").first().css("left", "0");
    $("section").first().css("right", "0");
    $("section").last().css("left", "30vw");
    $("section").last().css("right", "-30vw");

})