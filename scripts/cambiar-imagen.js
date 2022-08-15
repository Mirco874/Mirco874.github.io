const mainImage=document.querySelector(".product-article__article-view__main-image__image");
const thumbnailList=document.querySelectorAll(".product-article__article-view__select__thumbnail");
let indexCurrentImage=0;

const setMainImage=(number)=>{
    const index=number-1;
    mainImage.src=`./images/image-product-${number}.jpg`;
    thumbnailList[index].classList.add("image-btn-active");

    for(let i =0; i<thumbnailList.length;i++){
        if(i!=index && thumbnailList[i].classList.length>1 ){
            thumbnailList[i].classList.remove("image-btn-active");
        }

    }
}

const prevBtn=document.querySelector(".previous-btn");
const nextBtn=document.querySelector(".next-btn");

prevBtn.addEventListener("click",()=>{
    if(indexCurrentImage-1<0)
        {indexCurrentImage=thumbnailList.length-1;}
    else
        {indexCurrentImage=indexCurrentImage-1;}
    setMainImage(indexCurrentImage+1);
})


nextBtn.addEventListener("click",()=>{
    if(indexCurrentImage+1>=thumbnailList.length)
        {indexCurrentImage=0;}
    else
        {indexCurrentImage=indexCurrentImage+1;}
    setMainImage(indexCurrentImage+1);

})


