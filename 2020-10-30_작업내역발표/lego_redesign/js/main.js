$(document).ready(function(){
    
    $(window).scroll(function(){
        var $scrollTop = $(this).scrollTop();
        if($scrollTop > 40){
            $(".gnb").css({'top':'0px'})
            $(".gnb").css({'position':'fixed'})
        } else{
            $(".gnb").css({'top':'0px'},)
            $(".gnb").css({'position':'relative'})
        }
    });
    
    
    $(".main_slide").slick({
        prevArrow: "<div class='SlidePrev'><span></span></div>",
        nextArrow: "<div class='SlideNext'><span></span></div>",
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true
    });
    
    $(".slide1").click(function(){
        $(location).attr('href','index.html');
    });
    
    $(".slide2").click(function(){
        $(location).attr('href','https://www.lego.com/ko-kr/themes/mindstorms/about');
    });
    
    $(".slide3").click(function(){
        $(location).attr('href','https://www.lego.com/ko-kr/vip');
    });
    
    $(".slide4").click(function(){
        $(location).attr('href','https://www.lego.com/ko-kr/service/help/');
    });
    
});