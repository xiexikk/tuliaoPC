
// JavaScript Document

$(function(){
    // tab栏切换01
    function tabSwitch(hd,bd){
        $(hd).hover(function(event) {
              $(this).addClass('cur').siblings().removeClass('cur');
              var index = $(this).index();
             $(bd).eq(index).show().siblings().hide();
        });
    }
    //tab栏切换02
    function tabChang(parm){
        $(parm).click(function() {
            $(this).addClass('cur').siblings().removeClass('cur');
        });
    }

/*index.html*/
    // 公告通知
    tabSwitch('.con1 .in .inl ol li','.con1 .in .inl ul li'); 
    // 企业 切换
    var num = 0;
    var speed = 5000;
    var timer = null;
    var banUlNum = $('.firm ul').length;
    var banUlWid = $('.firm ul').width();
    function timeFn(){
        $('.firm ul').eq(num).fadeOut(500);
        num++;
        if( num > banUlNum-1){
            num = 0;
        }
        $('.firm ul').eq(num).fadeIn(500);
    }    
    timer = setInterval(timeFn, speed);
    $('.firm ul li').hover(function(){
        clearInterval(timer);
    },function(){
        clearInterval(timer);
        timer = setInterval(timeFn,speed);
    })
    //在线洽谈会--线下供需会 控制显示数量3个
    $('.con4 .in .inl ul li:gt(2), .con4 .in .inr ul li:gt(2)').hide();
    
/*actDet.html*/
    // 报名参与活动
    $('.cancelBtn').click(function(){
        $('.applyWrap').fadeIn(200);
    })
    var fadeSpeed = 200;
    function fade(applyBtn,cancelBtn,keepBtn,wrap){
        $(applyBtn).click(function(event) {
           $(wrap).fadeIn(fadeSpeed);
        });
        $(cancelBtn).click(function(event) {
           $(wrap).fadeOut(fadeSpeed);
        });
        $(keepBtn).click(function(event) {
           $(wrap).fadeOut(fadeSpeed);
        });
    };
    fade('.applyBtn','.cancelBtn','.keepBtn','.applyWrap');

/*accUnion.html*/
    //性别选择
    tabChang('.addUnion .bd .con .write .item .sex span');

})