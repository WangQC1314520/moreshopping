

$("#mainNav .margin .table ul li").mouseenter(function(){
        $(this).children(".menu2").stop().show();//移入li  显示然后
//移入menu2  显示 但从menu2移出是隐藏
        $(this).children(".menu2").mouseleave(function(){
        $(this).stop().hide();
    })
})

$("#mainNav .margin .table ul li").mouseleave(function(){
    $(this).children(".menu2").stop().hide();
})