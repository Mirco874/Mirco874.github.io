const cartButton=document.getElementById("purchases-btn");
const cartMenu=document.getElementById("cart-menu");



cartButton.addEventListener("click",(e)=>{
    e.preventDefault();
    cartMenu.hidden=!cartMenu.hidden
})