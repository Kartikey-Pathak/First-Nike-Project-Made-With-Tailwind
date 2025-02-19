let btn=document.querySelector(".side-toggle");
let bar=document.querySelector(".sidebar");
let sideText=document.querySelector(".side-ui");
let isbar=false;
btn.addEventListener("click",()=>{
     if(!isbar){
    bar.classList.add('w-64');
    sideText.classList.add('block');
    sideText.classList.remove('hidden');
    isbar=true;
}else{
    bar.classList.remove('w-64');
    sideText.classList.add('hidden');
    sideText.classList.remove('block');
    isbar=false;
}
})


//Logic For The Jordan-1.html page
let btn1=document.querySelector("#product-btn");
let toggle=document.querySelector("#product");
let close=document.querySelector("#close-btn");

let is=false;
let isclose=true;
btn1.addEventListener("click",()=>{
    if(!is){
      toggle.classList.remove('hidden');
       is=true;
       isclose=false;
    }else{
        is=false;
        isclose=true;
    }

})
close.addEventListener("click",()=>{
    if(!isclose){
    toggle.classList.add('hidden');
   }
})
