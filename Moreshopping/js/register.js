


//验证码的输入
  var pObj=document.querySelector("p");
  var btnObj=document.getElementsByClassName("btn")[0];
  btnObj.style.cssText=" width:64px;height:32px; "
  pObj.style.cssText="width:200px;height:32px;background:#e5e5e5;font-size:18px;text-align:center";
  code(pObj);
  btnObj.onclick=function(){
     code(pObj);
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
//信息的判断
   var x=false;
   var y=false;
   var z=false;

  $("form input:eq(0)").blur(function(){
      var str1=$("form input:eq(0)").val();

      var Reg=/^1[3|4|5|7|8]\d{9}$/;
      if(!Reg.test(str1)){
         alert("请输入正确的手机号")
         return x=false;
      }else{
         return x=true;
      }
   })

$("form input:eq(1)").blur(function(){
   var str2=$("form input:eq(1)").val();
   var Reg=/[\da-zA-Z]{6,16}/;
    if(!Reg.test(str2)){
        alert("密码为字母和数字，6~16位")
        return y=false;
    }else{
       return y=true;
    }
})

$("form input:eq(2)").blur(function(){
   var str3=$("form input:eq(2)").val();
   
   if(str3!==pObj.innerHTML){
       alert("验证码错误")
       return z=false;
   }else{
       return z=true;
   }
})



//获得数据进行拼接成json字符串  然后存储到localstorage；



    //1点击之后存储数据进行跳转；
   var message=""
   $(".sub").click(function(){
     console.log(x,y,z);
     var checkObj=document.querySelector(".check");
      var s=checkObj.checked;
      if(x&&y&&z&&s){
         console.log(1111);
         var user= $("form input:eq(0)").val();
         var pass= $("form input:eq(1)").val();
         //2进行拼接
        
          message+=`${user}&${pass}&`;
         
      // console.log(str);
         //3存储数据 
            localStorage.setItem("user",message);
         
      // console.log(localStorage.getItem("user"))
        
      }
   })





 