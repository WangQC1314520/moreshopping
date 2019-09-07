$("body .louceng").css({position: "fixed",right:"0",top:"50%"})
$("body .louceng li").css({width:"80px",height:"30px",fontSize:"16px",lineHeight:"30px",border:"1px solid #000",textAlign:"center",background:"skyblue"})
$("body  .louceng").children("li").click(function(){
var index=$(this).index();
var t=$("div[id]").eq(index)[0].offsetTop;
$("html").animate({
    scrollTop:t
})
})