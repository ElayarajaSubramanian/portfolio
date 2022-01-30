$(document).ready(function () {
  $(".menubar").click(function () {
    $(".header").toggleClass("active");
    $(".menubar").toggleClass("active");
  });
});

//Contact form

const submitBtn = document.querySelector(".form__btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

//Observer
const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show-grid", entry.isIntersecting);
    });
  },
  { threshold: 0.5 }
);

projects.forEach((project) => {
  observer.observe(project);
});

//Scroll to top
const scrollBtn = document.querySelector(".scrolltop");
const scrollVisible = document.querySelector(".scrolltop__arrow");

const scrollBtnDisplay = function () {
  window.scrollY > window.innerHeight
    ? scrollVisible.classList.add("active")
    : scrollVisible.classList.remove("active");
};
window.addEventListener("scroll", scrollBtnDisplay);

scrollBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
