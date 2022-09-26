import { Image } from '@chakra-ui/react'

const About = () => {
    return(
        <div className='aboutWrapper'>
            <h1>ABOUT</h1>
            <div className='underLine'></div>
            <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
                Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
            <div className='aboutContentWrapper'>
                <Image
                    border='1px'
                    boxSize='250px'
                    // src={Img}
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
                                <p1>13 February 1999</p1>
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
        </div>
    )
}

export default About