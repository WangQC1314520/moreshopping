$("form").validate();
$("section .form ul li:first").click(function(){
    $(this).css("border-bottom","2px solid green")
    $("section .form ul li:last").css("border-bottom","none")
    $("section .form .form1").css('display','block')
    $("section .form .form2").css("display",'none')
})

$("section .form ul li:last").click(function(){
  $("section .form ul li:first").css("border-bottom","none")
  $(this).css("border-bottom","2px solid green")
  $("section .form .form1").css('display','none')
  $("section .form .form2").css("display",'block')
})

$("section .form form1 input").keypress(function(){
    $(this).css("background","skyblue");
    if(!$(this).val){
        $(this).css("background","none");
    };
})

$("section .form form2 input").keypress(function(){
    $(this).css("background","skyblue");
    if(!$(this).val){
        $(this).css("background","none");
    };
})