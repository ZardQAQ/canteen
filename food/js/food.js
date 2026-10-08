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
    // 轮播图
    function banner() {
        var ban_xia = 0;
        var ban_jie = true;
        $('.ban_dot_ul').append($('.ban_dot_wai').eq(0).clone())
        function ban_move(e) {
            $('.ban_dot_ul').stop().animate({
                left: -100* ban_xia+'%'
            }, 1000, e)
        }
        // 节流阀
        function ban_jie_fn(ea) {
            if (ban_jie) {
                ban_jie = false;
                ea()
                setTimeout(function () {
                    ban_jie = true
                }, 1060)
            }
        }
        // 点击轮播图下按钮
        $('.ban_dot_ul li').click(function () {
            ban_xia = $(this).index();
            ban_move()
        })
        // 点击右按钮
        $('.ban_right').click(function () {
            ban_jie_fn(function () {
                ban_xia++;
                if (ban_xia >= $('.ban_dot_wai').length-1) {
                    ban_move(function () {
                        $('.ban_dot_ul').css({ left: 0 })
                    })
                    ban_xia = 0
                } else {
                    ban_move()
                }
            })
        })
        // 点击左按钮
        $('.ban_left').click(function () {
            ban_jie_fn(function () {
                ban_xia--;
                
                if (ban_xia <= -1) {
                    $('.ban_dot_ul').css({ left: -100 * ($('.ban_dot_wai').length-1)+'%'})
                    ban_xia = $('.ban_dot_wai').length - 2
                }
                ban_move()
            })
        })
    }
    banner()
    // 按钮切换
    var list_xia = 0;
    $(".food_list>li").hover(function(){
        list_xia = $(this).index();
        $('.food_wai').css({
            left:-100*list_xia+'%'
        })
        $(".food_list li").eq(list_xia).css({
            backgroundColor: '#d72222',
            color: 'white',
            fontWeight: '700'
        }).siblings().css({
            backgroundColor: 'white',
            color: 'black',
            fontWeight: '500'
        })
        $(".food_list li img").css({
            border: '3px solid #e0e0e0',
            transform: 'scale(1,1)'
        })
        $(".food_list li img").eq(list_xia).css({
            border: '3px solid white',
            transform: 'scale(1.1,1.1)'
        })
    })
})