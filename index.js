
$(document).on("scroll", function(){
    $("header").addClass("fixed")
})

$(document).on("scroll", function(){
    $(".loader").addClass("fixed")
})

$("#click").on("click", () =>{
    $(".loader0").addClass("loader");
setTimeout(() => {
    $(".form").css({
        "display":"block"
    })
    $("#click").css({
        "display":"none"
    })
    $("#click2").css({
        "display":"block"

    })
}, 3000)
});
let counter = 3;
$("#click2").on("click", () =>{
    $(".loader0").addClass("loader");
    let int = setInterval(() => {
counter--;
if(counter === 0){
    clearInterval(int);
alert("Вы закрыли форму")
}
}, 1000);

setTimeout(() => {
    $(".form").css({
        "display":"none"
    })
    $("#click").css({
        "display":"block"
    })
    $("#click2").css({
        "display":"none"

    })
}, 3000)
});

$(".open").on("click", () => {
    $(".modal").animate({
        "top":"100px"
    }, 300)
})

$(".close").on("click", () => {
    $(".modal").animate({
        "top":"-800px"
    }, 300)
})

