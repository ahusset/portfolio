import React from 'react';

const Header = ({ photo, linkedin }) => {
    return (
        <header className="header">
            <div className="header-left">
                <img src={photo} alt="Moi" className="header-photo" />
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="/images/linkedin-logo.png" alt="LinkedIn" className="linkedin-logo" />
                </a>
            </div>
            <nav className="header-right">
                <a href="#about">À propos</a>
                <a href="#skills">Compétences</a>
                <a href="#projects">Projets</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;