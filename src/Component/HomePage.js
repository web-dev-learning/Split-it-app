import React from 'react';
import logo from "../images/Split-it-logo.png";

function HomePage() {
    return (
        <div>
            <img src={logo} alt="Spli-it app logo" />
            <button>Log-in</button>
            <button>Sign-up</button>
        </div>
    )
}

export default HomePage;