let buttonShow = document.querySelector(".show-all-brand");
let buttonHidden = document.querySelector(".hidden-all-brand");
let classRemove = document.querySelectorAll(".slider-list-item");

buttonShow.addEventListener("click", function() {
    for (const elem of classRemove) {
        elem.classList.remove("hidden-tablet");
        elem.classList.remove("hidden-desktop");
    }
    buttonHidden.classList.remove("hide-button-hidden");
    buttonShow.classList.add("show-button-hidden");
})

buttonHidden.addEventListener("click", function() {
    for (const elem of classRemove) {
        elem.classList.add("hidden-tablet");
        elem.classList.add("hidden-desktop");
    }
    buttonHidden.classList.add("hide-button-hidden");
    buttonShow.classList.remove("show-button-hidden");
})