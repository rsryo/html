$(function(){
    var duration = 300;
    var aside = $(".page_main > aside");
    var asideButton = aside.find("button");
    asideButton.on("click", function(){
        aside.toggleClass("open");
        if(aside.hasClass("open")){
            aside.stop(true).animate({left: "-70px"}, duration);
            //asideButton.find("img").attr("src", "images/btn_close.png");
        }else{
            aside.stop(true).animate({left: "-350px"}, duration);
            //asideButton.find("img").attr("src", "images/btn_open.png");
        };
    });
 });