

$(document).ready(function(){
    //点赞
    var bl = true;
    $('.zanBtn').click(function(event) {
        if( bl == true){
             $(this).addClass('zanBtned');
             bl = false;
        }else{
             $(this).removeClass('zanBtned');
             bl = true;
        }  
    }); 

    //查看原图
    function chatPic(small,big,bigWrap){
        $(bigWrap).hide();
        var speed  = 300;
        var _index = 0;
        var bigImgSrc = '';
        var tpLiNum  = $(small+' li').length;
        $(small+' li').click(function(event){
            $(bigWrap).fadeIn(speed);
            var index = $(this).index();
            bigImgSrc = $(this).children().children('img').attr("src");
            console.log(bigImgSrc);
            $(big+' img').attr("src",bigImgSrc);
            _index = index;
        });
        $(bigWrap+' .next').click(function(event) {
            _index++;;
           if(_index > tpLiNum-1){
                _index = 0;
           }
            bigImgSrc = $(small+' li').eq(_index).children().children('img').attr("src");
            $(big+' img').attr("src",bigImgSrc);
        });
        $(bigWrap+' .prev').click(function(event) {
           _index--;
           if(_index < 0){
                _index = tpLiNum-1;
           }
            bigImgSrc = $(small+' li').eq(_index).children().children('img').attr("src");
            $(big+' img').attr("src",bigImgSrc);
        });
        $(bigWrap+' .close').click(function(event){
            $(bigWrap).fadeOut(speed);
        });
    };
    chatPic('.smallTp','.bigTp','.bigWrap');

    //新闻中心 控制显示数量3个
    $('.merSearch .news .newList ul li:gt(2)').hide();

});