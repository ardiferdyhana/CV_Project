import { Progress, Image, Grid, GridItem } from '@chakra-ui/react'
import avatarImage from '../Assets/image/avatarImage.jpg'

const About = () => {
    return(
        <div className='aboutWrapper' id='about'>
            <h1>ABOUT</h1>
            <div className='underLine'></div>
            <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
                Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
            <div className='aboutContentWrapper'>
                <Image
                    boxSize='300px'
                    objectFit='contain'
                    src={avatarImage}
                    alt='Avatar'
                />
                <div className='aboutContent'>
                    <h2>Software Engineer</h2>
                    <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i>
                    <div className='listWrapper'>
                        <ul>
                            <li>
                                <strong>Birthday: </strong>
                                <p1>13 February 1999</p1>
                            </li>
                            <li>
                                <strong>Phone: </strong>
                                <p1>+6285799791379</p1>
                            </li>
                            <li>
                                <strong>City: </strong>
                                <p1>Jakarta</p1>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <strong>Age: </strong>
                                <p1>23</p1>
                            </li>
                            <li>
                                <strong>Degre: </strong>
                                <p1>Bachelor</p1>
                            </li>
                            <li>
                                <strong>Email: </strong>
                                <p1>ardi.ferdyhana@gmail.com</p1>
                            </li>
                        </ul>
                    </div>
                    <p1>
                        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero.
                        Quisquam sunt adipisci omnis et ut.
                        Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                        Cupiditate ut dicta maxime officiis quidem quia.
                        Sed et consectetur qui quia repellendus itaque neque.
                        Aliquid amet quidem ut quaerat cupiditate.
                        Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                    </p1>
                </div>

            </div>
            <h1>SKILLS</h1>
            <div className='underLine'></div>
            <div className='skillsContent'>
                <p>Magnam dolores commodi suscipit.
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                    Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
                    Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
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
        </div>
    )
}

export default About