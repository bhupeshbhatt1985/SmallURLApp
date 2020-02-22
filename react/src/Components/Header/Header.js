import React from "react";
import logo from '../../logo.svg'

const HeaderPage = () => {
    return (
        <div className="header flex-container">
            <div >
                <img width="100px" src={logo} className="App-logo" alt="logo" />
            </div>
            <div ><h1>URL shortening App</h1></div>
            
        </div>
    );
}

export default HeaderPage;