//css样式书写
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

//验证码
var p1Obj=document.getElementsByTagName("p")[0];
var p2Obj=document.getElementsByTagName("p")[1];
var btn1Obj=document.getElementsByClassName("btn")[0];
var btn2Obj=document.getElementsByClassName("btn")[1];
btn1Obj.style.cssText=" width:64px;height:32px; "
btn2Obj.style.cssText=" width:64px;height:32px; "
code(p1Obj);
code(p2Obj);
btn1Obj.onclick=function(){
   code(p1Obj);
   code(p2Obj);
}
btn2Obj.onclick=function(){
    code(p1Obj);
    code(p2Obj);
 }
function code(obj){
 var arr=["a","b","c","d","d","e","f","g","h","i","g","k","i","m","n","o","p","q","r","s","t","u","v","w","x","y","z",1,2,3,4,5,6,7,8,9,0]
 var  str=""
 for(var i=0;i<4;i++){
    str+=arr[random(0,35)];
 }
 obj.innerHTML=str;
}
function random(min,max){
return parseInt(Math.random()*(max-min)+min)
}   


//信息判断1先读取数据，数据修改之后判断，判断正确则进入主页，
//判断错误则弹出注册信息。
var  message=localStorage.getItem("user");

console.log(localStorage.getItem("user"))
var  account=message.split("&");
// 判断验证码
var x=false;
$(".form1 input:eq(2)").blur(function(){
    var str3=$(".form1 input:eq(2)").val();
    
    if(str3!==p1Obj.innerHTML){
        alert("验证码错误")
        return x=false;
    }else{
        return x=true;
    }
 })
 
$(".form1 input:eq(4)").click(function(){
     //给登录绑定事件点击事件然后进行判断
     //首先先读取localstorage的值与val值判断是否相等
     if(x){
         console.log(11111111111)
         for(var i=0;i<account.length;i++){
             if(account[i]==$(".form1 input:eq(0)").val()){
                if(account[i+1]==$(".form1 input:eq(1)").val()){
                    window.location.href="http://localhost/Moreshopping/index.html";
                }
             }
         }
     }
})

var y=false;
$(".form2 input:eq(2)").blur(function(){
    var str3=$(".form2 input:eq(2)").val();
    
    if(str3!==p2Obj.innerHTML){
        alert("验证码错误")
        return y=false;
    }else{
        return y=true;
    }
 })
 
$(".form2 input:eq(4)").click(function(){
     //给登录绑定事件点击事件然后进行判断
     //首先先读取localstorage的值与val值判断是否相等
     if(y){
         for(var i=0;i<account.length;i++){
             if(account[i]==$(".form2 input:eq(0)").val()){

                if(account[i+1]==$(".form2 input:eq(1)").val()){
                  // 
                    window.location.href="http://localhost/Moreshopping/index.html";
                }
             }
         }
     }
})











