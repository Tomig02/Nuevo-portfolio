const btn = document.querySelector("#submit");
const popUp = document.querySelector(".pop-up");

btn.addEventListener("click", () => {
    popUp.classList.remove("hide");
});
popUp.addEventListener("click", () => {
    popUp.classList.add("hide");
});
