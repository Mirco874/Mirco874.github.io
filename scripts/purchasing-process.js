const purchaseButton=document.getElementById("add-to-cart-button");
const inputUnits=document.getElementById("input-units");
let totalPrice=document.querySelector(".product-article__article-description__total-price b").innerHTML;
const cartMenuContainer=document.querySelector(".navigation-bar__purchase-cart__menu__container");
let cartMenuList=document.querySelector(".navigation-bar__purchase-cart__menu__container__list").innerHTML;
let articleName=document.querySelector(".product-article__article-description__tittle h1").innerHTML;
const notifications=document.querySelector(".navigation-bar__purchase-cart__notifications");
const articleImage=document.querySelector(".product-article__article-view__main-image__image");


const addToCart=()=>{
const stringPrice=totalPrice;
const IntPrice= parseInt(stringPrice.slice(1,totalPrice.length));
const calculatedPrice=IntPrice*parseInt(inputUnits.value);


if(cartMenuList.length===0){
    cartMenuContainer.innerHTML=`
    <ul class="navigation-bar__purchase-cart__menu__container__list">
        <li class="navigation-bar__purchase-cart__menu__container__list__item">  
                <div class="navigation-bar__purchase-cart__menu__container__list__item__image-container">
                    <img class="navigation-bar__purchase-cart__menu__container__list__item__image-container__image" src="${articleImage.src}" alt="image-article-${articleName}" >
                </div>

                <div class="navigation-bar__purchase-cart__menu__container__list__item__detail">
                    <p>${articleName}</p>
                    <p>${stringPrice} x ${inputUnits.value} <b>$${calculatedPrice}.00</b> </p>
                </div>

                <button class="navigation-bar__purchase-cart__menu__container__list__item__remove-btn" 
                onclick="removeToCart()"}
                ><img src="./images/icon-delete.svg" alt="remove-icon"></button>

        </li> 
    </ul>
    <button class="navigation-bar__purchase-cart__menu__container__checkout-btn">Checkout</button>
    `
}


if(parseInt(inputUnits.value)===0){
    notifications.innerHTML=``}
else{
    notifications.innerHTML=`<div class="navigation-bar__purchase-cart__notifications__purchases"><p>${inputUnits.value}</p></div>`
}

}

purchaseButton.addEventListener("click",(e)=>{e.preventDefault();
                                               addToCart();    })






