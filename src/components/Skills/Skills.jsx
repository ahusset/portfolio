import React from 'react';

const Skills = ({ skills }) => {
    return (
        <section id="skills" className="skills-section">
            <h2>Mes Compétences</h2>
            <div className="skills-content">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-box">
                        <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                        <h3>{skill.name}</h3>
                        <p>{skill.summary}</p>
                        <a href={skill.link} target="_blank" rel="noopener noreferrer">
                            Voir la documentation officielle
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;