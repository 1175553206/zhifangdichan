

window.onload=function () {

    function xxk(num){

        let contentright=document.getElementsByClassName("zht-bj");
        let headright1=document.getElementsByClassName("dw-dg");
        console.log(contentright.length,headright1.length);

        contentright[0].style.display="block";
        headright1[0].style.background="#D7C49B";
        headright1[0].style.color="#fff";
        for(let i=0;i<headright1.length;i++){
            headright1[i].onmouseover=function(){
                for(let j=0;j<headright1.length;j++){
                    contentright[j].style.display="none";
                    headright1[j].style.background="#EAEBEE";
                    headright1[j].style.color="#666";
                }
                contentright[i].style.display="block";
                headright1[i].style.background="#D7C49B";
                headright1[i].style.color="#fff";
            }
        }
    }
    var zhifang=new xxk(0);
    var tuandui=new xxk(1);
    var buju=new xxk(2);
    var fazhan=new xxk(3);
    var rongyu=new xxk(4);
    var jiazhi=new xxk(5);
    var huoban=new xxk(6);





}