import React from 'react';
import Project1 from '../assets/stonks.png';
import Project2 from '../assets/flapjax.png';
import Project3 from '../assets/notes.png';


function Main(props) {
    console.log(props)

    return (
<section class="container image-row">
<div class="row">
    <div class="card col-md" onclick="link">
            <div class="project-1"><img src={Project1} alt="an image of my first project" class="card-image"></img></div>
        <h2>Market Research Tool</h2>
        <p>This group project uses third-party APIs to fetch live stock market data. This was an early experience with group work that taught me how to use Git collaboratively.</p>
        <a href="https://juebele.github.io/Ticker-Lookup/" target="_blank">Learn More</a>
    </div>
    <div class="card col-md">
        <div class="project-2"><img src={Project2} alt="an image of my flapjax site" class="card-image"></img></div>
        <h2>Flapjax Official Site</h2>
        <p>This is a website that I built for a local catering business. It includes professional photos, info about the business, and a link to send the owner an email.</p>
        <a href="https://juebele.github.io/Flapjax-Website/" target="_blank">Learn More</a>
    </div>
    <div class="card col-md">
        <div class="project-3"><img src={Project3} alt="an image of my note-taking app" class="card-image"></img></div>
        <h2>Note-taking App</h2>
        <p>This project tasked me with learning how to use Express to build a note-taking app. This was my first experience using Heroku to build a full-stack application.</p>
        <a href="https://note-taking-app-juebele.herokuapp.com/" target="_blank">Learn More</a>
    </div>
</div>
</section>
    )
}

export default Main;