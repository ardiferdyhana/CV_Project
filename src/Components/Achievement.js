import { Link, Button, Collapse, Box, useDisclosure, Image, Stack} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Gallery from "react-photo-gallery"
import Photos from './PhotoList.js'
import Photos2 from './PhotoList2.js'
import krtiLogo from '../Assets/image/KRTI2018.jpg'
import intelLogo from '../Assets/image/intel.png'
import intelSertif from '../Assets/image/intelSertif.png'
import udemyLogo from '../Assets/image/udemy.png'
import udemySertif from '../Assets/image/udemySertif.png'
import omronLogo from '../Assets/image/omron.png'
import omronSertif from '../Assets/image/omronSertif.png'
import ideathonLogo from '../Assets/image/ideathon.jpeg'
import { useState } from 'react'



const Achievement = () => {
    const { isOpen, onToggle } = useDisclosure()
    const [toggle, setToggle] = useState(false)   
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
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
                        bg= 'teal'
                        rounded='md'
                        shadow='md'
                        >
                        <p>
                            Kontes Robot Terbang Indonesia (KRTI) adalah kompetisi pesawat tanpa awak (UAV)
                            paling bergengsi di Indonesia yang diselenggarakan oleh Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia (Ristekdikti) dan diperuntukkan bagi seluruh universitas di Indonesia.
                            Kompetisi ini diadakan setiap tahunnya di bulan Oktober atau November.
                        </p>
                        <br></br>
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
                                . May 2020
                            </h3>
                        </div>   
                    </Button>
                    <Collapse in={isOpen} animateOpacity>
                        <Box
                        className='flexCenter'
                        p='40px'
                        color='white'
                        mt='4'
                        bg= 'teal'
                        rounded='md'
                        shadow='md'
                        >
                        <p>
                            Kontes Robot Terbang Indonesia (KRTI) adalah kompetisi pesawat tanpa awak (UAV)
                            paling bergengsi di Indonesia yang diselenggarakan oleh Kementerian Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia (Ristekdikti) dan diperuntukkan bagi seluruh universitas di Indonesia.
                            Kompetisi ini diadakan setiap tahunnya di bulan Oktober atau November.
                        </p>
                        <br></br>
                        <Gallery photos={Photos2}/>
                        </Box>
                    </Collapse>  
                </div>
                <br></br>
                <h2>Licenses & Certifications</h2>
                <div className="honorContent">
                    <Button onClick={() => setToggle1(!toggle1)}>
                        <Image
                            borderRadius='10px'
                            boxSize='75px'
                            src={intelLogo}
                            alt='logo'
                        />
                        <div className='flexLeft'>
                            <h3><strong>AI for Future Workforce Program</strong></h3>
                            <Link margin={"5px 0px 5px 0px"} href='https://www.intel.com/content/www/us/en/homepage.html' isExternal>
                                Intel Corporation <ExternalLinkIcon mx='2px' />
                            </Link>
                            <h3>Issued Sep 2021</h3>
                        </div>   
                    </Button>
                    <Collapse in={toggle1} animateOpacity>
                        <Box
                        className='flexCenter'
                        p='40px'
                        color='white'
                        mt='4'
                        bg= 'teal'
                        rounded='md'
                        shadow='md'
                        >
                            <Image 
                                boxSize='100%'
                                src={intelSertif}
                                alt='Sertif'
                            />
                        </Box>
                    </Collapse>    
                </div>

                <div className="honorContent">
                    <Button onClick={() => setToggle2(!toggle2)}>
                        <Image
                            borderRadius='10px'
                            boxSize='75px'
                            src={udemyLogo}
                            alt='logo'
                        />
                        <div className='flexLeft'>
                            <h3><strong>Scada - Design, Program and Interface</strong></h3>
                            <Link margin={"5px 0px 5px 0px"} href='https://www.udemy.com/' isExternal>
                                Udemy <ExternalLinkIcon mx='2px' />
                            </Link>
                            <h3>Issued Aug 2021</h3>
                        </div>   
                    </Button>
                    <Collapse in={toggle2} animateOpacity>
                        <Box
                        className='flexCenter'
                        p='40px'
                        color='white'
                        mt='4'
                        bg= 'teal'
                        rounded='md'
                        shadow='md'
                        >
                            <Image 
                                boxSize='100%'
                                src={udemySertif}
                                alt='Sertif'
                            />
                        </Box>
                    </Collapse>    
                </div>
                <div className="honorContent">
                    <Button onClick={() => setToggle3(!toggle3)}>
                        <Image
                            borderRadius='10px'
                            boxSize='75px'
                            src={omronLogo}
                            alt='logo'
                        />
                        <div className='flexLeft'>
                            <h3><strong>Introduction to Programmable Controller & Basic Programmer</strong></h3>
                            <Link margin={"5px 0px 5px 0px"} href='https://www.omron.co.id/' isExternal>
                                PT Omron Electronics <ExternalLinkIcon mx='2px' />
                            </Link>
                            <h3>Issued Jun 2021</h3>
                        </div>   
                    </Button>
                    <Collapse in={toggle3} animateOpacity>
                        <Box
                        className='flexCenter'
                        p='40px'
                        color='white'
                        mt='4'
                        bg= 'teal'
                        rounded='md'
                        shadow='md'
                        >
                            <Image 
                                boxSize='100%'
                                src={omronSertif}
                                alt='Sertif'
                            />
                        </Box>
                    </Collapse>    
                </div>
            </div>
        </section>
    )
}

export default Achievement