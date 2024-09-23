import React from 'react';
import './Projects.css';

const Projects = ({ projects }) => {
    if (!projects || projects.length === 0) {
        return <p>Aucun projet disponible pour le moment.</p>;
    }

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Mes Projets</h2>
            <div className="projects-content">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="project-title">{project.name}</h3>
                        <div className="project-columns">
                            <div className="project-left">
                                {/* Suppression de process.env.PUBLIC_URL ici */}
                                <img src={project.image} alt={project.name} className="project-image" />
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    Voir sur GitHub
                                </a>
                            </div>
                            <div className="project-right">
                                <p><strong>Scénario du projet :</strong> {project.description}</p>
                                <p><strong>Ce que j'ai appris :</strong> {project.learned}</p>
                                <p><strong>Compétences acquises :</strong> {project.skills}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;