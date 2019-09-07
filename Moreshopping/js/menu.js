

$("#mainNav .margin .table ul li").mouseenter(function(){

       $("#mainNav .margin .menu2").stop().show();//移入li  显示然后
//移入menu2  显示 但从menu2移出是隐藏
        $("#mainNav .margin .menu2").mouseleave(function(){
        $("#mainNav .margin .menu2").stop().hide();
    })
})

$("#mainNav .margin .table ul li").mouseleave(function(){
      // $("#mainNav .margin .menu2").css("display","none");
})