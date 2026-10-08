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
    $('.move').click(function(){
        $('.logOn').css({
            transform: 'rotateX(90deg)'
        })
    })
    $('.esc').click(function(){
        $('.logOn').css({
            transform: 'rotateX(0deg)'
        })
    })
    // 登录验证
    $('.form').submit(function(){
        console.log($('#name').val(),$('#password').val());
        if($('#name').val()=='Zard1'){
            if($('#password').val()=='12345678'){
                alert('登录成功')
            }else{
                alert('密码错误')
            }
        }else{
            alert('用户名错误')
        }
        $('.log_text')

        return false
    })
    // 小动画
    $(".logOn_wai").mousemove(function (e) {
        // 鼠标 x 坐标 - 元素左上角 x 坐标 - 元素宽度的一半)
        var fordY = -(e.pageY - $(this).find(".logOn").offset().top - (($('body').height()-64)/2)) / 10;
        var fordX = -(e.pageX - $(this).find(".logOn").offset().left - ($('body').width()/2)) / 10;
        $(this).find(".logOn_move").css({
            left:fordX+'px',
            top:fordY+'px'
        })
        $('.form').css({
            boxShadow: fordX/5+'px '+fordY/5+'px 10px rgba(0, 0, 0, 0.613)'
        })
        $(".enroll").css({
            boxShadow: fordX/5+'px '+fordY/5+'px 10px rgba(0, 0, 0, 0.613)'
        })
        // $(".log_img").css({
        //     left: -fordX+'px',
        //     top: -fordY+'px'
        // })
    })
    $(".logOn_wai").mouseleave(function () {
        $(".logOn_move").stop().animate({
            left:0+'px',
            top:0+'px'
        },500)
        // $(".log_img").stop().animate({
        //     left:0+'px',
        //     top:0+'px'
        // },500)
    })
    
    function move_3D (wai,img_box){
        console.log($(wai),$(img_box));
        $(wai).mousemove(function (e) {
            // 鼠标 x 坐标 - 元素左上角 x 坐标 - 元素宽度的一半)
            var fordY = (e.pageX - $(this).find(img_box).offset().left - ($(img_box).width() / 2)) / 30;
            var fordX = -(e.pageY - $(this).find(img_box).offset().top - ($(img_box).height() / 2)) / 30;
            // console.log(fordY)
            $(this).find(img_box).css({
                transform: "rotateY(" + fordY + "deg) rotateX(" + fordX + "deg)"
            })
        })
        $(wai).mouseleave(function () {
            $(img_box).stop().css({
                transform: "rotateY(0deg) rotateX(0deg)"
            },300)
        })
    }
    // move_3D('.content','.log_img')
})