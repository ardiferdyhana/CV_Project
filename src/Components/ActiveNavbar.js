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

 {/* <Stack direction='row'>
                            <Image
                                boxSize={'250px'}
                                src={krti1}
                                alt='KRTI Picture'
                            />
                            <Image
                                boxSize={'250px'}
                                src={krti2}
                                alt='KRTI Picture'
                            />
                            <Image 
                                boxSize={'250px'}
                                src={krti3} 
                                alt='KRTI Picture'
                            />
                        </Stack>
                        <Stack direction='row'>
                            <Image
                                boxSize={'250px'}
                                src={krti4}
                                alt='KRTI Picture'
                            />
                            <Image
                                boxSize={'250px'}
                                src={krti5}
                                alt='KRTI Picture'
                            />
                            <Image
                                boxSize={'250px'}   
                                src={krti6} 
                                alt='KRTI Picture'
                            />
                        </Stack> */}