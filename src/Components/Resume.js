import { Icon,Image } from "@chakra-ui/react"
import {BsCircle} from "react-icons/bs";
import cumlaudeSertif from '../Assets/image/cumlaudeSertif.png'

const Resume = () => {
    return(
        <section className="resumeWrapper" id="resume">
            <h1>RESUME</h1>
            <div className='underLine'></div>
            {/* <p>
            Magnam dolores commodi suscipit.
            Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
            Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
            Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p> */}
            <div className="resumeContentWrapper">
                <div className="resumeContent">
                    <h2>Education</h2>     
                    <div className="Container overlayBg overlayTrigger">
                        <h3><Icon as={BsCircle} color='#3182ce' fontSize={20} position='relative' left='-11px' backgroundColor='white' />
                            Physics - University of Indonesia
                        </h3>
                        <div className="content">
                            <i>
                                My Bachelor Thesis is about control system design and machine learning with the title 
                                “Design of Water Level Control System Based on PLC and Reinforcement Learning with Policy Gradient Agent“
                                <div className="overlayContent">
                                    <Image
                                        boxSize='600px'
                                        objectFit='contain'
                                        src={cumlaudeSertif}
                                        alt='Avatar'
                                    />
                                </div>
                            </i>
                            <ul>
                                <li>Specialization in instrumentation systems</li>
                                <li>Graduated Cumlaude with a GPA of 3.54 out of 4.00</li>
                            </ul>
                            
                        </div>
                    </div>

                    <br></br>

                    <h2>Organization Experience</h2>     
                    <div className="Container">
                        <h3><Icon as={BsCircle} color='#3182ce' fontSize={20} position='relative' left='-11px' backgroundColor='white' />
                            UAV Team - University of Indonesia Robotics Team
                        </h3>
                        <div className="content">
                            <i> Dec 2017 - Jun 2020</i>
                            <ul>
                                <li>Assembling electronic parts for racing plane UAV</li>
                                <li>perform efficiency calculations to select electronic components so that the UAV racing plane works optimally</li>
                                <li>Configure signal transmission for data transmission from UAV to Ground ControlStation using telemetry</li>
                                <li>Configure the required parameters for the autopilot system on the UAV</li>
                                <li>Programming UAV control for a specific mission</li>
                                <li>Applying computer vision to the HybridQuadplane UAV to detect objects</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="resumeContent">
                    <h2>Experience</h2>  
                    <div className="Container">
                        <h3><Icon as={BsCircle} color='#3182ce' fontSize={20} position='relative' left='-11px' backgroundColor='white' />
                        System Engineer - PT Yokogawa Indonesia.</h3> 
                        <div className="content">
                            <i>Jul 2020 - Aug 2020</i>
                            <ul>
                                <li>Develops and Configures DistributedControl System(DCS)</li>
                                <li>Performs internal test of DCS database, graphics, and control application</li>
                                <li>Assist in conducting Factory Acceptance Test (FAT) for DCS Application</li>
                            </ul>
                        </div>
                        <br></br>
                        <h3><Icon as={BsCircle} color='#3182ce' fontSize={20} position='relative' left='-11px' backgroundColor='white' />
                        Robotics Tutor - Artificial Intelligence Center Indonesia</h3>
                        <div className="content">
                            <i>Jul 2020 - Nov 2021</i>
                            <ul>
                                <li>Teaching programming and AI knowledge through robotics</li>
                                <li> Teaching to create a mobile application for robot controller</li>
                            </ul>
                        </div>
                        <br></br>
                        <h3><Icon as={BsCircle} color='#3182ce' fontSize={20} position='relative' left='-11px' backgroundColor='white' />
                            Programming Tutor - Jakarta Coding Academy</h3>
                        <div className="content">
                            <i>Oct 2020 - Nov 2021</i>
                            <ul>
                                <li>Teaching Lua Programming language to the elementary student using games as a media platform called ROBLOX</li>
                            </ul>
                        </div>
                        <br></br>
                        <h3><Icon as={BsCircle} color='#3182ce' fontSize={20} position='relative' left='-11px' backgroundColor='white' />
                        Software Engineer - PT Respati Solusi Teknologi </h3>
                        <div className="content">
                            <i>Nov 2021 - Present</i>
                            <ul>
                                <li>Design and develop software that the client needs according to software requirements specification</li>
                                <li>Directly involved in the field for program acceptance test</li>
                                <li>Troubleshoot, debug and upgrade existing systems</li>
                                <li>Work alongside other engineers on the team to elevate technology and consistently apply best practices.</li>
                                <li>Document and maintain software functionality</li>
                            </ul>
                        </div>
                    </div> 

                </div>
            </div>

        </section>
    )
}

export default Resume