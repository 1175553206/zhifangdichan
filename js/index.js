window.onload=function () {
    //banner轮播图
    let bannerpic=document.getElementsByClassName("banner-pic")[0];
    let bannerli=bannerpic.getElementsByTagName("li");

    let btn=document.getElementsByClassName("banner-btn")[0];
    let btns=btn.getElementsByTagName("li");

    let bannerleft=document.getElementsByClassName("banner-left")[0];
    let bannerright=document.getElementsByClassName("banner-right")[0];

    let banner=document.getElementsByClassName("banner")[0];


    let time1=setInterval(fn,2000);
    let num=0;
    function fn(){
        num++;
        if(num==bannerli.length){
            num=0;
        }
        bannerli[0].style.opactity=1;
        for(let i=0;i<bannerli.length;i++){

            // bannerli[i].style.display="none";
            bannerli[i].className="";
            //bannerli[i].style.zIndex=5;
            btns[i].style.background="#827073";
        }
        // bannerli[num].style.display="block";
        bannerli[num].className="opacity";
        // bannerli[num].style.opactity=1;
        //bannerli[num].style.zIndex=10;
        btns[num].style.background="#b59ca0";
    }
    bannerright.onclick=function(){
        fn();
    }
    bannerleft.onclick=function(){
        fn1();
    }
    function fn1(){
        num--;
        if(num==-1){
            num=bannerli.length-1;
        }
        for(let i=0;i<bannerli.length;i++){

            // bannerli[i].style.display="none";
            // bannerli[i].style.opactity=0;
            bannerli[i].className="";
            //bannerli[i].style.zIndex=5;
            btns[i].style.background="#827073";
        }
        // bannerli[num].style.display="block";
        // bannerli[num].style.opactity=1;
        bannerli[num].className="opacity";
        //bannerli[num].style.zIndex=10;
        btns[num].style.background="#b59ca0";
    }

    banner.onmouseover=function(){
        clearInterval(time1);
    }
    banner.onmouseout=function(){
        time1=setInterval(fn,2000);
    }

    for(let i=0;i<btns.length;i++){
        btns[i].onclick=function(){
            btns[num].style.background="#827073";
            btns[i].style.background="#b59ca0";
            // bannerli[num].style.display="none";
            // bannerli[num].style.opactity=0;
            bannerli[num].className="";
            //bannerli[num].style.zIndex=5;
            // bannerli[i].style.display="block";
            // bannerli[i].style.opactity=1;
            bannerli[i].className="opacity";
            //bannerli[i].style.zIndex=10;
            num=i;
        }
    }

// 公告
    let ggbox=document.getElementsByClassName('gg-main')[0];
    let gg=ggbox.getElementsByTagName('li');


    let ggt;
    let num2=0;
    ggt=setInterval(ggfn,2000);
    function ggfn(){
        num2+=2;
        if(num2==4){
            num2=0;
        }
        for(let i=0;i<gg.length;i++){
            gg[i].className='';
        }
        gg[num2].className='ggli';
        gg[num2+1].className='ggli';
    }








}