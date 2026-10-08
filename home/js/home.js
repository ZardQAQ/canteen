$(function () {
    // 加载动画
    setTimeout(function () {
        $(".fixed").stop().animate({
            opacity: 0
        }, function () {
            $(".fixed").css({
                display: 'none'
            })
        })
    }, 1500)
    // 页面头部
    $(document).scroll(function () {
        if ($(document).scrollTop() <= 75.5) {
            $(".nav").css({
                backgroundColor: "unset",
                top: '75.5px',
                position: 'absolute'
            })
        } else {
            $(".nav").css({
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                top: '0',
                position: 'fixed'
            })
        }
    })
    function banner() {
        var ban_xia = 0;
        var ban_jie = true;
        function dot() {
            $('.ban_dot_ul li').eq(ban_xia).css({
                width: '35px',
                boxShadow: '2px 5px 3px rgba(0, 0, 0, 0.466)'
            }).siblings().css({
                width: '25px',
                boxShadow: 'none'
            })
        }
        function ban_move(e) {
            $('.ban_img_ul').stop().animate({
                left: -$('.ban_img_ul>li').outerWidth(true) * ban_xia
            }, 1000, e)
            dot()
        }
        function ban_jie_fn(ea) {
            if (ban_jie) {
                ban_jie = false;
                ea()
                setTimeout(function () {
                    ban_jie = true
                }, 1060)
            }
        }
        $('.ban_img_ul').append($('.ban_img_ul li:eq(0)').clone())
        $('.ban_dot_ul li').click(function () {
            ban_xia = $(this).index();
            ban_move()
        })
        $('.ban_right').click(function () {
            ban_jie_fn(function () {
                ban_xia++;
                if (ban_xia >= $('.ban_dot_ul li').length) {
                    ban_move(function () {
                        $('.ban_img_ul').css({ left: 0 })
                    })
                    ban_xia = 0
                    dot()
                } else {
                    ban_move()
                }
            })
        })
        $('.ban_left').click(function () {
            ban_jie_fn(function () {
                ban_xia--;
                if (ban_xia <= -1) {
                    $('.ban_img_ul').css({ left: -$('.ban_img_ul>li').outerWidth(true) * $('.ban_dot_ul li').length })
                    ban_xia = $('.ban_dot_ul li').length - 1
                }
                ban_move()
            })
        })
        var ban_time = setInterval(function () {
            $('.ban_right').click()
        }, 4000)
        $('.banner').hover(function () {
            clearInterval(ban_time)
        }, function () {
            ban_time = setInterval(function () {
                $('.ban_right').click()
            }, 4000)
        })
        $(window).resize(function () {
            $('.ban_img_ul').css({ left: -$('.ban_img_ul>li').outerWidth(true) * ban_xia })
        })
    }
    banner()
    // 视屏轮播
    function v_banner() {
        var ban_xia = 0;
        var ban_jie = true;
        $(".ban_v_img_ul li video").eq(ban_xia)[0].play(); //播放第一个
        $(".ban_v_img_ul").append($(".ban_v_img_ul li:eq(0)").clone(true)); //复制
        // 检测视频播放完成
        $.each($(".ban_v_img_ul li video"), function (index, value) {
            value.addEventListener("ended", function () {
                $(".ban_v_right").click();
            });
        });
        // 播放方法
        function ban_movr(e) {
            $(".ban_v_img_ul").stop().animate(
                {
                    left: -$(".ban_v_img_ul li").innerWidth() * ban_xia,
                }, 1000, e);
            $(".ban_v_dot_ul li")
                .eq(ban_xia)
                .css({ backgroundColor: "rgb(226, 132, 60)" })
                .siblings()
                .css({
                    backgroundColor: "white",
                });
            $.each($(".ban_v_img_ul li video"), function (index, value) {
                value.pause();
                value.currentTime = 0;
            });
            $(".ban_v_img_ul li video").eq(ban_xia)[0].play();
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
        // 点击按钮
        $(".ban_v_dot_ul li").click(function () {
            ban_jie_fn(function () {
                ban_xia = $(this).index();
                ban_movr();
            })
        });
        // 右按钮
        $(".ban_v_right").click(function () {
            ban_jie_fn(function () {
                ban_xia++;
                if (ban_xia >= $(".ban_v_dot_ul li").length) {
                    ban_movr(function () {
                        $(".ban_v_img_ul").css({
                            left: 0,
                        });
                        $(".ban_v_img_ul li video").eq(0)[0].play();
                    });
                    ban_xia = 0;
                    $(".ban_v_dot_ul li")
                        .eq(0)
                        .css({ backgroundColor: "rgb(226, 132, 60)" })
                        .siblings()
                        .css({
                            backgroundColor: "white",
                        });
                } else {
                    ban_movr();
                }
            })

        });
        // 左按钮
        $(".ban_v_left").click(function () {
            ban_jie_fn(function () {
                ban_xia--;
                if (ban_xia <= -1) {
                    $(".ban_v_img_ul").css({
                        left:
                            -$(".ban_v_img_ul li").innerWidth() * $(".ban_v_dot_ul li").length,
                    });
                    ban_xia = $(".ban_v_dot_ul li").length - 1;
                }
                ban_movr();
            })

        });
        $(window).resize(function () {
            $(".ban_v_img_ul").css({
                left: -$(".ban_v_img_ul li").innerWidth() * ban_xia,
            });
        });
    }
    v_banner();

    function v_dot() {
        var xia = 0;
        $('.medium_dot_ul li').click(function () {
            xia = $(this).index();
            $('.medium_ul').stop().animate({
                left: -100 * xia + '%'
            }, 1000)
            $('.medium_dot_ul>li').eq(xia).css({
                borderBottom: '2px solid #55C7DC',
                bottom: '2px',
                color: '#55C7DC'
            }).siblings().css({
                borderBottom: 'none',
                bottom: '0',
                color: 'white'
            })
        })
    }
    v_dot()
    // 小动画
    function move_3D(wai, img_box) {
        console.log($(wai), $(img_box));
        $(wai).mousemove(function (e) {
            // 鼠标 x 坐标 - 元素左上角 x 坐标 - 元素宽度的一半)
            var fordY = (e.pageX - $(this).find(img_box).offset().left - ($(img_box).width() / 2)) / 10;
            var fordX = -(e.pageY - $(this).find(img_box).offset().top - ($(img_box).height() / 2)) / 10;
            // console.log(fordY)
            $(this).find(img_box).css({

                transform: "rotateY(" + fordY + "deg) rotateX(" + fordX + "deg)"
            })
        })
        $(wai).mouseleave(function () {
            $(img_box).stop().css({
                transform: "rotateY(0deg) rotateX(0deg)"
            }, 300)
        })
    }
    move_3D(".ford_wai", ".ford_find")
    // 点击切换
    function ford() {
        var ford_xia = 0;
        $('.ford_wai').click(function () {
            ford_xia++;
            if (ford_xia > $('.ford_find img').length - 1) {
                ford_xia = 0;
            }
            $('.ford_find img').eq(ford_xia).css({
                // display:'block',
                opacity: 1
            }).siblings().css({
                // display:'none',
                opacity: 0
            })
        })
    }
    ford()
    var ren_time = setInterval(function () {
        $('.ford_wai').click()
    }, 5000)

    $('.ford_wai').hover(function () {
        clearInterval(ren_time)
    }, function () {
        ren_time = setInterval(function () {
            $('.ford_wai').click()
        }, 5000)
    })
})