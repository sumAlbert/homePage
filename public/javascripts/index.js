var currentPage=0;//当前页面
var sumPage=document.getElementsByClassName("subPage").length;//总页面
var scrollerFlag=true;//控制滚轮一次只有一个滚动命令


/**
 * 滚动轮控制
 * @param e 滚动轮事件
 */
var fullPageController=function (e) {
    //添加滚动锁
    if(scrollerFlag){
        scrollerFlag=false;
    }
    else{
        return ;
    }

    //获取滚轮滚动方向，true:向上，false:向下
    var scrollNum=e.wheelDelta||e.detail;
    var scrollDirection=scrollNum > 0;

    //进行翻页
    var isTurned=turnPage(scrollDirection);

    //解除滚动锁
    if(!isTurned){
        scrollerFlag=true;
    }
    else{
        //750ms以后解除滚动锁
        setTimeout(function () {
            scrollerFlag=true;
        },750);
    }
};

/**
 * 翻页
 * @param scrollDirection true--向上||false--向下
 * @return boolean 是否进行翻页
 */
var turnPage=function (scrollDirection) {
    //控制页面号码改变
    var subPageHeight=document.getElementById("subPage1").offsetHeight;
    var tempPage=currentPage;
    if(scrollDirection){
        currentPage=currentPage>0?currentPage-1:currentPage;
    }
    else{
        currentPage=currentPage<sumPage-1?currentPage+1:currentPage;
    }

    //控制翻页
    if(tempPage!==currentPage){//不需要翻页
        return false;
    }
    else{//需要翻页
        document.getElementById("subPages").style.cssText="top:-"+subPageHeight*currentPage+"px";
        return true;
    }
};

/**
 * 滚动轮事件绑定
 */
if(document.addEventListener){//FireFox
    document.addEventListener("DOMMouseScroll",fullPageController,false);
}
window.onmousewheel=document.onmousewheel=fullPageController;//others



