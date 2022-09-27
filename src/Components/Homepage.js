import { Button, IconButton } from '@chakra-ui/react'
import { FiHome, FiUser, FiFile, FiMail } from 'react-icons/fi';
import { RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill, RiWhatsappFill, RiMailFill} from "react-icons/ri";


const Homepage = () => {
    return(
        <div className='homepageWrapper'>
            <div className="navBarWrapper">
                <Button leftIcon={<FiHome />} colorScheme='blue' variant='solid' size='lg'>
                    <span className='spanBtn'>
                        Home
                    </span>
                </Button>
                <Button leftIcon={<FiUser />} colorScheme='blue' variant='solid' size='lg'>
                    <span className='spanBtn'>
                        About
                    </span>
                </Button>
                <Button leftIcon={<FiFile />} colorScheme='blue' variant='solid' size='lg'>
                    <span className='spanBtn'>
                        Resume
                    </span>
                </Button>
                <Button leftIcon={<FiMail />} colorScheme='blue' variant='solid' size='lg'>
                    <span className='spanBtn'>
                        Contact
                    </span>
                </Button>
            </div>
            <div className='textHomeWrapper'>
                <h1>Ardi Ferdyhana</h1>
                <p>I'm Software Enginner</p>
                <div className='iconWrapper'>
                    <IconButton variant='ghost' aria-label='instagram' icon={<RiInstagramFill />} />
                    <IconButton variant='ghost' aria-label='linkedin' icon={<RiLinkedinBoxFill />} />
                    <IconButton variant='ghost' aria-label='twitter' icon={<RiTwitterFill />} />
                    <IconButton variant='ghost' aria-label='whatsapp' icon={<RiWhatsappFill />} />
                    <IconButton variant='ghost' aria-label='email' icon={<RiMailFill />} />
                </div>
            </div>
        </div>
    )
}

export default Homepage