let accordion_top = document.querySelector('.accordion');
let menuContent = document.querySelector('.accordion_content');
let plusbutton = document.querySelector('.plus');
let plusminus = document.getElementById("plus");
plusbutton.addEventListener('click',()=>{
    if(menuContent.style.display===""){
        menuContent.style.display="block";
        plusminus.innerHTML = "-";

    } else {
        menuContent.style.display="";
        plusminus.innerHTML = "+"
    }
})
plusbutton.addEventListener('mouseover',()=>{
    accordion_top.style.backgroundColor="#D3B558";
    plusbutton.style.backgroundColor="#D3B558";
    plusbutton.style.color="#FFFFFF";
})
accordion_top.addEventListener('mouseover',()=>{
    accordion_top.style.backgroundColor="#D3B558";
    plusbutton.style.backgroundColor="#D3B558";
    plusbutton.style.color="#FFFFFF";
})
plusbutton.addEventListener('mouseout',()=>{
    accordion_top.style.backgroundColor="#FFFFFF";
    plusbutton.style.backgroundColor="#FFFFFF";
    plusbutton.style.color="#2F2F2F";
})
accordion_top.addEventListener('mouseout',()=>{
    accordion_top.style.backgroundColor="#FFFFFF";
    plusbutton.style.backgroundColor="#FFFFFF";
    plusbutton.style.color="#2F2F2F";
})