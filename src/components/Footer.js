import React from 'react';

function Footer(props) {
    console.log(props)

    return (
        <div className='container-fluid row'>
            <div className='col'>
            <p className='col container-fluid justify-content-end'>© 2023, James Uebele</p>
            </div>
            <div className='col'>
            <p>Made with ❤️ by James Uebele</p>
            </div>
            <div id="contributorLinks" className='col container-fluid'>
                <div className='row'>
                <p><a href="https://github.com/Juebele" target="_blank" className='col footer-link'>Github</a></p>
                <p className='col'> | </p>
                <p><a href="https://www.linkedin.com/in/juebele/" target="blank" className='col footer-link'>LinkedIn</a></p>
                <p className='col'> | </p>
                <p><a href="/images/myw3schoolsimage.jpg" download="Resume_2023.docx" className='col footer-link'>Resume</a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer

