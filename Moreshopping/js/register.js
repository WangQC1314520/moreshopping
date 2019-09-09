
     var str3=$("form input:eq(1)").val();
  
     $("form input:eq(0)").blur(function(){
        var str1=$("form input:eq(0)").val();
        console.log(str1)
         var Reg=/^1[3456789]\d{9}$/
         if(!Reg.test(str1)){
             alert("请输入正确的手机号")
         }
     })

     $("form input:eq(1)").blur(function(){
        var str2=$("form input:eq(1)").val();
        console.log(str2)
        var Reg=/[\da-zA-Z]{6,16}/;
         if(!Reg.test(str2)){
             alert("密码为字母和数字，6~16位")
         }
     })
    
     $("form input:eq(2)").blur(function(){
        var str2=$("form input:eq(2)").val();
        if(!str2==pobj.innerHTML){
            alert("验证码错误")
        }
     })




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