import { Button, IconButton, Link } from '@chakra-ui/react'
import { RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill, RiWhatsappFill, RiMailFill} from "react-icons/ri";

const Footer = () => {
    return(
        <div className="footerWrapper">
            <h1>Ardi Ferdyhana</h1>
            <i>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</i>
            <div className='iconWrapper2'>
                    <Link href='https://www.instagram.com/ardi_ferdyhana/' isExternal>
                        <IconButton borderRadius={'full'} variant='solid' aria-label='instagram' icon={<RiInstagramFill />} />
                    </Link>
                    <Link href='https://www.linkedin.com/in/ardiferdyhana' isExternal>
                        <IconButton borderRadius={'full'} variant='solid' aria-label='linkedin' icon={<RiLinkedinBoxFill />} />
                    </Link>
                    <Link href='https://twitter.com/ardi_ferdyhana' isExternal>
                        <IconButton borderRadius={'full'} variant='solid' aria-label='twitter' icon={<RiTwitterFill />} />
                    </Link>
                    <Link href='https://wa.me/085799791379?text=' isExternal>
                        <IconButton borderRadius={'full'} variant='solid' aria-label='whatsapp' icon={<RiWhatsappFill />} />
                    </Link>
                    <Link href='#contact'>
                        <IconButton borderRadius={'full'} variant='solid' aria-label='email' icon={<RiMailFill />} />
                    </Link>    
            </div>
        </div>
    )
}

export default Footer