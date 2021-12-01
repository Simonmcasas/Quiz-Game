const quizData = [
    {
        question: "¿Cual es la capital de Japón?",
        a:"Pyongyang",
        b:"Seul",
        c:"Beijing",
        d:"Tokio",
        correct:"d",
    },
    {
        question: "¿Cual es la capital de Egipto?",
        a:"Marrakech",
        b:"El Cairo",
        c:"Abu Dabi",
        d:"Trípoli",
        correct:"b",
    },
    {
        question: "¿Cual es la capital de Liechtenstein?",
        a:"Vaduz",
        b:"Berna",
        c:"Estrasburgo",
        d:"Bremen",
        correct:"a",
    },
    {
        question: "Cual es la capital de Bahamas?",
        a:"Vaitape",
        b:"Nasáu",
        c:"Willemstad",
        d:"Bridgetown",
        correct:"b",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a__text = document.getElementById('a__text');
const b__text = document.getElementById('b__text');
const c__text = document.getElementById('c__text');
const d__text = document.getElementById('d__text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;



function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a__text.innerText = currentQuizData.a;
    b__text.innerText = currentQuizData.b;
    c__text.innerText = currentQuizData.c;
    d__text.innerText = currentQuizData.d;
};

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false);
};

function getSelected(){
    let answer;
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        };
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            
            <h2 class="quiz__header h2">Respondiste ${score}/${quizData.length} de las preguntas correctamente</h2>
            
            <button class="submit__button" onclick="location.reload()">Reiniciar</button>

            `  
        };
    };
});

loadQuiz();