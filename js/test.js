/**
 * Created by ppp on 2019/2/9.
 */
window.onload = function () {
    nav();
    cutTime();
    slideBanner();
}


function nav(){
    var navHeight = document.querySelector(".jd_nav").offsetHeight;
    var maxHeight = document.querySelector(".jd_slide").offsetHeight-navHeight;
    document.querySelector(".jd_nav").style.backgroundColor = 'rgba(201,21,35,0)';
    console.log(maxHeight);
    var nav = document.querySelector(".jd_nav");
    window.onscroll = function () {
        var scroll = window.document.body.scrollTop||window.document.documentElement.scrollTop;
        var bi = scroll/maxHeight;
        if(bi>1){
            bi=1;
        }
        document.querySelector(".jd_nav").style.backgroundColor = 'rgba(201,21,35,'+bi+')';
    }
}





function cutTime(){
    var sumSec = 10*60*60;
    var ul = document.querySelector(".jd_content:first-child>.one ul");
    var target = ul.children;
    var timer = setInterval(function () {
        sumSec--;
        var hour = Math.floor(sumSec/60/60);
        var min = Math.floor(sumSec%3600/60);
        var sec = sumSec%60;
        target[0].innerHTML = Math.floor(hour/10);
        target[1].innerHTML = hour%10;
        target[3].innerHTML = Math.floor(min/10);
        target[4].innerHTML = min%10;
        target[6].innerHTML = Math.floor(sec/10);
        target[7].innerHTML = sec%10;
    },1000)
}






function slideBanner(){
    var width = document.querySelector(".jd_slide").offsetWidth;
    var UL = document.querySelector(".jd_slide ul:first-child");
    var LIArr = UL.nextElementSibling.children||UL.nextSibling.children;
    var index = 1;

    LIArr[0].className= "white";
    var timer = setInterval(function () {
       index++;
        UL.style.transition = "all 0.5s";
        UL.style.transform = 'translateX('+index*width*-1+'px)';
   },1000)


    UL.addEventListener("webkitTransitionEnd", function () {
        if(index>=9){
            index = 1;
            UL.style.transition = "";
            UL.style.transform = 'translateX('+index*width*-1+'px)';
        }
        if(index<1){
            index=8;
            UL.style.transition = "";
            UL.style.transform = 'translateX('+index*width*-1+'px)';
        }
        for(var i=0;i<LIArr.length;i++){
            LIArr[i].className = "";
        }
        LIArr[index-1].className = "white";
    })

    var startX = 0,moveX = 0,distanceX = 0;



    UL.addEventListener("touchstart", function (e) {
        clearInterval(timer);
        UL.style.transition = "";
        startX = e.touches[0].clientX;
    })

    UL.addEventListener("touchmove", function (e) {
        moveX = e.touches[0].clientX - startX;
        UL.style.transform = 'translateX('+(moveX+index*-1*width)+'px)';
    })

    UL.addEventListener("touchend", function (e) {
            var xifujuli = width/3;
        if(Math.abs(moveX)>xifujuli){
            if(moveX>0){
                index--;
            }else{
                index++;
            }
            UL.style.transition = 'all .5s';
            UL.style.transform = 'translateX('+index*width*-1+'px)';
        }else{
            UL.style.transition = 'all .5s';
            UL.style.transform = 'translateX('+index*width*-1+'px)';
        }
    })
}


