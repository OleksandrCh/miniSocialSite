import React from 'react';
import preloader from "../../../assets/Spinner-1s-200px.svg";

function Preloader(props) {
    return (
        <div style={{position: 'absolute', top:'50%', right:'50%'}}>
            <img src={preloader} alt="preloader"/>
        </div>
    );
}

export default Preloader;
