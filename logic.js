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