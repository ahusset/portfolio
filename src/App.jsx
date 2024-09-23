import React, { useState } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import ModalContact from './components/ModalContact/ModalContact';
import './App.css';
import portfolioData from './data/data.json';  // Import direct du fichier JSON

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="App">
            {portfolioData.about && portfolioData.about.photo && (
                <Header
                    photo={`${process.env.PUBLIC_URL}${portfolioData.about.photo}`}  // Ajout de PUBLIC_URL pour la photo
                    linkedin={portfolioData.about.linkedin}
                    openModal={openModal}
                />
            )}

            {portfolioData.about && (
                <About about={{
                    ...portfolioData.about,
                    photo: `${process.env.PUBLIC_URL}${portfolioData.about.photo}`  // Ajout de PUBLIC_URL pour la photo
                }} />
            )}

            {portfolioData.projects && (
                <Projects projects={portfolioData.projects.map(project => ({
                    ...project,
                    image: `${process.env.PUBLIC_URL}${project.image}`  // Ajout de PUBLIC_URL pour les images des projets
                }))} />
            )}

            {portfolioData.skills && (
                <Skills skills={portfolioData.skills.map(skill => ({
                    ...skill,
                    logo: `${process.env.PUBLIC_URL}${skill.logo}`  // Ajout de PUBLIC_URL pour les logos de compétences
                }))} />
            )}

            <ModalContact
                isOpen={isModalOpen}
                onClose={closeModal}
                photo={`${process.env.PUBLIC_URL}${portfolioData.about.photo}`}  // Ajout de PUBLIC_URL pour la photo de la modal
                linkedin={portfolioData.about.linkedin}
                phone={portfolioData.about.phone}
                email={portfolioData.about.email}
                address={portfolioData.about.address}
            />

            <Footer />
        </div>
    );
}

export default App;