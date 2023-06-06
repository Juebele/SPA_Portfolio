import React from 'react';
import Headshot from '../assets/headshot.png';

function About(props) {
    console.log(props)

    return (
        <section class="container">
        <div class="row about-row">
            <div class="col-4"><img src={Headshot} alt="an image of me" class="headshot"></img></div>
            <div class="col-8 about-text">Hello! I'm currently a Web Development Student at Georgia Tech who loves learning about new technologies. My work in the supply chain industry ignited my passion for process design, which led ultimately a fascination with web development and software engineering.</div>
        </div>
        </section>   
    );
}

export default About