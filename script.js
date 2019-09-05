$(document).ready(function() {
    $(".menu-trigger").click(function() {
        $(".left-nav, .right-nav").slideToggle(300);
    });
    $(window).resize(function(){
        if($(window).width()>865) {
            $(".left-nav, .right-nav").attr("display", "flex");
        }
    });
});