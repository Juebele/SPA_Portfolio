import React from 'react';

function Footer(props) {
    console.log(props)

    return (
        <div className={`alert alert-${props.type || 'success'}`}>
            <a>"https://github.com/Juebele/"</a>
        </div>
    );
}

export default Footer