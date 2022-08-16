const mainImage=document.querySelector(".article__main-image");
const thumbnailList=document.querySelectorAll(".article__thumbnail");
let indexCurrentImage=0;

const setMainImage=(number)=>{
    const index=number-1;
    mainImage.src=`./images/image-product-${number}.jpg`;
    thumbnailList[index].classList.add("article__thumbnail--active");

    for(let i =0; i<thumbnailList.length;i++){
        if(i!=index && thumbnailList[i].classList.length>1 ){
            thumbnailList[i].classList.remove("article__thumbnail--active");
        }

    }
}

const prevBtn=document.querySelector(".article__btn--prev");
const nextBtn=document.querySelector(".article__btn--next");

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


