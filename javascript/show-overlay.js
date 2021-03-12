const burger = document.querySelector(".burger");
console.log(burger);
const overlay = document.querySelector(".menu");

burger.addEventListener("click" , () => {
    if(burger.classList.contains("burger-active")){
        burger.classList.remove("burger-active");
        overlay.classList.add("closed");
    }
    else{
        burger.classList.add("burger-active");
        overlay.classList.remove("closed");
    }
})