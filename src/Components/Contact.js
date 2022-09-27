import { Grid, GridItem, IconButton, Input, Textarea, Button } from "@chakra-ui/react"
import {FiMail,FiMapPin,FiSmartphone} from "react-icons/fi"

const Contact = () => {
    return (
        <div className="contactWrapper">
            <h1>CONTACT</h1>
            <div className='underLine'></div>
            <br></br>
            <br></br>
            <div className="contactContentWrapper">
                <div className="infoContainer">
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
                                icon={<FiMapPin />}
                                colorScheme='blue'
                            />
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
                            <IconButton
                                marginTop='5px'
                                fontSize='24px'
                                size='lg'
                                borderRadius='full'
                                aria-label='email'
                                icon={<FiSmartphone />}
                                colorScheme='blue'
                            />
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
                            <Input placeholder='Your name' size='md' />
                        </GridItem>
                        <GridItem rowSpan={1} colSpan={1}>
                            <Input placeholder='Your email' size='md' />
                        </GridItem>
                    </Grid>
                    <Input marginBottom={'20px'} placeholder='Subject' size='md' />
                    <Textarea height={'150px'} placeholder='Message' />
                    <Button
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

        </div>
    )
}

export default Contact