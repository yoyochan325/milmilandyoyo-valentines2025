import React, { useState } from 'react';
import envelopeImage from '../assets/envelope.svg';
import './styles.css';

const Envelope = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    };

    return (
        <div className={`envelope-container ${isOpen ? 'open' : ''}`} onClick={handleClick}>
            <img src={envelopeImage} alt="Envelope" className="envelope" />
            {isOpen && <div className="love-letter">Your love letter will be revealed here!</div>}
        </div>
    );
};

export default Envelope;