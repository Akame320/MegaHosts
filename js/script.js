$(function () {

    for (var i = 0; i < $(".information__row-title").length; i++) {
        var h = +$(".information__row-title").eq(i)[0].offsetHeight;
        $(".information__row-title").eq(i).parent(".information__row").attr("data-height-no-active", h)
    }

    for (var i = 0; i < $(".information__row-text").length; i++) {
        var h = +$(".information__row-text").eq(i)[0].offsetHeight;
        h += +$(".information__row-title").eq(i)[0].offsetHeight;
        $(".information__row-text").eq(i).parent(".information__row").attr("data-height-active", h)
    }

    for(var i = 0 ; i < $(".information__row").length; i++){
        var h = +$(".information__row").eq(i).attr("data-height-no-active");
        $(".information__row").eq(i).animate({
            height : h
        }, 500);
    }
    $(".information__row").attr("data-active", "false");

    headerFixed();

});
$(".information__row").on("click", function () {

    if($(this).attr("data-active") === "false"){

        $(".information__row").attr("data-active", "true")
        for(var i = 0 ; i < $(".information__row").length; i++) {
            var h = +$(".information__row").eq(i).attr("data-height-no-active");
            $(".information__row").eq(i).animate({height: h}, 100);
        }

        var hh = $(this).attr("data-height-active");
        $(".information__row").attr("data-active", "false");
        $(this).attr("data-active", "true");
        $(this).animate({
            height : hh
        }, 500)
    }else{
        $(".information__row").attr("data-active", "false")
        for(var i = 0 ; i < $(".information__row").length; i++){
            var h = +$(".information__row").eq(i).attr("data-height-no-active");
            $(".information__row").eq(i).animate({
                height : h
            }, 100);
        }
    }
})

$('#header__burger').on("click", function () {
    $("#header__burger").toggleClass("active");
    $("#header").toggleClass("active")
})

function headerFixed() {
    var heightIntro = $("#intro")[0].offsetHeight;
    var scrollOffset = 0;

    scrollOffset > heightIntro ? $("#header").addClass("fixed") : $("#header").removeClass("fixed");

    $(window).on("scroll", function () {
        scrollOffset = $(window).scrollTop();
        scrollOffset > heightIntro ? $("#header").addClass("fixed") : $("#header").removeClass("fixed");
    })
}