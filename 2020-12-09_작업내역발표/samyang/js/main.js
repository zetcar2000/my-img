$(document).ready(function(){
    
   $(".main_slide").slick({
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true
    });
    
    $(".info_button > .button1").click(function(){
        
        var $this = $(this);
       
   //     if($(this).hasClass("active")){
  //          $(this).siblings().removeClass("active");
  //          $(this).removeClass("active");
   //         $(".info_slides > div").removeClass("active");
     //   }
 //       else {
            $(this).siblings().removeClass("active");
            $(this).siblings().children().removeClass("active");
            $(this).addClass("active");
            $(".info_slides > div:not(.info_slide1)").removeClass("active");
            $(".button1 > span ").addClass("active");
            $(".info_slide1").addClass("active");
 //       }
        
    });
    
    $(".info_button > .button2").click(function(){
        
        var $this = $(this);
       
   //     if($(this).hasClass("active")){
  //          $(this).siblings().addClass("active");
   //         $(this).siblings().removeClass("active");
   //         $(this).removeClass("active");
   //         $(".info_slides > div").removeClass("active");
   //     }
   //     else {
            $(this).siblings().removeClass("active");
            $(this).siblings().children().removeClass("active");
            $(this).addClass("active");
            $(".info_slides > div").removeClass("active");
            $(".button2 > span ").addClass("active");
            $(".info_slide2").addClass("active");
   //     }
        
    });
    
    $(".info_button > .button3").click(function(){
        
        var $this = $(this);
       
   //     if($(this).hasClass("active")){
   //         $(this).siblings().addClass("active");
   //         $(this).siblings().removeClass("active");
    //        $(this).removeClass("active");
    //        $(".info_slides > div").removeClass("active");
    //    }
  //      else {
            $(this).siblings().removeClass("active");
            $(this).siblings().children().removeClass("active");
            $(this).addClass("active");
            $(".info_slides > div").removeClass("active");
            $(".button3 > span ").addClass("active");
            $(".info_slide3").addClass("active");
    //    }
        
    });
    
    $(".info_button > .button4").click(function(){
        
        var $this = $(this);
       
    //    if($(this).hasClass("active")){
    //        $(this).siblings().addClass("active");
    //        $(this).siblings().removeClass("active");
     //       $(this).removeClass("active");
     //       $(".info_slides > div").removeClass("active");
     //   }
     //   else {
            $(this).siblings().removeClass("active");
            $(this).siblings().children().removeClass("active");
            $(this).addClass("active");
            $(".info_slides > div").removeClass("active");
            $(".button4 > span ").addClass("active");
            $(".info_slide4").addClass("active");
      //  }
        
    });
    
    $(".info_slide1").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true,
        vertical:true,
        verticalSwiping:true,
        prevArrow: "<div class='slideprev'></div>",
        nextArrow: "<div class='slidenext'></div>"
    });
    
    $(".info_slide2").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true,
        vertical:true,
        verticalSwiping:true,
        prevArrow: "<div class='slideprev'></div>",
        nextArrow: "<div class='slidenext'></div>"
    });
    
    $(".info_slide3").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true,
        vertical:true,
        verticalSwiping:true,
        prevArrow: "<div class='slideprev'></div>",
        nextArrow: "<div class='slidenext'></div>"
    });
    
    $(".info_slide4").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true,
        vertical:true,
        verticalSwiping:true,
        prevArrow: "<div class='slideprev'></div>",
        nextArrow: "<div class='slidenext'></div>"
    });
    
    $(".eventslide").slick({
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true,
        dots:true,
        dotsClass:"slick-dots"
    });
    
    $(".youtube_slide").slick({
        slidesToShow:5,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true,
        prevArrow: "<div class='youtube_prev'></div>",
        nextArrow: "<div class='youtube_next'></div>"
    });
    
    $(".youtube_1").click(function(){
        
        if($(".youtube_movie1").hasClass("active")){
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie1").removeClass("active");
        }
        else {
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie1").addClass("active");
        }
       
    });
    
    $(".youtube_2").click(function(){
        
        if($(".youtube_movie2").hasClass("active")){
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie2").removeClass("active");
        }
        else {
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie2").addClass("active");
        }
        
        });
    
        $(".youtube_3").click(function(){
        
        if($(".youtube_movie3").hasClass("active")){
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie3").removeClass("active");
        }
        else {
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie3").addClass("active");
        }
            
            });
    
        $(".youtube_4").click(function(){
        
        if($(".youtube_movie4").hasClass("active")){
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie4").removeClass("active");
        }
        else {
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie4").addClass("active");
        }
            
            });
        
        $(".youtube_5").click(function(){
        
        if($(".youtube_movie5").hasClass("active")){
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie5").removeClass("active");
        }
        else {
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie5").addClass("active");
        }
       
        });
    
    
     $(".youtube_6").click(function(){
        
        if($(".youtube_movie6").hasClass("active")){
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie6").removeClass("active");
        }
        else {
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie6").addClass("active");
        }
       
        });
    
     $(".youtube_7").click(function(){
        
        if($(".youtube_movie7").hasClass("active")){
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie7").removeClass("active");
        }
        else {
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie7").addClass("active");
        }
       
        });
    
    
     $(".youtube_8").click(function(){
        
        if($(".youtube_movie8").hasClass("active")){
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie8").removeClass("active");
        }
        else {
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie8").addClass("active");
        }
       
        });
    
     $(".youtube_9").click(function(){
        
        if($(".youtube_movie9").hasClass("active")){
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie9").removeClass("active");
        }
        else {
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie9").addClass("active");
        }
       
        });
    
     $(".youtube_10").click(function(){
        
        if($(".youtube_movie10").hasClass("active")){
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie10").removeClass("active");
        }
        else {
            $(".youtube_movie > div").removeClass("active");
            $(".youtube_movie10").addClass("active");
        }
       
        });
    
    $(window).scroll(function(){
        
        
      var $scrollTop = $(this).scrollTop();
        
      if($scrollTop < 969){
        $(".top-button").css({'display': 'none'});
      } else{
        $(".top-button").css({'display':'block'});
      }
    });

    $(".top-button").click(function(){
      $( 'html, body' ).animate( { scrollTop : 0 });
    });
    
});

function play_youtube(selector) {
    $('.youtube_movie > :not(' + selector + ') > iframe').attr('src', '');
    var src = $('.youtube_movie > ' + selector + ' > iframe').attr('data-src') + '?autoplay=1&muted=1';
    $('.youtube_movie > ' + selector + ' > iframe').attr('src', src);
}
