import React from 'react';

const About = ({ about }) => {
    const paragraphs = about.description.split('\n\n'); // Diviser le texte en deux paragraphes

    return (
        <section id="about" className="about-section">
            <h2>À propos de moi</h2>
            <div className="about-content">
                <div className="about-box">
                    <p>{paragraphs[0]}</p>
                </div>
                <div className="about-box">
                    <p>{paragraphs[1]}</p>
                </div>
            </div>
        </section>
    );
};

export default About;