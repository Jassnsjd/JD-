window.onload = function () {
    // 顶部的通栏 滚动的效果
    headerScroll();

    // 倒计时的效果
    cutDownTime();

    // 轮播图的效果
    banner();
}


function headerScroll(argument){
    
    var navDom = document.querySelector(".jd_nav");
    var maxDistance = navDom.offsetTop+navDom.offsetHeight;
    var headerDom  = document.querySelector(".jd_header");
    //console.log(maxDistance);
    window.onscroll = function () {
        var scrollDistance = window.document.body.scrollTop;
        //console.log(scrollDistance);
        var percent = scrollDistance/maxDistance;
        console.log(percent);
        if(percent>1){
            percent = 1;
        }
        headerDom.style.backgroundColor
    }
}

function cutDownTime(argument){

}
function banner(argument){

}