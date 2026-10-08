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
    function plug(){
        // function $(obj){
        //     return document.querySelector(obj)
        // }
        // var list = document.querySelectorAll('.banner_img_box');
        // for(var i = 0 ;i>list.length;i++){
        //     list[i].addEventListener('mousemove',function(e){
        //         var x = $('.banner').offsetLeft-e.pageX;
        //         var y = $('.banner').offsetTop-e.pageY;
        //         console.log(this.$('.move');
        //         this.$('.move').style.left = -(x+$(".move").offsetWidth/2)+'px'
        //         this.$('.move').style.top = -(y+$(".move").offsetHeight/2)+'px'
        //         if($('.move').offsetLeft<0){
        //             $('.move').style.left = 0
        //         }else if($('.move').offsetLeft>$(".banner_img_box").offsetWidth-$('.move').offsetWidth){
        //             $('.move').style.left = $(".banner_img_box").offsetWidth-$('.move').offsetWidth+'px'
        //         }
        //         if($('.move').offsetTop<0){
        //             $('.move').style.top = 0
        //         }else if($('.move').offsetTop>$(".banner_img_box").offsetHeight-$('.move').offsetHeight){
        //             $('.move').style.top = $(".banner_img_box").offsetHeight-$('.move').offsetHeight+'px'
        //         }
        //         $('.banner_da>img').style.width = $('.banner_img_box>img').offsetWidth * $('.banner_da').offsetWidth/$('.move').offsetWidth+'px';
        //         $('.banner_da>img').style.left = -$(".move").offsetLeft*$('.banner_da>img').offsetWidth/$('.banner_img_box>img').offsetWidth+'px'
        //         $('.banner_da>img').style.top = -$(".move").offsetTop*$('.banner_da>img').offsetHeight/$('.banner_img_box>img').offsetHeight+'px'
        //     })
        // }
        console.log($('.banner_img_box').width());
        $('.banner_img_box').mousemove(function(e){
            var x = $('.banner').offset().left - e.pageX;
            var y = $('.banner').offset().top - e.pageY;
            $(this).find('.move').css({left:-(x+$(".move").width()/2)+'px'})
            $(this).find('.move').css({top:-(y+$(".move").height()/2)+'px'})
            console.log($(".banner_img_box").width()-$('.move').width());
            if($(this).find('.move').position().left < 0){
                $(this).find('.move').css({left:0})
            } else if ($(this).find('.move').position().left > $(this).width()-$('.move').width()){
                $('.move').css({left:$(this).width()-$('.move').width()+'px'})
            }
            if($(this).find('.move').position().top<0){
                $(this).find('.move').css({top:0})
            }else if($(this).find('.move').position().top>$(this).height()-$('.move').height()){
                $('.move').css({top:$(this).height()-$('.move').height()+'px'})
            }
            $(this).find('.banner_da>img').css({width:$(this).find('.banner_img_box>img').width() * $(this).find('.banner_da').width()/$('.move').width()+'px'}) ;
            $(this).find('.banner_da>img').css({left:-$(this).find(".move").position().left*$(this).find('.banner_da>img').width()/$(this).width()+'px'})
            $(this).find('.banner_da>img').css({top:-$(this).find(".move").position().top*$(this).find('.banner_da>img').height()/$(this).height()+'px'})
        })
    }
    plug()

    $(".ban_dot_list_ul li").hover(function(){
        var dot_xia = $(this).index()
        $(".ban_img_ul li").eq(dot_xia).css({
            display:'block'
        }).siblings().css({
            display:'none'
        })
        $('.ban_dot_list_ul li').eq(dot_xia).css({
            border: '2px solid #e53e41'
        }).siblings().css({
            border: '2px solid transparent'
        })

        $('.ban_txt_ul li').eq(dot_xia).css({
            display:'block'
        }).siblings().css({
            display:'none'
        })
    })
    // 列表
    var list_xia = 0;
    $(".food_list>li").hover(function(){
        list_xia = $(this).index();
        $('.food_wai').css({
            left:-100*list_xia+'%'
        })
        $(".food_list li").eq(list_xia).css({
            backgroundColor: 'rgb(223, 48, 51)',
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