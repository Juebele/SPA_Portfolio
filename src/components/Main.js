import React from 'react';

function Main(props) {
    console.log(props)

    return (
<section class="container image-row">
    <div class="card col-10">
            <div class="card-image project-1"></div>
        <h2>Market Research Tool</h2>
        <p>This group project uses third-party APIs to fetch live stock market data. This was an early experience with group work that taught me how to use Git collaboratively.</p>
        <a href="https://juebele.github.io/Ticker-Lookup/" target="_blank">Learn More</a>
    </div>
    <div class="card col-10">
        <div class="card-image project-2"></div>
        <h2>Flapjax Official Site</h2>
        <p>This is a website that I built for a local catering business. It includes professional photos, info about the business, and a link to send the owner an email.</p>
        <a href="https://juebele.github.io/Flapjax-Website/" target="_blank">Learn More</a>
    </div>
    <div class="card col-10">
        <div class="card-image project-3"></div>
        <h2>Note-taking App</h2>
        <p>This project tasked me with learning how to use Express to build a note-taking app. This was my first experience using Heroku to build a full-stack application.</p>
        <a href="https://note-taking-app-juebele.herokuapp.com/" target="_blank">Learn More</a>
    </div>
</section>
    )
}

export default Main;