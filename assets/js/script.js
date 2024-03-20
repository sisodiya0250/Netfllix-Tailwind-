

let allFaqtitle=document.querySelectorAll('.faqtitle');
let icon=document.querySelector('.icon');
allFaqtitle.forEach(function(v,i){
    v.addEventListener('click',()=>{
        v.nextElementSibling.classList.toggle('scale-y-100');
        v.nextElementSibling.classList.toggle('h-[auto]');
        v.nextElementSibling.classList.toggle('p-[20px]');
        v.children[0].classList.toggle('fa-times');


        allFaqtitle.forEach(function(nVal,nIndex){
            if(nIndex!=i){
                nVal.nextElementSibling.classList.remove('scale-y-100','h-[auto]','p-[20px]');
                nVal.children[0].classList.remove('fa-times');
            }
        })
    })
})



