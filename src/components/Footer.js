import React from 'react';

function Footer(props) {
    console.log(props)

    return (
        <div className='container-fluid row'>
            <div className='col'>
                <p className='justify-content-end'>© 2023, James Uebele</p>
            </div>
            <div className='col'>
                <p>Made with ❤️ by James Uebele</p>
            </div>
            <div id="contributorLinks" className='col d-flex'>
                <div className='row justify-content-center'>
                    <a href="https://github.com/Juebele" target="_blank" className='footerLink col-auto'>Github</a>
                    <p className='col-auto'>|</p>
                    <a href="https://www.linkedin.com/in/juebele/" target="blank" className='footerLink col-auto'>LinkedIn</a>
                    <p className='col-auto'>|</p>
                    <a href="./assets/Resume_2023.docx" download="Resume_2023.docx" className='footerLink col-auto'>Resume</a>
                </div>
            </div>
        </div>
    );
}

export default Footer

