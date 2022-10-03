import { Progress, Image, Grid, GridItem } from '@chakra-ui/react'
import avatarImage from '../Assets/image/avatarImage2.jpg'

const About = () => {
    return(
        <section className='aboutWrapper' id='about'>
            <h1>ABOUT</h1>
            <div className='underLine'></div>
            <p>
            I'm a physics student who's really into programming. 
            I started this obsession because I joined a robotics group at college. 
            Because of my background in Physics, I have excellent problem-solving skills that help a lot while developing software.
             Besides that, I'm a fast learner, which makes me more adaptive to new knowledge and helps me implement the innovation needed.
            </p>
            <div className='aboutContentWrapper'>
                <Image
                    boxSize='250px'
                    objectFit='contain'
                    src={avatarImage}
                    alt='Avatar'
                />
                <div className='aboutContent'>
                    <h2>Software Engineer</h2>
                    <i>
                        I am a software engineer for IT Services and IT Consultant Corporation that specialize in railways.
                        Currently, I am involved in software development for several train projects in Indonesia.
                    </i>
                    <div className='listWrapper'>
                        <ul>
                            <li>
                                <strong>Birthday: </strong> 13 February 1999
                            </li>
                            <li>
                                <strong>Age: </strong> 23
                            </li>

                            <li>
                                <strong>City: </strong> Jakarta

                            </li>
                            <li>
                                <strong>Phone: </strong> +6285799791379
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <strong>Degre: </strong> Bachelor
                            </li>
                            <li>
                                <strong>Major: </strong> Physics
                            </li>
                            <li>
                                <strong>University: </strong> University of Indonesia
                            </li>
                            <li>
                                <strong>Email: </strong> ardi.ferdyhana@gmail.com
                            </li>
                        </ul>
                    </div>
                    
                        {/* Officiis eligendi itaque labore et dolorum mollitia officiis optio vero.
                        Quisquam sunt adipisci omnis et ut.
                        Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                        Cupiditate ut dicta maxime officiis quidem quia.
                        Sed et consectetur qui quia repellendus itaque neque.
                        Aliquid amet quidem ut quaerat cupiditate.
                        Ab et eum qui repellendus omnis culpa magni laudantium dolores. */}
                    
                </div>

            </div>
            <h1>SKILLS</h1>
            <div className='underLine'></div>
            <div className='skillsContent'>
                <p>
                These are some of the skills I've developed so far, 
                and of course not planning to stop at this point because 
                I want to be an expert and love to learn new skills
                </p>
                <Grid
                    h='200px'
                    templateRows='repeat(6, 1fr)'
                    templateColumns='repeat(4, 1fr)'
                    columnGap={20}
                    rowGap={3}
                    paddingTop='30px'
                    >
                    <GridItem rowSpan={1} colSpan={1}>C++</GridItem>
                    <GridItem rowSpan={1} colSpan={1} textAlign='right'>80%</GridItem>
                    <GridItem rowSpan={1} colSpan={1}>C++</GridItem>
                    <GridItem rowSpan={1} colSpan={1} textAlign='right'>80%</GridItem>
                    <GridItem rowSpan={1} colSpan={2}>
                        <Progress value={80} colorScheme='teal'/>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={2}>
                        <Progress value={80} colorScheme='teal'/>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1}>C++</GridItem>
                    <GridItem rowSpan={1} colSpan={1} textAlign='right'>80%</GridItem>
                    <GridItem rowSpan={1} colSpan={1}>C++</GridItem>
                    <GridItem rowSpan={1} colSpan={1}textAlign='right'>80%</GridItem>
                    <GridItem rowSpan={1} colSpan={2}>
                        <Progress value={80} colorScheme='teal'/>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={2}>
                        <Progress value={80} colorScheme='teal'/>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1}>C++</GridItem>
                    <GridItem rowSpan={1} colSpan={1} textAlign='right'>80%</GridItem>
                    <GridItem rowSpan={1} colSpan={1}>C++</GridItem>
                    <GridItem rowSpan={1} colSpan={1}textAlign='right'>80%</GridItem>
                    <GridItem rowSpan={1} colSpan={2}>
                        <Progress value={80} colorScheme='teal'/>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={2}>
                        <Progress value={80} colorScheme='teal'/>
                    </GridItem>
                </Grid>
            </div>
        </section>
    )
}

export default About