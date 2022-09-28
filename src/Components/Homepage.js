import { Button, IconButton, Link } from '@chakra-ui/react'
import { useState } from 'react';
import { FiHome, FiUser, FiFile, FiMail } from 'react-icons/fi';
import { RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill, RiWhatsappFill, RiMailFill} from "react-icons/ri";


const Homepage = () => {

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

    return(
        <div className='homepageWrapper' id='home'>
            <div className="navBarWrapper">
                <Link href='#home'>
                    <Button className='home' leftIcon={<FiHome />} colorScheme='blue' variant='solid' size='lg'>
                        <span className='spanBtn'>
                            Home
                        </span>
                    </Button>
                </Link>
                <Link href='#about'>
                    <Button leftIcon={<FiUser />} colorScheme='blue' variant='solid' size='lg'>
                        <span className='spanBtn'>
                            About
                        </span>
                    </Button>
                </Link>
                <Link href='#resume'>
                    <Button  leftIcon={<FiFile />} colorScheme='blue' variant='solid' size='lg'>
                        <span className='spanBtn'>
                            Resume
                        </span>
                    </Button>
                </Link>
                <Link href='#contact'>
                    <Button leftIcon={<FiMail />} colorScheme='blue' variant='solid' size='lg'>
                        <span className='spanBtn'>
                            Contact
                        </span>
                    </Button>
                </Link>
            </div>
            <div className='textHomeWrapper'>
                <h1>Ardi Ferdyhana</h1>
                <p>I'm Software Enginner</p>
                <div className='iconWrapper'>
                    <Link href='https://www.instagram.com/ardi_ferdyhana/' isExternal>
                        <IconButton isActive variant='ghost' aria-label='instagram' icon={<RiInstagramFill />} />
                    </Link>
                    <Link href='https://www.linkedin.com/in/ardiferdyhana' isExternal>
                        <IconButton variant='ghost' aria-label='linkedin' icon={<RiLinkedinBoxFill />} />
                    </Link>
                    <Link href='https://twitter.com/ardi_ferdyhana' isExternal>
                        <IconButton variant='ghost' aria-label='twitter' icon={<RiTwitterFill />} />
                    </Link>
                    <Link href='https://wa.me/085799791379?text=' isExternal>
                        <IconButton variant='ghost' aria-label='whatsapp' icon={<RiWhatsappFill />} />
                    </Link>
                    <Link href='#contact'>
                        <IconButton variant='ghost' aria-label='email' icon={<RiMailFill />} />
                    </Link>    
                </div>
            </div>
        </div>
    )
}

export default Homepage