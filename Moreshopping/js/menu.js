

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
     //   console.log(this.menuLi);
         
        this.load();
       // this.display();
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
                that.display();
            }
        })
    }
    display(){
        var that=this;
      //  console.log(that)
        for (var i=0;i<this.menuLi.length;i++){
            //确定好获取的节点。
        // console.log(this.menuLi[i].children[0].children[1])
        //把每个获取到的数传输
            for(var j=0;j<that.res.length;j++){ 
            this.menuLi[i].children[0].children[1].innerHTML=that.res[i].menu1
            }
        }
        // for (var i=0;i<this.menuLi.length;i++){
          console.log(this.menuLi[0].children[1]) 
        // }
     //把json数据分割成数组然后循环添加
     //   console.log(${that.res[0].menu2.split(",")})
     //  console.log(that.res[0].menuS.split(","));
        var str="";
        for(var i=0;i<this.menuLi.length;i++){
        str=`                
            <dl>
                <dd><span>${that.res[i].menu2.split(",")[0]}</span></dd>
                <dd><span>${that.res[i].menu2.split(",")[1]}</span></dd>
                <dd><span>${that.res[i].menu2.split(",")[2]}</span></dd>
                <dd><span>${that.res[i].menu2.split(",")[3]}</span></dd>
                <dd><span>${that.res[i].menu2.split(",")[4]}</span></dd>
                <dd><span>${that.res[i].menu2.split(",")[5]}</span></dd>
                <dd><span>${that.res[i].menu2.split(",")[6]}</span></dd>
            </dl>
            <div class="menu2-bottom">
               <div class="list">
                   <p><span>${that.res[i].menuS.split(",")[0]}：</span><b>data</b></p> 
                   <p><span>${that.res[i].menuS.split(",")[1]}：</span><b>data</b></p>
                   <p><span>${that.res[i].menuS.split(",")[2]}：</span><b>data</b></p>
                   <p><span>${that.res[i].menuS.split(",")[3]}：</span><b>data</b></p>
                   <p><span>${that.res[i].menuS.split(",")[4]}：</span><b>data</b></p>
                   <p><span>${that.res[i].menuS.split(",")[5]}：</span><b>data</b></p>
                   <p><span>${that.res[i].menuS.split(",")[6]}：</span><b>data</b></p>         
               </div>
                <div class="photo">
                    <img src="${that.res[i].images1}" alt="data">
                    <img src="${that.res[i].images2}" alt="data">
                </div>
            </div>`
            this.menuLi[i].children[1].innerHTML=str;
       }
    }
  

}
new List;