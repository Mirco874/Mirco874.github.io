
const cartButton=document.getElementById("purchases-btn");
const cartMenu=document.getElementById("cart-menu");

cartButton.addEventListener("click",(e)=>{
    e.preventDefault();
    cartMenu.hidden=!cartMenu.hidden
})

const increaseButton=document.getElementById("amount__increase-btn");
const reduceButton=document.getElementById("amount__reduce-btn");
const units=document.getElementById("input-units");

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



