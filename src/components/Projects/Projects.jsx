import React from 'react';

const Projects = ({ projects }) => {
    return (
        <section id="projects" className="projects-section">
            <h2>Mes Projets</h2>
            <div className="projects-content">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-left">
                            <img src={project.image} alt={project.name} className="project-image" />
                            <h3>{project.name}</h3>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                Voir sur GitHub
                            </a>
                        </div>
                        <div className="project-right">
                            <p>{project.description}</p>
                            <p><strong>Compétences acquises :</strong> {project.skills}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;