import { Grid, GridItem, IconButton, Input, Textarea, Button, Link } from "@chakra-ui/react"
import {FiMail,FiMapPin,FiSmartphone} from "react-icons/fi"

const Contact = () => {
    var name = ((document.querySelector('#yourName')||{}).value)||"";
    var email = ((document.querySelector('#yourEmail')||{}).value)||"";
    var subject = ((document.querySelector('#yourSubject')||{}).value)||"";
    var message = ((document.querySelector('#yourMessage')||{}).value)||"";
    
    return (
        <section className="contactWrapper" id="contact">
            <h1>CONTACT</h1>
            <div className='underLine'></div>
            <div className="contactContentWrapper">
                <div className="infoContainer">
                    <Grid
                        templateColumns={'50px 1fr'}
                        columnGap='20px'
                        marginBottom='40px'
                        
                    >
                        <GridItem rowSpan={2} colSpan={1} textAlign='left' >
                            <Link href='https://www.google.com/maps/place/Koja,+North+Jakarta+City,+Jakarta/@-6.1204933,106.8887249,14z/data=!3m1!4b1!4m5!3m4!1s0x2e6a1ff0d497530b:0xe8c38931491aa5c5!8m2!3d-6.1159103!4d106.9081259' isExternal>
                                <IconButton
                                    marginTop='5px'
                                    fontSize='24px'
                                    size='lg'
                                    borderRadius='full'
                                    aria-label='email'
                                    icon={<FiMapPin />}
                                    colorScheme='blue'
                                />
                            </Link>                           
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1} fontSize='2xl'><strong>Location:</strong></GridItem>
                        <GridItem rowSpan={1} colSpan={1}>Koja, North Jakarta, Indonesia, 14230</GridItem>
                    </Grid>
                    <Grid
                        templateColumns={'50px 1fr'}
                        columnGap='20px'
                        marginBottom='40px'                        
                    >
                        <GridItem rowSpan={2} colSpan={1} textAlign='left' >
                            <IconButton
                                marginTop='5px'
                                fontSize='24px'
                                size='lg'
                                borderRadius='full'
                                aria-label='email'
                                icon={<FiMail />}
                                colorScheme='blue'
                            />
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1} fontSize='2xl'><strong>Email:</strong></GridItem>
                        <GridItem rowSpan={1} colSpan={1}>ardi.ferdyhana@gmail.com</GridItem>
                    </Grid>
                    <Grid
                        templateColumns={'50px 1fr'}
                        columnGap='20px'      
                    >
                        <GridItem rowSpan={2} colSpan={1} textAlign='left' >
                            <Link href='https://wa.me/085799791379?text=' isExternal>
                            <IconButton
                                    marginTop='5px'
                                    fontSize='24px'
                                    size='lg'
                                    borderRadius='full'
                                    aria-label='email'
                                    icon={<FiSmartphone />}
                                    colorScheme='blue'
                                />                            
                            </Link>
                                
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1} fontSize='2xl'><strong>Call:</strong></GridItem>
                        <GridItem rowSpan={1} colSpan={1}>+6285799791379</GridItem>
                    </Grid>

                </div>
                <div className="messageContainer">
                    <Grid
                        templateColumns={'1fr 1fr'}
                        columnGap='10px'
                        marginBottom={'20px'} 
                        width='100%'     
                    >
                        <GridItem rowSpan={1} colSpan={1}>
                            <Input id="yourName" placeholder='Your name' size='md' />
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1}>
                            <Input id="yourEmail" placeholder='Your email' size='md' />
                        </GridItem>
                    </Grid>
                    <Input id="yourSubject" marginBottom={'20px'} placeholder='Subject' size='md' />
                    <Textarea id="yourMessage" height={'150px'} placeholder='Message' />
                    <Button 
                        //onClick={SendEmail(name,email,subject,message)}
                        //onClick={console.log(name,subject,email,message)}
                        mt={4}
                        colorScheme='blue'
                        type='submit'
                        borderRadius={'30px'}
                        width='160px'
                    >
                        Send Message
                    </Button>
                </div>
            </div>

        </section>
    )
}

export default Contact