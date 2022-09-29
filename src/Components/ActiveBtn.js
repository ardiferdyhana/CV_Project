const sections = document.querySelectorAll("div");
const navLi = document.querySelectorAll(".navBarWrapper");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
      console.log(current);  
    }
  });

  navLi.forEach((button) => {
    button.classList.remove("active");
    if (button.classList.contains(current)) {
      button.classList.add("active");
      console.log("this button active")
    }
  });
};