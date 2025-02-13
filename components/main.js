document.getElementById("bg-music").play()
  .then(() => console.log("Audio is playing"))
  .catch(error => console.error("Error playing audio:", error));

  function openEnvelope() {
    // Always create hearts on envelope click.
    createHearts();
    
    // Only proceed with opening the envelope/quiz if the letter is not yet open.
    if (!letterOpened) {
      document.getElementById("envelope").classList.add("open");
      document.getElementById("quiz").style.display = "block";
      loadQuestion();
    }
  }
  
  if (
    currentQuestionIndex < questions.length &&
    userAnswer === questions[currentQuestionIndex].answer.toLowerCase()
  ) {
    // Answer is correct, proceed...
  }
  