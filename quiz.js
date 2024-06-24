import questions from "./questions.js";

const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");
const scoreEl = document.getElementById("score");

let currentIndex = 0;
let questionsCorrect = 0;
let score = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  score = 0;
  scoreEl.textContent = score;
  loadQuestion();
};

function nextQuestion(e) {
  const allButtons = document.querySelectorAll(".answer");

  allButtons.forEach(button => {
    if (button.getAttribute("data-correct") === "true") {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
    // Disable all buttons after one is clicked
    button.disabled = true;
  });

  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
    score += 100; // Ganhar 100 pontos
  } else {
    score -= 50; // Perder 50 pontos
  }

  scoreEl.textContent = score;

  setTimeout(() => {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      loadQuestion();
    } else {
      finish();
    }
  }, 1000); // Wait 1 second before going to the next question
}

function finish() {
  textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length} perguntas. Sua pontuação final é ${score} pontos.`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();
