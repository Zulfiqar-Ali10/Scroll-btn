
const scrollBtn = document.querySelector("#scroll-to-top-btn");

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 200){
        scrollBtn.style.display = "block";
    }else{
        scrollBtn.style.display = "none"
    }
    
});


scrollBtn.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})