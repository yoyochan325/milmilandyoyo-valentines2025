import React, { useState } from 'react';

const Question = ({ question, answer, onAnswer }) => {
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userAnswer.toLowerCase() === answer.toLowerCase()) {
            setIsCorrect(true);
            onAnswer(true);
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <div className="question-container">
            <h2>{question}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Your answer"
                />
                <button type="submit">Submit</button>
            </form>
            {isCorrect === false && <p className="error">Try again!</p>}
            {isCorrect === true && <p className="success">Correct!</p>}
        </div>
    );
};

export default Question;