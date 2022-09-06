const backtop = document.querySelector('.backtotop'); 
console.log(backtop)
function feleshrast(){

const container = document.querySelector('#child');
console.log(child)

a=String(child.style.right);
b=parseFloat(a)
console.log(b)

if (b < 10)
    {
        child.style.right =(b+200) +'px';
    }

}
function feleshchap(){
    const father = document.querySelector('#father');
    console.log(father)
    widthfather=$("#father").innerWidth() ;
    console.log("widthfather",widthfather)

    const container = document.querySelector('#child');
    console.log(child)
    
    a=String(child.style.right);
    b=parseFloat(a)
    console.log("right",b)
    c=-(2280-widthfather);
    console.log("maxright",c)
    if  (c < b)
    {
        child.style.right =(b-200) +'px';

    }
    



}
function blacklistadd(){
    const list = document.querySelector("#listblack");
    list.style.visibility = "visible";
    list.style.right = 0 + "px";
    const hazf = document.querySelector("#remove");
    hazf.style.top = 0 + "px"

    
}
function blacklistclose(){
    const list = document.querySelector("#listblack");
    list.style.visibility = "hidden";
    listwidth = $("#listblack").innerWidth();
    list.style.right = -(listwidth) + "px";
    const hazf = document.querySelector("#remove");
    hazf.style.top = -38 + "px"
}



window.addEventListener("scroll",function(){
    const backtop = document.querySelector('.backtotop'); 
console.log(backtop)
    console.log(backtotop)
    const winscroll = window.pageYOffset;
    
    console.log(winscroll)
    if(window.pageYOffset < 500)
    {
        backtop.style.opacity="0";
    }
    else{
        backtop.style.opacity="1";
    }

   
})
window.addEventListener("scroll",function(){
    const backtop = document.querySelector('.menu'); 
    const taga = document.querySelector('.menu .listmenu');

    console.log(backtop)
    console.log(taga)
    console.log(backtotop)
    const winscroll = window.pageYOffset;
    
    console.log(winscroll)
    if(window.pageYOffset < 153)
    {
        backtop.style.position="static";
        backtop.style.background="#f7f8fa";
        taga.style.color="#4527A0";
    }
    else{
        backtop.style.position="fixed";
        backtop.style.background="rgba(5, 110, 185, 0.7)";
        taga.style.color="white";

    }

   
})
window.addEventListener("scroll",function(){
    const backtop = document.querySelector('.boxblack'); 
    console.log(backtop)
    console.log(backtotop)
    const winscroll = window.pageYOffset;
    
    console.log(winscroll)
    if(window.pageYOffset < 50)
    {
        backtop.style.position="static";
    }
    else{
        backtop.style.position="fixed";
    }

   
})


