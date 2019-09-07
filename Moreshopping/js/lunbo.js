;(function($){
    "use strict";


   $.fn.banner=function(options){
         var  {items,left,right,list,autoplay,
         movetime,delaytime,index}=options
         list=list===false?false:true;
         autoplay=autoplay===false?false:true;
         movetime=movetime||200;
         delaytime=delaytime||4000;
         index=index||0;
         
         
         var obj={};
         obj.iPrev =items.length-1;


         if(list){
                  var str="";
                  //  console.log(111111);
                  for(var i=0;i<items.length;i++){
                  // console.log(111111);
                        str+=`<li>${i+1}</li>`;
                  }
                  obj.ul=$("<ul>").html(str);
                  this.append($(obj.ul));
                  obj.ul.css({
                        width:"100%",
                        height:30,
                        lineHeight:30+"px",
                        display:"flex",
                        margin:0,
                        padding:0,
                        textAlign:"center",
                        listStyle:"none",
                        background:"#ccc",
                        position:"absolute",
                        left:0,
                        bottom:0,
                  }).children("li").css({
                        flex:1,
                        border:"solid 1px", 
                        background:"skyblue"
                  }).eq(index).css({
                        background:"red",
                        color:"#d5d5d5"
                  })
                  obj.ul.children("li").on("click",function(){
                        if($(this).index() > index){
                            //  console.log("王座");
                              obj.listMove($(this).index(),1);
                        }
                        if($(this).index() < index){
                            //  console.log("you");
                              obj.listMove($(this).index(),-1)

                        }
                        obj.ul.children("li").css({
                                    background:"",
                                    color:"",
                        }).eq($(this).index()).css({
                                    background:"red",
                                    color:"#d5d5d5"
                        })
                                    index = $(this).index();
                     })
         }
         obj.listMove=function(inow,type){
            items.eq(index).css({
               left:0
            }).stop().animate({
               left:-items.eq(0).width()*type
            })
            items.eq(inow).css({
               left:items.eq(0).width()*type
            }).stop().animate({
               left:0
            })

            
         }
               obj.rightClick=function(){
                  if(index == items.length-1){
                     index=0;
                     obj.iPrev=items.length-1;
      
                  }else{
                     index++;
                     obj.iPrev = index-1;
                  }
                  obj.btnMove(-1);
               }

               obj.leftClick=function(){
                  if(index == 0){
                     index=items.length-1;
                     obj.iPrev=0;
   
                  }else{
                     index--;
                     obj.iPrev = index+1;
                  }
                  obj.btnMove(1);
               //   console.log(obj.iPrev,index)
               }
         if(left != undefined && left.length > 0 && right != undefined && right.length > 0){
           // console.log(1111);
            right.on("click",obj.rightClick)
            left.on("click",obj.leftClick)
         }
               
         obj.btnMove=function(type){
            items.eq(this.iPrev).css({
               left:0, 
            }).stop().animate({
               left:items.eq(0).width()*type
            }).end().eq(index).css({
               left:-items.eq(0).width()*type
            }).stop().animate({
               left:0
            })
            if(!list)  return ;//防止list不存在 
            this.ul.children("li").css({
                background:"",
                color:"",
            }).eq(index).css({
               background:"red",
               color:"#d5d5d5"
            })
         }
      if(autoplay){
         var t=setInterval(()=>{
            //right.trigger("click");
            obj.rightClick();
         },delaytime)

         this.hover(function(){
            clearInterval(t)
         },function(){
             t=setInterval(()=>{
             //  right.trigger("click");
             obj.rightClick();
            },delaytime);
         })


      }











   }
})(jQuery);