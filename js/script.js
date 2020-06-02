$(".menu").hover(
    function(){
        $(".sub-menu").stop().slideDown("slow");
    },function(){
        $(".sub-menu").stop().slideUp("fast");
    }
);

var timer = setInterval("autoSlide()",3000);
var imgCnt = $(".slide_bar").children('img').length-1;
var m_width = 0;
var maxNum = 1200 * imgCnt;

function autoSlide(){
    m_width += 1200;
    if(m_width > maxNum) m_width = 0;
     $(".slide_bar").animate({
        "margin-left":"-"+m_width+"px"
    });
}

var btn_val = 0;

$(".btn_wrap > .content_btn #btn1").on("click",function(){
         $(this).css({
            background:"#58636d",
            color:"#fff"
         });
        $(".inform").css({
            display:"block"
        });
        $(".btn_wrap > .content_btn #btn2").css({
            background:"#fff",
            color:"#000"
        });
        $(".talk").css({
            display:"none"
        });
});

$(".btn_wrap > .content_btn #btn2").on("click",function(){
         $(this).css({
            background:"#58636d",
            color:"#fff"
        });
        $(".talk").css({
            display:"block"
        });
        $(".btn_wrap > .content_btn #btn1").css({
            background:"#fff",
            color:"#000"
        });
        $(".inform").css({
            display:"none"
        });
});

