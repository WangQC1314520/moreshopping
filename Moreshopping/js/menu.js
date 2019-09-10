

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


class List{
    constructor(){
        this.url="http://localhost/Moreshopping/data/menu.json";
        this.menuLi=document.querySelectorAll("#mainNav .margin .table ul li");
        console.log(this.menuLi);
        this.load();
        this.display();
    }
    // 下载数据
    load(){
        var that=this;
        ajax({
            url:this.url,
            success:function(res){
              //  console.log(res);
                that.res=JSON.parse(res);
             //   console.log(that.res[0].menu1);
                
            }
        })
    }
    display(){

    //    for(var i=0;i<this.res.length;i++){

    //    }
    }

//     display(){
//         var str="";
//         for(var i=0;i<this.res.length;i++){
//             str+=`<div class="goods" commodity="${this.res[i].goodsId}">
//         <img src="date/${this.res[i].url}" alt="">
//         <p>${this.res[i].name}物美价廉，特价出售<p>
//         <p>价格特价出售<span>${this.res[i].price}</span></p>
//         <p>${this.res[i].tip}</p>
//         <i class="btn">加入购物车<i>
//     </div> `

//         }

//      this.box.innerHTML=str;
//    }
//    //事件委托机制  获取元素添加事件
//    addevent(){
//        var that=this;
//        this.box.addEventListener("click",function(eve){
           
//           var e=eve||window.event
//           var target=e.target||e.srcElement
//           if(target.className=="btn"){
//             //  console.log(target)
//             that.id=target.parentNode.getAttribute("commodity")
//             that.setLocal();// start storage
//           } 
//        })
//    }
//    //点



}
new List;