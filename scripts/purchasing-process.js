const purchaseButton=document.querySelector(".article__submit-btn");
const inputUnits=document.querySelector(".article__quantity");
let totalPrice=document.querySelector(".article__total-price b").innerHTML;
const cartMenuContainer=document.querySelector(".nav__menu-container");
let cartMenuList=document.querySelector(".nav__cart-list").innerHTML;
let articleName=document.querySelector(".article__tittle").innerHTML;
const notifications=document.querySelector(".nav__cart-notifications");
const articleImage=document.querySelector(".article__main-image");


const addToCart=()=>{
const stringPrice=totalPrice;
const IntPrice= parseInt(stringPrice.slice(1,totalPrice.length));
const calculatedPrice=IntPrice*parseInt(inputUnits.value);


if(cartMenuList.length===0){
    cartMenuContainer.innerHTML=`
    <ul class="nav__menu-list">
        <li class="nav__purchase">  
                <img class="nav__purchase-image" src="${articleImage.src}" alt="image-article-${articleName}" >

                <div class="nav__purchase-detail">
                    <p>${articleName}</p>
                    <p>${stringPrice} x ${inputUnits.value} <b>$${calculatedPrice}.00</b> </p>
                </div>

                <button class="nav__remove-purchase-btn" 
                onclick="removeToCart()"}
                ><img src="./images/icon-delete.svg" alt="icono de basurero"></button>

        </li> 
    </ul>
    <button class="nav__checkout-btn">Checkout</button>
    `
}
else{

    console.log(cartMenuList)
}


if(parseInt(inputUnits.value)===0){
    notifications.innerHTML=``}
else{
    notifications.innerHTML=`
    <div class="nav__total-purchases">
        <p>${inputUnits.value}</p>
    </div>`
}

}

purchaseButton.addEventListener("click",(e)=>{e.preventDefault();
                                               addToCart();    })






