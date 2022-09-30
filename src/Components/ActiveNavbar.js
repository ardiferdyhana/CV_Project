const ActiveNavbar = () => {
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    delay(1000).then(() => { 
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll(".navBarWrapper a");
        window.onscroll = () => {
          var current = "";
          sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 400) {
              current = section.getAttribute("id");
            }
          });
        
          navLi.forEach((a) => {        
            a.classList.remove("active");
            if (a.classList.contains(current)) {
              a.classList.add("active");
            }
          });
        };
    });
    
}

export default ActiveNavbar