const sections = document.querySelectorAll("section");
let visible = [false, false];

window.addEventListener("scroll", () => {
    if(window.scrollY > (sections[0].offsetTop - 300) & !(visible[0])){
        animate(0);
        visible[0] = true;
    }
    if(window.scrollY > (sections[1].offsetTop - 300) & !(visible[1])){
        animate(1);
        visible[1] = true;
    }
});

function animate(index){
    sections[index].classList.remove("hiden");
    sections[index].classList.add("animate");
    sections[index].addEventListener("animationend", () => {
        sections[index].classList.remove("animate");
    });
}