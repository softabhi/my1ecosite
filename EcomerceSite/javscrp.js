let bar = document.getElementById("bar");
let nav = document.getElementById("navbar");
let close = document.getElementById("closeButton");

if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('newbar');
       
   })
}
if(bar){
    close.addEventListener('click',() => {
        nav.classList.remove('newbar');
       
   })
}



