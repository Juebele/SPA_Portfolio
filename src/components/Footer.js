import React from 'react';

function Footer(props) {
    console.log(props)

    return (
        <div class="container">
            <ul>
                <li><a href="https://github.com/Juebele" target="_blank">github</a></li>
                <li><a href="https://www.linkedin.com/in/juebele/" target="blank">LinkedIn</a></li>
            </ul>
        </div>
    );
}

export default Footer