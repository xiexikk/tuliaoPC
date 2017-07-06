// JavaScript Document

$(function(){
/*导航栏*/
    $('#nav ul li').click(function(event) {
        $('#nav ul li').removeClass('cur');
        $(this).addClass('cur');
    });
    
/*登录注册*/
    //显示与隐藏
    var fadeSpeed = 200;
    function fade(btn,con,close){
        $(btn).click(function(event) {
            $(con).fadeIn(fadeSpeed);
        });
        $(close).click(function(event) {
            $(con).fadeOut(fadeSpeed);
        });
    }
    fade('','#login','.close');
    fade('.regBtn','#register','.close');
    fade('.forPwdBtn','#forPwd','.close');
    //跳转
    function go( goA, con1, con2){
        $(goA).click(function(event) {
           $(con1).show();
           $(con2).hide();
        });
    }
    go('.goReg','#register','#login');
    go('.goLog','#login','#register');
    go('.goLog','#login','#forPwd');

    //获取验证码
    var validCode=true;
    $("#getCode").click (function  () {
        var time=60;
        var code=$(this);
        if (validCode) {
            validCode=false;
            var t=setInterval(function  () {
                time--;
                code.val("重新发送（" +time+ "）");
                if (time==0) {
                    clearInterval(t);
                    code.val("获取验证码");
                    validCode=true;
                }
            },1000)
        }
    });



})