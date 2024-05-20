let buttonShow = document.querySelector(".show-all-brand");
let buttonHidden = document.querySelector(".hidden-all-brand");
let sliderItems = document.querySelectorAll(".slider-list-item");
let classRemoveTablet = document.querySelectorAll(".tablet");
let classRemoveDesktop = document.querySelectorAll(".desktop");
let dotsSlider = document.querySelectorAll(".dots-list-item");

buttonShow.addEventListener("click", function () {
  for (const item of sliderItems) {
    item.classList.remove("hidden-tablet");
    item.classList.remove("hidden-desktop");
  }
  buttonHidden.classList.remove("button-hidden");
  buttonShow.classList.add("button-hidden");
});

buttonHidden.addEventListener("click", function () {
  for (const tablet of classRemoveTablet) {
    tablet.classList.add("hidden-tablet");
  }
  for (const desktop of classRemoveDesktop) {
    desktop.classList.add("hidden-desktop");
  }
  buttonHidden.classList.add("button-hidden");
  buttonShow.classList.remove("button-hidden");
});


