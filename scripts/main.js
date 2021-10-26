const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.getElementsByTagName("nav");

  burger.addEventListener("click", () => {
    //toggle nav
    nav[0].classList.toggle("nav-active");
    //burger animation
    burger.classList.toggle("toggle");
  });
};
navSlide();
