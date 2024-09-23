import React from 'react';
import './About.css';

const About = ({ about }) => {
    if (!about || !about.description) {
        return null;
    }

    const paragraphs = about.description.split('\n\n'); // Diviser le texte en deux paragraphes

    return (
        <section id="about" className="about-section">
            <h2 className="section-title">A propos de moi</h2>
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