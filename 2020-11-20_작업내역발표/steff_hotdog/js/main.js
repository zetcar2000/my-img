$(document).ready(function () {

    $(".gnb > ul").mouseover(function () {
        $(".header > .menu_bg").css({
            'height': '240px'
        });
        $(".site_bg").css({'z-index':'48'});
        $(".site_bg").css({'opacity':'1'});
    });

    $(".gnb > ul").mouseout(function () {
        $(".header > .menu_bg").css({
            'height': '0px'
        });
        $(".site_bg").css({'z-index':'0'});
        $(".site_bg").css({'opacity':'0'});
    });
    

    $(window).scroll(function () {
        var $scrollTop = $(this).scrollTop();
        if ($scrollTop > 50) {
            $(".gnb").css({
                'top': '0px'
            })
            $(".gnb").css({
                'position': 'fixed'
            })
            $(".gnb").css({
                'width': '100%'
            })
            $(".menu_bg").css({
                'top': '100px'
            })
            $(".menu_bg").css({
                'position': 'fixed'
            })
            $(".menu_bg").css({
                'width': '100%'
            })
        } else {
            $(".gnb").css({
                'top': '50px'
            }, )
            $(".gnb").css({
                'position': 'absolute'
            })
            $(".gnb").css({
                'width': '1180px'
            })
            $(".menu_bg").css({
                'top': '150px'
            })
            $(".menu_bg").css({
                'position': 'absolute'
            })
            $(".menu_bg").css({
                'width': '1180px'
            })
        }
    });

    $(".main_slide").slick({
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: true
    });

    $(".menu_slide").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false,
        dots: true,
        customPaging: function (slick, index) {
            //var names = ['ㅋㅋ1', 'ㅎㅎ2', 'ㅎㅎ3', 'ㅎㅎ4', 'ㅎㅎ5'] 이름코드
            //var name = names[index];
            
            return '<img src="img/hotdog_' + (index + 1) + 'as.png"/>'// + name;
        }
    });

});
