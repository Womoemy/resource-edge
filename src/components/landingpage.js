import React from 'react';
import logoMini from './assets/Size=Mini.svg';
import menu from './assets/menu.svg';

function LandingPage() {
    return (
        <div className="NavBar">
            <img className="LogoMini" src={logoMini} alt="RE Logo"/>
            <img className="Menu" src={menu} />
        </div>
    );
}

// the blood of jesus
// remind God of works of service

export default LandingPage;