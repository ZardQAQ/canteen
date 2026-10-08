$(function () {
    // 页面头部
    $(document).scroll(function () {
        if ($(document).scrollTop() <= 75.5) {
            $(".nav").css({
                backgroundColor: "unset" ,
                top:'75.5px',
                position: 'absolute'
            })
        } else {
            $(".nav").css({ 
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                top:'0',
                position: 'fixed'
            })
        }
    })
    function banner(){
        var ban_xia = 0;
        var ban_jie = true;
        function dot(){
            $('.ban_dot_ul li').eq(ban_xia).css({
                width: '35px',
                boxShadow: '2px 5px 3px rgba(0, 0, 0, 0.466)'
            }).siblings().css({
                width: '25px',
                boxShadow: 'none'
            })
        }
        function ban_move(e){
            $('.ban_img_ul').stop().animate({
                left:-$('.ban_img_ul>li').outerWidth(true)*ban_xia
            },1000,e)
            dot()
        }
        function ban_jie_fn(ea){
            if(ban_jie){
                ban_jie=false;
                ea()
                setTimeout(function(){
                    ban_jie = true
                },1060)
            }
        }
        $('.ban_img_ul').append($('.ban_img_ul li:eq(0)').clone())
        $('.ban_dot_ul li').click(function(){
            ban_xia = $(this).index();
            ban_move()
        })
        $('.ban_right').click(function(){
            ban_jie_fn(function(){
                ban_xia++;
                if(ban_xia>=$('.ban_dot_ul li').length){
                    ban_move(function(){
                        $('.ban_img_ul').css({left:0})
                    })
                    ban_xia=0
                    dot()
                }else{
                    ban_move()
                }
            })
        })
        $('.ban_left').click(function(){
            ban_jie_fn(function(){
                ban_xia--;
                if(ban_xia<=-1){
                    $('.ban_img_ul').css({left:-$('.ban_img_ul>li').outerWidth(true)*$('.ban_dot_ul li').length})
                    ban_xia=$('.ban_dot_ul li').length-1
                }
                ban_move()
            })
        })
        var ban_time = setInterval(function(){
            $('.ban_right').click()
        },4000)
        $('.banner').hover(function(){
            clearInterval(ban_time)
            console.log('lbt停');
        },function(){
            ban_time = setInterval(function(){
                $('.ban_right').click()
            },4000)
        })
        $(window).resize(function(){
            $('.ban_img_ul').css({left:-$('.ban_img_ul>li').outerWidth(true)*ban_xia})
        })
    }
    banner()

    function banner2(){
        var mob_xia = 0;
        function mob_pan(){
            if(mob_xia >= $('.mob_ul li').length){
                mob_xia = 0
            }
            if(mob_xia <= -1){
                mob_xia = $('.mob_ul li').length-1
            }
            console.log(mob_xia);
            $('.mob_ul li').eq(mob_xia).css({
                opacity: '1',
                zIndex: '1'
            }).siblings().css({
                opacity: '0',
                zIndex: '0'
            })
        }
        $('.mob_left').click(function(){
            mob_xia--;
            mob_pan()
        })
        $('.mob_right').click(function(){
            mob_xia++;
            mob_pan()
        })

        var mob_time = setInterval(function(){
            $('.mob_right').click()
        },5000)
        $('.mob_img_box').hover(function(){
            clearInterval(mob_time)
        },function(){
            mob_time = setInterval(function(){
                $('.mob_right').click()
            },5000)
        })

    }
    banner2()
})