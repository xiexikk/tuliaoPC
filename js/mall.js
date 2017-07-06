
$(document).ready(function(){
/*公共部分*/    
    //侧边栏
    //显示
    var timeTi = null;
    timeTi = setInterval(function(){
      $('#sidebar').animate({right:0}, 300); 
    },1000);
    //鼠标经过
    $('#sidebar .item').hover(function() {
        $(this).addClass('hover');
        $(this).children('.ti').show();
        $(this).children('.ti').stop().animate({right:'36px',opacity:'1'}, 400);
    }, function() {
        $(this).removeClass('hover');
        $(this).children('.ti').hide();
        $(this).children('.ti').stop().animate({right:'70px',opacity:'0'}, 400);
    });
    //返回顶部
    $('.backTop').hide();
    $(window).scroll(function(e) {
        var win_h = 100;
        var win_s = $(window).scrollTop();
        if(win_h<win_s){
            $('.backTop').fadeIn(400);
        }else{
            $('.backTop').fadeOut(400);
        }
    });
    $('.backTop').click(function(e) {
        $('html,body').animate({scrollTop:0},300);
    });

    //新品推荐-产品精选-特别优惠
    $('.navCon .nav .othGoods li a').click(function(event) {
        $(this).addClass('cur');
    });

/*mallIndex.html*/   
     //全部分类
     var bl = true;
    $('.allGoods').hover(function() {
        if(bl==true){
            $(this).children('.drop').stop().fadeIn(500);
            $(this).addClass('hover');
            bl = false;
        }else{
            $(this).children('.drop').stop().fadeOut(500);
            $(this).removeClass('hover');
            bl = true;
        }
    });
    //海报
    $('.banner ul li:eq(0)').show().siblings().hide();
    var banLiNum = $('.banner ul li').length;
    for(var i =0;i<banLiNum;i++){
        $('.banner ol').append('<li></li>');
    }
    $('.banner ol li:first').addClass('current');
    var num = 0;
    var timer = null;
    var speed = 3000;
    var fadeSpeed = 500;
    $('.banner ul li:first').show();
    $('.banner ol li').mouseenter(function(){
        $(this).addClass('current').siblings().removeClass();    
        var index  =$(this).index(); 
        $('.banner ul li').eq(num).stop().fadeOut(fadeSpeed);
        $('.banner ul li').eq(index).stop().fadeIn(fadeSpeed);
        num = index;
    })
    function timeFn(){
        $('.banner ul li').eq(num).stop().fadeOut(fadeSpeed);
        num++
        if( num >banLiNum-1 ){
            num = 0;
        }
        $('.banner ol li').eq(num).addClass('current').siblings().removeClass();
        $('.banner ul li').eq(num).stop().fadeIn(fadeSpeed);  
    }
    timer = setInterval( timeFn , speed)
     $('.banner').hover(function(){
        clearInterval(timer);
    },function(){
        clearInterval(timer);
        timer = setInterval( timeFn , speed );
    });


/*allFoods.html*/
    //所有分类-选择
    function tabChang(parm){
        $(parm).click(function() {
            $(this).addClass('cur').siblings().removeClass('cur');
        });
    }
    tabChang('.tabList .cen .item .sty ul li');
    //收起-更多
    var bll1 = true;
    var bll2 = true;
    function slide(parm,bll){
        $(parm).click(function(event) {
            if(bll==true){
                $(this).children('a').html('收起');
                $(this).children('i').addClass('ar');
                $(this).siblings('.sty').addClass('scroll');
                bll = false;
            }else{
                $(this).children('a').html('更多');
                $(this).children('i').removeClass('ar');
                $(this).siblings('.sty').removeClass('scroll');
                bll = true;
            }
        });
    }
    slide('.tabList .cen .item1 .more',bll1);
    slide('.tabList .cen .item2 .more',bll2);

/*foodsDet.html*/
    //选择颜色
    tabChang('.proDet .cTxt .colorSel ol li');
    //收藏
    var bbl = true;
    $('.collIco').click(function(event) {
        if(bbl == true){
            $(this).addClass('hover');
            $(this).children().children('.txt').html('已收藏');
            bbl=false;
        }else{
            $(this).removeClass('hover');
            $(this).children().children('.txt').html('收藏');
            bbl=true;
        }
    });
     //购买数量
    var maxNum = 99;
    function redAdd(red,add){
        $(red).click(function(event) {
            var num = parseInt($(this).siblings().children('input').val());
            num--;
            if(num < 0){
                num = 0;   
            } 
            $(this).siblings().children('input').val(num);    
        });
        $(add).click(function(event) {
            var num = parseInt($(this).siblings().children('input').val());
            num++;
            if(num > maxNum){
                num = maxNum;   
            } 
            $(this).siblings().children('input').val(num);  
        });
     }
     redAdd('.reduceBtn','.addBtn');
     //商品详情-用户评价
    function tabSwitch(hd,bd){
        $(hd).click(function(event) {
              $(this).addClass('cur').siblings().removeClass('cur');
              var index = $(this).index();
             $(bd).eq(index).show().siblings().hide();
        });
    }
    $('.proIntr .bd .tabBd li.liTem:eq(0)').show().siblings().hide();
    tabSwitch('.proIntr .hd ol li','.proIntr .bd .tabBd li.liTem');

/*subOrders.html*/
    //选择收货地址
    var def = true; 
    function addSel(myli,setDef){
        $(myli).click(function() {
            $(this).addClass('cur').siblings().removeClass('cur');
        });
        $(setDef).click(function(event) {
            $(this).children('span').html('默认地址');
            $(this).addClass('defaulted');
            $(this).parents('li').siblings('li').find('.default').removeClass('defaulted');
            $(this).parents('li').siblings('li').find('.default').children('span').html('设为默认');  
        });
    }
    addSel('.addList ul li','.default');
    //新增地址 
    $('.newAdd').hide();
    $('.selAddress .add').click(function(event) {
         $('.newAdd').fadeIn(300);
    });
    $('.newAdd .addIn .inpCon .bot button').click(function(event) {
       $('.newAdd').fadeOut(300);
    });
    $('.addList ul li .item .edit a').click(function(event) {
        $('.newAdd').fadeIn(300);
    });
	
/*foodsPay.html*/
    //支付方式
    tabChang('.type .way .item');
    tabChang('.type .way .item ul li');

/*vipBuy.html*/
     tabChang('.vipBuy .selVip ul li');

/*myOrder.html*/
    // 切换
    $('.myOrder .bd ul li:eq(0)').show().siblings().hide();
    tabSwitch('.myOrder .hd ol li','.myOrder .bd ul li');

});