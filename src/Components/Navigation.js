import { Button, IconButton } from '@chakra-ui/react'
import { FiHome, FiUser, FiFile, FiMail } from 'react-icons/fi';

const Navigation = () => {
    return(
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
    )
}

export default Navigation