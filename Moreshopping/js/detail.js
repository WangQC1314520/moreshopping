//读取从商品列表拿过来的本地存储数据
class Detail{
    constructor(){
        this.imgObj=document.querySelector("#list .goods .detail .detail-l .add")
       
        this.local=localStorage.getItem("goods")
       // console.log();//拿到数据
      // console.log(typeof JSON.parse(this.local).img)
       // this.display();
       console.log(JSON.parse(this.local).img)
       this.display();
    }
    display(){
       this.imgObj.src=`${JSON.parse(this.local).img}`
       console.log(this.imgObj)
    }
    magnify(){
        //创建显示模块
        this.imgLook=document.createElement("div");
        this.imgLook.style.cssText="position:absolute;width:300px;height:300px;left:450px;top:270px;background:red;"
        //创建显示模块的图片
        this.lookphoto=document.createElement("img");
        this.lookphoto.style.cssText=" position: absolute;left:0px;top:0px"
        this.lookphoto.src=`${JSON.parse(this.local).img}`
        this.imgLook.appendChild(this.lookphoto);
        //创建鼠标移动模块
        this.move=document.createElement("div");
        this.move.style.cssText=" position: absolute;left:0px;top:0px"
        this.imgObj.appendChild(this.moveObj);
     
        this.imgObj.onmousemove=function(event){
            var e = event || window.event;
            // console.log(this.offsetLeft);
             //1 获取鼠标的位置,让move动起来
             var mouseX = e.clientX;
             var mouseY = e.clientY;
             //2 设置move的Top和left值
            // 滑块的定位左边距 = 鼠标x坐标-图片左边到父级的位置-滑块一半的距离
             var moveLeft =mouseX-this.offsetLeft-this.move.offsetWidth/2;
            var moveTop = mouseY-this.offsetTop-this.move.offsetHeight/2;
            moveLeft  = moveLeft<0 ?  0 : moveLeft;
            moveLeft = moveLeft>(this.offsetWidth-move.offsetWidth) ? (this.offsetWidth-move.offsetWidth) : moveLeft;
            moveTop = moveTop<0 ? 0 :moveTop;
            moveTop = moveTop < (this.offsetHeight-move.offsetHeight) ? moveTop :  (this.offsetHeight-move.offsetHeight);
            move.style.top  = moveTop+'px';
            move.style.left = moveLeft+'px';
            move.style.display = 'block';
             /*目标:设置大图片跟随滑块显示*/
            //1  显示出大图片,设置显示位置
    
             imgLook.style.top=imgObj.offsetTop+'px';
             imgLook.style.left = this.offsetLeft+this.offsetWidth+'px';
             imgLook.style.display = 'block';
    //  console.log(small.offsetWidth);
    //  console.log(move.offsetWidth);
    //  console.log(moveLeft/(small.offsetWidth-move.offsetWidth));
    //          距离左边left    图片宽度           盒子宽度          距离左边left    图片宽度           盒子宽度
    //             big_x/(look_girl.offsetWidth-big.offsetWidth) = move_left/(small.offsetWidth-move.offsetWidth);
    
    //             big_y/(look_girl.offsetHeight-big.offsetHeight) = move_top/(small.offsetHeight-move.offsetHeight);
             var big_x = moveLeft/(imgObj.offsetWidth-move.offsetWidth)*(imgLook.offsetWidth-lookphoto.offsetWidth);
             var big_y = moveTop/(imgObj.offsetHeight-move.offsetHeight)*(imgLook.offsetHeight-lookphoto.offsetHeight);
    // console.log(big_x);
    // console.log(big_y);
       this.lookphoto.style.top = big_y+'px';
       this.lookphoto.style.left = big_x+'px';
        }
        this.small.onmouseover = ()=>{
            this.move.style.display = 'block';
            this.imgLook.style.display = 'block';
        }
     // 鼠标移走则隐藏滑块和放大框
        this.imgObj.onmouseout = ()=>{
        this.move.style.display="none";
        this.imgLook.style.display="none";
    }
    }

}
new Detail();