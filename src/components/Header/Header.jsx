import React from 'react';
import './Header.css';

function Header({ photo, linkedin, openModal }) {
    return (
        <header className="header">
            <div className="header-left">
                <img src={photo} alt="Alexandre Husset" className="header-photo" />
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="${process.env.PUBLIC_URL}/images/images/linkedin-logo.png" alt="LinkedIn" className="linkedin-logo" />
                </a>
            </div>
            <div className="header-right">
                <a href="#about">À propos</a>
                <a href="#projects">Projets</a>
                <a href="#skills">Compétences</a>
                {/* Utilisation d'un lien pour le contact */}
                <a href="#contact" onClick={(e) => { e.preventDefault(); openModal(); }}>Contact</a>
            </div>
        </header>
    );
}

export default Header;