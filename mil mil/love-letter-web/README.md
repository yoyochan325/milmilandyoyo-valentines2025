# LOVE LETTER WEB PROJECT

## Overview
The Love Letter Web project is a fun and interactive web application that displays an envelope with floating hearts. Users will answer questions one by one, and upon answering all questions correctly, they will be able to view a heartfelt love letter.

## Project Structure
```
love-letter-web
├── src
│   ├── assets
│   │   ├── styles.css
│   │   └── envelope.svg
│   ├── components
│   │   ├── Envelope.js
│   │   ├── FloatingHearts.js
│   │   └── Question.js
│   ├── index.html
│   ├── main.js
│   └── loveLetter.js
├── package.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd love-letter-web
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Open `src/index.html` in your web browser.
2. Follow the prompts to answer the questions.
3. Upon completing the questions correctly, the love letter will be revealed.

## Components
- **Envelope.js**: Renders the envelope graphic and handles the opening animation.
- **FloatingHearts.js**: Manages the animation of hearts floating from underneath the envelope.
- **Question.js**: Displays questions and handles user input for answers.

## Assets
- **styles.css**: Contains the CSS styles for the project.
- **envelope.svg**: SVG graphic of the envelope.

## License
This project is licensed under the MIT License.