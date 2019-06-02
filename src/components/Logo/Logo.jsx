import React from 'react';
import Tilt from 'react-tilt';
import brainlogo from './brain-logo.png';
import './Logo.css';
const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 25 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3"> 
                    <img style={{paddingTop:5}}src={brainlogo} alt="brain logo"/>
                    {/* {brainlogo} */}
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;