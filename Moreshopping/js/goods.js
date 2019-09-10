class Goods{
    constructor(){
        this.url="http://localhost/Moreshopping/data/goods.json "
        this.load()
       
        this.ulObj=document.querySelector("#detail ul");
    }
    //下载准备好的数据
    load(){
       var that=this;
        ajax({
            url:this.url,
            success:function(res){
                that.res=JSON.parse(res);
                //console.log(that.res);已接收数据
                // console.log(that.res[0].img);图片地址

                that.display();
                that.addevent();  
            }
        })
    }
    display(){
        var that=this;
        var str=""
        //根据数据长度创建li，每有一个数据创建一个li,然后渲染数据
        for(var i=0;i<that.res.length;i++){
        this.liObj=document.createElement("li")
        this.ulObj.appendChild(this.liObj);//增加li之后渲染数据
        //数据拼接（每有一次循环增加了一次li就有一次li的内容
        str=`<div commodity="${this.res[i].id}">
        <img src="${that.res[i].img}" alt="">
        <h4 class="over">${that.res[i].name}</h4>
        <span>分销价<b>￥${that.res[i].price}</b></span>
        <p>本月已售出${that.res[i].shop}件</p>
        <input type="button" value="加入购物车" class="join">
        <input type="button" value="点击购买>" class="buy"></div>`
        this.liObj.innerHTML=str;
        }
          
    }
   //利用事件委托机制绑定事件然后存储到localstorage中
   addevent(){
    //li有多个绑定每个li的input标签 设置事件存储当前点击事件元的数据（数据中有id值）
    //如何判断存储的是哪个数据，首先点击li时有此时的数据，数据的id值就是当前数据，存储到localstorage
        var that=this;
        this.num=0;
        that.ulObj.addEventListener("click",function(eve){
           var e=eve||window.event
           var target=e.target||e.srcElement;
           if(target.className=="join"){
            //点击进入时判断点击次数   在购物车中显示数量
    
           //获取当前数据的唯一id值存储到localstorage；
             num++;
             that.id=target.parentNode.getAttribute("commodity")
             that.setLocal()
             //再此判断数据的点击的次数根据id重复出现的次数（就是点击添加的数量，在购车中也能做
           } 
        })
   }
   setLocal(){
       //点击次数为1 时，添加数据存储到localstorage；
       //点击次数大于1时则说明已存储。
     if(num==1){
         for(var i=0;i<this.res.length;i++){ 
            
             if(this.res[i].id===this.id){
                 //找到了当前的数据存储，并存储
             localStorage.setItem("goods",JSON.stringify(this.res[i]))
                    //        this.goods[i].num ++;
                    //    }else{
                    //        this.goods.push({
                    //            id:this.id,
                    //            num:1
                    //        })
            }
         }
     }
   
    }

 }
    new Goods();