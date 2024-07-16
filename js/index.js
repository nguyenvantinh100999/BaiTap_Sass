let navBar = document.getElementById("nav");
let openBar = document.getElementById("open");
let closeBar = document.getElementById("closer");
function windowResize(breakpoint) {
  // If media query matches
  if (breakpoint.matches) {
    navBar.classList.add("changeBar");
    openBar.classList.remove("none");
    closeBar.classList.add("none");
  } else {
    navBar.classList.remove("changeBar");
    openBar.classList.add("none");
    closeBar.classList.add("none");
  }
}
let breakpoint = window.matchMedia("(max-width: 1199px)");
// Call listener function at run time
windowResize(breakpoint);
// Attach listener function on state changes
breakpoint.addEventListener("change", () => {
  console.log(breakpoint);
  windowResize(breakpoint);
});

openBar.addEventListener("click", function () {
  navBar.classList.remove("changeBar");
  closeBar.classList.remove("none");
  openBar.classList.add("none");
});
closeBar.addEventListener("click", function () {
  navBar.classList.add("changeBar");
  openBar.classList.remove("none");
  closeBar.classList.add("none");
});

// Header
const header = document.querySelector(".header"); // Get the header element
const carouselSection = document.querySelector(".bg-bottom"); // Get the carousel section element
const logo = document.querySelector(".logo");
window.addEventListener("scroll", function () {
  const scrollPosition = this.document.documentElement.scrollTop; // Get the scroll position
  const carouselTop = carouselSection.offsetTop; // Get the top position of the carousel section

  if (scrollPosition >= carouselTop) {
    header.classList.add("sticky"); // Add the sticky class to the header
    logo.style.opacity = "0";
    console.log(scrollPosition);
  } else {
    logo.style.opacity = "1";
    header.classList.remove("sticky"); // Remove the sticky class from the header
  }
});
