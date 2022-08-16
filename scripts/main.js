
const cartButton=document.querySelector(".nav__purchase-cart-btn");
const cartMenu=document.querySelector(".nav__purchases-menu");

cartButton.addEventListener("click",(e)=>{
    e.preventDefault();
    cartMenu.hidden=!cartMenu.hidden
})



const increaseButton=document.querySelector(".article__amount-btn--increase");
const reduceButton=document.querySelector(".article__amount-btn--reduce");
const units=document.querySelector(".article__quantity");

increaseButton.addEventListener("click",(e)=>{
    e.preventDefault();
    const nextInputValue=parseInt(units.value)+1;
    if(nextInputValue<=10)
    units.value=nextInputValue;
})

reduceButton.addEventListener("click",(e)=>{
    e.preventDefault();
    const nextInputValue=parseInt(units.value)-1;
    if(nextInputValue>=0)
    units.value=nextInputValue;
})



