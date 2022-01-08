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
