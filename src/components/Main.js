import React from 'react';

function Main(props) {
    console.log(props)

    return (
<section class="container">
    <div class="card">
        <div class="card-image project-1"></div>
        <h2>Project 1</h2>
        <p>The Cessna 172 Skyhawk is an American four-seat, single-engine, high wing, fixed-wing aircraft made by the Cessna Aircraft Company.[2] First flown in 1955,[2] more 172s have been built than any other aircraft.</p>
        <a href="https://en.wikipedia.org/wiki/Cessna_172" target="_blank">Learn More</a>
    </div>
    <div class="card">
        <div class="card-image project-2"></div>
        <h2>Project 2</h2>
        <p>The Cessna 208 Caravan is a utility aircraft produced by Cessna. The project was commenced on November 20, 1981, and the prototype first flew on December 9, 1982.</p>
        <a href="https://en.wikipedia.org/wiki/Cessna_208_Caravan" target="_blank">Learn More</a>
    </div>
    <div class="card">
        <div class="card-image project-3"></div>
        <h2>Project 3</h2>
        <p>The Cessna Citation II are light corporate jets built by Cessna as part of the Citation family. Stretched from the Citation I, the Model 550 was announced in September 1976, first flew on January 31, 1977, and was certified in March 1978. </p>
        <a href="https://en.wikipedia.org/wiki/Cessna_CitationJet/M2" target="_blank">Learn More</a>
    </div>
</section>
    )
}

export default Main;