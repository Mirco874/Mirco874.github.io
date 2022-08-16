const openMenuBtn=document.querySelector(".nav__menu-btn--open");
const closeMenuBtn=document.querySelector(".nav__menu-btn--close");
const menu=document.querySelector(".nav__menu");

openMenuBtn.addEventListener("click",()=>{
    menu.classList.add("nav__menu--activate");
    })
    
closeMenuBtn.addEventListener("click",()=>{
        menu.classList.remove("nav__menu--activate");
    })
    




