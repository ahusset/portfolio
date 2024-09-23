import React from 'react';
import './Skills.css';

const Skills = ({ skills }) => {
    if (!skills || skills.length === 0) {
        return <p>Aucune compétence disponible pour le moment.</p>;
    }

    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">Mes Compétences</h2>
            <div className="skills-content">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <img src={skill.logo} alt={skill.name} className="skill-logo" />
                        <h3>{skill.name}</h3>
                        <p className="skill-summary">{skill.summary}</p>
                        <a href={skill.link} target="_blank" rel="noopener noreferrer" className="skill-link">
                            En savoir plus
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;