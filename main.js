import { openEnvelope } from './components/Envelope.js';
import { displayQuestions } from './components/Question.js';

document.addEventListener('DOMContentLoaded', () => {
    openEnvelope();
    displayQuestions();
});