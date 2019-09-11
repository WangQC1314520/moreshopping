
//验证码的输入
//   var pObj=document.querySelector("p");
//   var btnObj=document.getElementsByClassName("btn")[0];
//   btnObj.style.cssText=" width:64px;height:32px; "
//   pObj.style.cssText="width:200px;height:32px;background:#e5e5e5;font-size:18px;text-align:center";
//      code(pObj);
//   btnObj.onclick=function(){
//      code(pObj);
//   }
//   function code(obj){
//    var arr=["a","b","c","d","d","e","f","g","h","i","g","k","i","m","n","o","p","q","r","s","t","u","v","w","x","y","z",1,2,3,4,5,6,7,8,9,0]
//    var  str=""
//    for(var i=0;i<4;i++){
//       str+=arr[random(0,35)];
//    }
//    obj.innerHTML=str;
//  }
//  function random(min,max){
//  return parseInt(Math.random()*(max-min)+min)
// }     
//信息的判断
   // var x=false;
   // var y=false;
   // var z=false;

//   $("form input:eq(0)").blur(function(){
//       var str1=$("form input:eq(0)").val();

//       var Reg=/^1[3|4|5|7|8]\d{9}$/;
//       if(!Reg.test(str1)){
//          alert("请输入正确的手机号")
//          return x=false;
//       }else{
//          return x=true;
//       }
//    })

// $("form input:eq(1)").blur(function(){
//    var str2=$("form input:eq(1)").val();
//    var Reg=/[\da-zA-Z]{6,16}/;
//     if(!Reg.test(str2)){
//         alert("密码为字母和数字，6~16位")
//         return y=false;
//     }else{
//        return y=true;
//     }
// })

// $("form input:eq(2)").blur(function(){
//    var str3=$("form input:eq(2)").val();
   
//    if(str3!==pObj.innerHTML){
//        alert("验证码错误")
//        return z=false;
//    }else{
//        return z=true;
//    }
// })

//获得数据进行拼接成json字符串  然后存储到localstorage；

class Storage{
   constructor(){
      this.checkObj=document.querySelector(".check");
      this.codejudge();
      this.judge();
      this.addEvent();
   }
   //验证码产生
   codejudge(){
            this.pObj=document.querySelector("p");
            this.btnObj=document.getElementsByClassName("btn")[0];
            this.btnObj.style.cssText=" width:64px;height:32px; "
            this.pObj.style.cssText="width:200px;height:32px;background:#e5e5e5;font-size:18px;text-align:center";
               code(this.pObj);
            this.btnObj.onclick=function(){
               code(this.pObj);
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


   }
//输入框正则判断
   judge(){
            this.x=false;
            this.y=false;
            this.z=false;
            this.s=this.checkObj.checked;
         
         $("form input:eq(0)").blur(function(){
               var str1=$("form input:eq(0)").val();
         
               var Reg=/^1[3|4|5|7|8]\d{9}$/;
               if(!Reg.test(str1)){
                  alert("请输入正确的手机号")
                  return this.x=false;
               }else{
                  return this.x=true;
               }
            })
         
         $("form input:eq(1)").blur(function(){
            var str2=$("form input:eq(1)").val();
            var Reg=/[\da-zA-Z]{6,16}/;
            if(!Reg.test(str2)){
               alert("密码为字母和数字，6~16位")
               return this.y=false;
            }else{
               return this.y=true;
            }
         })
         
         $("form input:eq(2)").blur(function(){
            var str3=$("form input:eq(2)").val();
            
            if(str3!==pObj.innerHTML){
               alert("验证码错误")
               return this.z=false;
            }else{
               return this.z=true;
            }
         })
   }
//点击之后存储数据。
   addEvent(){
      $(".sub").click(function(){
         if(this.x&&this.y&&this.z&&this.s){
           // console.log(1111);判断是否进入；
                      this.users= $("form input:eq(0)").val();
                      this.password= $("form input:eq(1)").val();
                     //判断之前有没有相同的locolstorage；
                      this.message=localStorage.getItem("message");
                      this.message=message?JSON.parse(message):[];
                     //2进行拼接
                     if(this.message.length<1){
                        this.message.push({
                           user:this.users,
                           pass:this.password,
                           onoff:0    //判断是否登录；
                        })
                     }else{
                        var repeat=this.message.some(val=>{
                           return val.user==this.users;
                        })
                           if(repeat){
                              alert("账号重复")
                           }else{   //不重复继续存储
                                 this.message.push({
                                 user:this.users,
                                 pass:this.password,
                                 onoff:0   // 判断是否登录；
                              })
         
                              setTimeout(()=>{
                                 window.location.href="http://localhost/Moreshopping/login.html"
                              },2000)
                           
                           }
                  }
                  //数据存储
                  localStorage.setItem("message",JSON.stringify(this.message));
         }
      })
   }
}
new Storage();

    //1点击之后存储数据进行跳转；
   // $(".sub").click(function(){
   //   console.log(x,y,z);
   //   var checkObj=document.querySelector(".check");
   //    var s=checkObj.checked;
   //    if(x&&y&&z&&s){
            
   //          var users= $("form input:eq(0)").val();
   //          var password= $("form input:eq(1)").val();
   //          var repeat=false;
   //          //判断之前有没有相同的locolstorage；
   //          var  message=localStorage.getItem("message");
   //          message=message?JSON.parse(message):[];
   //          //2进行拼接
   //          if(message.length<1){
   //             message.push({
   //                user:users,
   //                pass:password,
   //                onoff:0    //判断是否登录；
   //             })
   //          }else{
   //             // var repeat=message.some(val=>{
   //             //    return val.user===users;
   //             // })
   //             //先定义重复
                  
   //                for(var i=0;i<message.length;i++){
   //                   if(message[i].user==users){
   //                      return repeat=true;
   //                   }else{
   //                      return repeat=false
   //                   }
   //                }

   //                //判断账号重复并执行结果。
   //                if(repeat){
   //                   alert("账号重复")
   //                }else{
   //                      message.push({
   //                      user:users,
   //                      pass:password,
   //                      onoff:0    //判断是否登录；
   //                   })

   //                   setTimeout(()=>{
   //                      window.location.href="http://localhost/Moreshopping/login.html"
   //                   },2000)
                  
   //                }
   //       }
   //       //数据存储
   //       localStorage.setItem("message",JSON.stringify(message));
        
   //    }
   // })





 