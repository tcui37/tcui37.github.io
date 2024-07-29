import React from 'react';
import pfp from '../imgs/tonycenter2.jpg'
import { Grid } from '@mui/material';
const cai = 'https://www.google.com/search?q=microsoft+cloud+%2B+ai&oq=micro&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIVCAEQLhhDGMcBGLEDGNEDGIAEGIoFMgYIAhBFGDsyBggDEEUYOzIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEHODMxajBqMagCALACAA&sourceid=chrome&ie=UTF-8'
const About: React.FC = () => {

    return (
        <div>
            <div className='intro-flexbox'>
                <div className='item'>
                <h1>Tony A. Cui</h1>
                <p>Hello! I'm a first year M.Eng student at MIT</p>
                <p>Currently, I'm a software engineering intern on the <a href='https://www.cadence.com/en_US/home/tools/pcb-design-and-analysis/allegro-x-ai.html'>Allegro X AI</a> team at <a href='https://cadence.com/'>Cadence Design Systems</a>, where I'm integrating Bayesian Optimization methods for PCB design algorithms. </p>

                <p>I completed my undergraduate studies at MIT, where I conducted research at the <a href='https://cdfg.mit.edu/'>MIT Computational Design & Fabrication</a> group, working on reinforcement learning methods for black box optimization, and the <a href='https://gamelab.mit.edu/'>MIT Game Lab</a> where I worked on learning simulations for kids!</p>

                <p>Previously, I held two internships at <a href='Microsoft'>Microsoft</a>. In 2023, I worked on an internal AI information retrieval service with <a href='https://azure.microsoft.com/en-us/solutions/ai'>Microsoft Cloud & AI</a>. In 2022, I developed a command line suite for microservice development with <a href='https://www.microsoft.com/en-us/research/group/exd/'>Microsoft E & D</a>.</p>

                <p>I love playing both acoustic and electric guitar, playing volleyball and badminton, and learning how to cook.</p>

                <p>My Linkedin can be found <a href='https://www.linkedin.com/in/tcui/'>here</a>. My email is ta&#123;last_name&#125;@mit.edu  </p>

                </div>
                <div className='item'>
                    <img src={pfp} className='pfp'></img>
                </div>

            </div>
            {/* <Grid container spacing={3}>
                <Grid item xs={6}>
                <p>Hello! I'm a first year M.Eng student at MIT</p>
                <p>Currently, I'm a software engineering intern on the <a href='https://www.cadence.com/en_US/home/tools/pcb-design-and-analysis/allegro-x-ai.html'>Allegro X AI</a> team at <a href='https://cadence.com/'>Cadence Design Systems</a>, where I'm integrating Bayesian Optimization methods for PCB design algorithms. </p>

                <p>I completed my undergraduate studies at MIT, where I conducted research at the <a href='https://cdfg.mit.edu/'>MIT Computational Design & Fabrication</a> group, working on reinforcement learning methods for black box optimization, and the <a href='https://gamelab.mit.edu/'>MIT Game Lab</a> where I worked on learning simulations for kids!</p>

                <p>Previously, I held two internships at <a href='Microsoft'>Microsoft</a>. In 2023, I worked on an internal AI information retrieval service with <a href='https://azure.microsoft.com/en-us/solutions/ai'>Microsoft Cloud & AI</a>. In 2022, I developed a command line suite for microservice development with <a href='https://www.microsoft.com/en-us/research/group/exd/'>Microsoft E & D</a>.</p>

                <p>I love playing both acoustic and electric guitar, playing volleyball and badminton, and learning how to cook.</p>

                <p>My Linkedin can be found <a href='https://www.linkedin.com/in/tcui/'>here</a>. My email is ta&#123;last_name&#125;@mit.edu  </p>
                </Grid>
                <Grid item xs={6}>
                    <img src={pfp} className='pfp'></img>
                </Grid>
            </Grid> */}
        </div>
        
    );
};

export default About;