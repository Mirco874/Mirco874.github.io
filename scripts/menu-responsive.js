const openMenuBtn=document.querySelector(".navigation-bar__open-menu-btn");
const closeMenuBtn=document.querySelector(".navigation-bar__close-menu-btn");
const menu=document.querySelector(".navigation-bar__menu");

openMenuBtn.addEventListener("click",()=>{
    menu.classList.add("navigation-bar__menu__activate");
    })
    
closeMenuBtn.addEventListener("click",()=>{
        menu.classList.remove("navigation-bar__menu__activate");
    })
    




