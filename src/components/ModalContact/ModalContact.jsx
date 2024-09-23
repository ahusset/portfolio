import React from 'react';
import './ModalContact.css';

function ModalContact({ isOpen, onClose, photo, linkedin, phone, email, address }) {
    if (!isOpen) return null;

    const handleOutsideClick = (e) => {
        if (e.target.className === 'modal-overlay') {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOutsideClick}>
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>X</button>
                <div className="modal-body">
                    <div className="modal-left">
                        {/* Ajout de process.env.PUBLIC_URL pour la photo */}
                        <img src={`${process.env.PUBLIC_URL}${photo}`} alt="Alexandre Husset" className="profile-photo" />
                        <a href={linkedin} target="_blank" rel="noopener noreferrer">
                            {/* Ajout de process.env.PUBLIC_URL pour le logo LinkedIn */}
                            <img src={`${process.env.PUBLIC_URL}/images/linkedin-logo.png`} alt="LinkedIn" className="linkedin-logo" />
                        </a>
                    </div>
                    <div className="modal-right">
                        <p><strong>Adresse:</strong> {address}</p>
                        <p><strong>Téléphone:</strong> {phone}</p>
                        <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalContact;