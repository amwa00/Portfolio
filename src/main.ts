// add active class to nav links
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("You clicked on link");
    navLinks.forEach((l) => l.classList.remove("active"));

    link.classList.add("active");
  });
});
