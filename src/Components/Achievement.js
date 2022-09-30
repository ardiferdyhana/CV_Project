import { Link, Button, Collapse, Box, useDisclosure, Image, Stack} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Gallery from "react-photo-gallery"
import Photos from './PhotoList.js'
import krtiLogo from '../Assets/image/KRTI2018.jpg'
import ideathonLogo from '../Assets/image/ideathon.jpeg'
import { useState } from 'react'



const Achievement = () => {
    const { isOpen, onToggle } = useDisclosure()
    const [toggle, setToggle] = useState(false)
    return(
        <section className="achievementWrapper" id='achievement'>
            <h1>ACHIEVEMENT</h1>
            <div className='underLine'></div>
            <div className="honorWrapper">
                <h2>Honors & Awards</h2>
                <div className="honorContent">
                    <Button onClick={() => setToggle(!toggle)}>
                        <Image
                            borderRadius='10px'
                            boxSize='75px'
                            src={krtiLogo}
                            alt='KRTI2018'
                        />
                        <div className='flexLeft'>
                            <h3><strong>Best Design for Racing Plane Division</strong></h3>
                            <Link margin={"5px 0px 5px 0px"} href='https://pusatprestasinasional.kemdikbud.go.id/event/sains-dan-teknologi/dikti/kontes-robot-terbang-indonesia-2021-2021-dikti' isExternal>
                                Kontes Robot Terbang Indonesia 2018 <ExternalLinkIcon mx='2px' />
                            </Link>
                            <h3>Issued by &nbsp;
                            <Link href='https://en.wikipedia.org/wiki/Ministry_of_Research_and_Technology' isExternal>
                                Ministry of Research and Technology of the Republic of Indonesia
                            </Link>
                                . Nov 2018
                            </h3>
                        </div>   
                    </Button>
                    <Collapse in={toggle} animateOpacity>
                        <Box
                        className='flexCenter'
                        p='40px'
                        color='white'
                        mt='4'
                        bg='#3182ce'
                        rounded='md'
                        shadow='md'
                        >
                        <p>
                            Kontes Robot Terbang Indonesia (KRTI) adalah kompetisi pesawat tanpa awak (UAV)
                            paling bergengsi di Indonesia yang diselenggarakan oleh Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia (Ristekdikti) dan diperuntukkan bagi seluruh universitas di Indonesia.
                            Kompetisi ini diadakan setiap tahunnya di bulan Oktober atau November.
                        </p>
                        <br></br>
                        <h3>Gallery</h3>
                        <Gallery photos={Photos} />
                        </Box>
                    </Collapse>
                    
                </div>
                <div className="honorContent">
                    <Button onClick={onToggle}>
                        <Image
                            borderRadius='10px'
                            boxSize='75px'
                            src={ideathonLogo}
                            alt='KRTI2018'
                        />
                        <div className='flexLeft'>
                            <h3><strong>Winner of IDEAthon Indonesia</strong></h3>
                            <Link margin={"5px 0px 5px 0px"} href='https://lldikti13.kemdikbud.go.id/2020/04/09/ideathon-indonesia-gotong-royong-melindungi-bangsa-dari-covid-19/' isExternal>
                                IDEAthon Indonesia 2020 <ExternalLinkIcon mx='2px' />
                            </Link>
                            <h3>Issued by &nbsp;
                            <Link href='https://en.wikipedia.org/wiki/Ministry_of_Research_and_Technology' isExternal>
                                Ministry of Research and Technology of the Republic of Indonesia
                            </Link>
                                . Nov 2018
                            </h3>
                        </div>   
                    </Button>
                    <Collapse in={isOpen} animateOpacity>
                        <Box
                        className='flexCenter'
                        p='40px'
                        color='white'
                        mt='4'
                        bg='#3182ce'
                        rounded='md'
                        shadow='md'
                        >
                        <p>
                            Kontes Robot Terbang Indonesia (KRTI) adalah kompetisi pesawat tanpa awak (UAV)
                            paling bergengsi di Indonesia yang diselenggarakan oleh Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia (Ristekdikti) dan diperuntukkan bagi seluruh universitas di Indonesia.
                            Kompetisi ini diadakan setiap tahunnya di bulan Oktober atau November.
                        </p>
                        <br></br>
                        <h3>Gallery</h3>
                        <Gallery photos={Photos} />
                        </Box>
                    </Collapse>
                    
                </div>
            </div>
        </section>
    )
}

export default Achievement