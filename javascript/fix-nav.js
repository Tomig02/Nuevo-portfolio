const nav = document.querySelector("nav");

nav.addEventListener("scroll", fixNav);

function fixNav(){
    if(window.scrollY === 0){
        nav.classList.remove("fixed-nav");
    }
    nav.classList.add("fixed-nav");
}