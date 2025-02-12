import React from 'react';
import './FloatingHearts.css';

const FloatingHearts = () => {
    const hearts = Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="heart" />
    ));

    return (
        <div className="floating-hearts">
            {hearts}
        </div>
    );
};

export default FloatingHearts;