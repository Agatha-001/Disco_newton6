// ========================================
// CURIOSIDADES
// ========================================

const facts = [

  "O Disco de Newton mostra o caminho inverso da dispersão: em vez de separar a luz em cores, a rotação rápida faz as cores do disco serem percebidas juntas.",

  "A versão escolar normalmente usa vermelho, laranja, amarelo, verde, azul, anil e violeta, associadas ao espectro visível apresentado por Newton.",

  "Não é que o olho literalmente transforme tintas em luz branca. A rápida sucessão dos estímulos faz o sistema visual integrá-los, produzindo uma sensação de cor combinada.",

  "Newton publicou seus estudos detalhados sobre óptica na obra Opticks, lançada em 1704."

];


function showFact(index) {

  document.getElementById("fact-result").textContent =
    facts[index];

}



// ========================================
// QUIZ
// ========================================

const questions = [

  {

    question:
      "Quem realizou os famosos experimentos com prismas que ajudaram a explicar a composição da luz branca?",

    answers: [

      "Galileu Galilei",

      "Isaac Newton",

      "Albert Einstein",

      "Nikola Tesla"

    ],

    correct: 1

  },


  {

    question:
      "O que acontece quando o Disco de Newton gira rapidamente?",

    answers: [

      "As cores desaparecem da luz",

      "O disco fica completamente preto",

      "As cores são percebidas juntas, dando uma aparência esbranquiçada",

      "A luz deixa de existir"

    ],

    correct: 2

  },


  {

    question:
      "Qual fenômeno ajuda a explicar a separação das cores da luz por um prisma?",

    answers: [

      "Dispersão",

      "Reflexão total",

      "Eletrização",

      "Magnetismo"

    ],

    correct: 0

  },


  {

    question:
      "Qual destas cores faz parte da sequência tradicional apresentada no Disco de Newton?",

    answers: [

      "Rosa",

      "Marrom",

      "Violeta",

      "Cinza"

    ],

    correct: 2

  },


  {

    question:
      "Qual obra de Newton, publicada em 1704, reuniu seus estudos sobre óptica?",

    answers: [

      "Principia",

      "Opticks",

      "A República",

      "O Capital"

    ],

    correct: 1

  }

];


let currentQuestion = 0;

let score = 0;

let answered = false;


const questionEl =
  document.getElementById("question");

const answersEl =
  document.getElementById("answers");

const feedbackEl =
  document.getElementById("quiz-feedback");

const nextBtn =
  document.getElementById("next-btn");

const numberEl =
  document.getElementById("question-number");

const progressBar =
  document.getElementById("progress-bar");



function loadQuestion() {

  answered = false;

  const q = questions[currentQuestion];


  numberEl.textContent =
    `Questão ${currentQuestion + 1} de ${questions.length}`;


  progressBar.style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;


  questionEl.textContent =
    q.question;


  answersEl.innerHTML = "";


  feedbackEl.textContent = "";


  nextBtn.classList.add("hidden");


  q.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement("button");


      button.className = "answer";


      button.textContent =
        answer;


      button.onclick =
        () => checkAnswer(index, button);


      answersEl.appendChild(button);

    }
  );

}



function checkAnswer(selected, selectedButton) {

  if (answered) return;

  answered = true;


  const correct =
    questions[currentQuestion].correct;


  const buttons =
    document.querySelectorAll(".answer");


  buttons.forEach(
    (button, index) => {

      button.disabled = true;


      if (index === correct) {

        button.classList.add("correct");

      }

    }
  );


  if (selected === correct) {

    score++;


    selectedButton.classList.add("correct");


    feedbackEl.textContent =
      "✅ Correto! Muito bem!";

  }

  else {

    selectedButton.classList.add("wrong");


    feedbackEl.textContent =
      "❌ Quase! A alternativa correta está destacada.";

  }


  nextBtn.classList.remove("hidden");

}



nextBtn.addEventListener(
  "click",
  () => {

    currentQuestion++;


    if (
      currentQuestion <
      questions.length
    ) {

      loadQuestion();

    }

    else {

      showQuizResult();

    }

  }
);



function showQuizResult() {

  questionEl.textContent =
    "Você terminou o quiz! 🎉";


  answersEl.innerHTML = "";


  feedbackEl.textContent =
    `Sua pontuação: ${score} de ${questions.length}.`;


  const restart =
    document.createElement("button");


  restart.className =
    "btn primary";


  restart.textContent =
    "Refazer quiz";


  restart.onclick =
    () => {

      currentQuestion = 0;

      score = 0;

      loadQuestion();

    };


  answersEl.appendChild(restart);


  nextBtn.classList.add("hidden");


  progressBar.style.width = "100%";

}


loadQuestion();



// ========================================
// FLASHCARDS
// ========================================

const flashcards = [

  {

    front:
      "O que é o Disco de Newton?",

    back:
      "É um disco dividido em setores coloridos usado para demonstrar a composição das cores e a percepção da luz branca quando gira rapidamente."

  },


  {

    front:
      "Quem foi Isaac Newton?",

    back:
      "Foi um cientista inglês que realizou importantes estudos sobre luz, cores, movimento e gravitação."

  },


  {

    front:
      "O que o prisma faz com a luz branca?",

    back:
      "Ele pode dispersar a luz branca, separando-a em diferentes componentes do espectro visível."

  },


  {

    front:
      "Por que o disco parece branco ou acinzentado?",

    back:
      "Quando gira rapidamente, os setores passam sucessivamente diante dos olhos e são percebidos de forma integrada."

  },


  {

    front:
      "Quais cores são usadas tradicionalmente?",

    back:
      "Vermelho, laranja, amarelo, verde, azul, anil e violeta."

  },


  {

    front:
      "O que é persistência da visão?",

    back:
      "É um efeito relacionado ao processamento visual que contribui para a percepção contínua quando estímulos visuais mudam rapidamente."

  }

];


let currentCard = 0;



function renderFlashcard() {

  const container =
    document.getElementById(
      "flashcards-container"
    );


  const card =
    flashcards[currentCard];


  container.innerHTML = `

    <div
      class="flashcard"
      onclick="this.classList.toggle('flipped')"
    >

      <div class="card-face">

        <div>💭</div>

        <h3>
          ${card.front}
        </h3>

        <p>
          Clique para revelar a resposta
        </p>

      </div>


      <div class="card-face card-back">

        <div>💡</div>

        <h3>
          Resposta
        </h3>

        <p>
          ${card.back}
        </p>

      </div>

    </div>

  `;


  document.getElementById(
    "card-counter"
  ).textContent =
    `${currentCard + 1} / ${flashcards.length}`;

}



function nextCard() {

  currentCard =
    (currentCard + 1) %
    flashcards.length;

  renderFlashcard();

}



function previousCard() {

  currentCard =
    (currentCard - 1 +
      flashcards.length) %
    flashcards.length;

  renderFlashcard();

}


renderFlashcard();