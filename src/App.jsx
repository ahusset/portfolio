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
                    photo={portfolioData.about.photo}
                    linkedin={portfolioData.about.linkedin}
                    openModal={openModal}
                />
            )}

            {portfolioData.about && <About about={portfolioData.about} />}
            {portfolioData.projects && <Projects projects={portfolioData.projects} />}
            {portfolioData.skills && <Skills skills={portfolioData.skills} />}

            <ModalContact
                isOpen={isModalOpen}
                onClose={closeModal}
                photo={portfolioData.about.photo}
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