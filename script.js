// FADE IN
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});

// trigger on load
window.dispatchEvent(new Event("scroll"));

// SLIDER
const slider = document.getElementById("sliderRange");
const overlay = document.querySelector(".overlay");

if (slider) {
  slider.addEventListener("input", () => {
    overlay.style.width = slider.value + "%";
  });
}
