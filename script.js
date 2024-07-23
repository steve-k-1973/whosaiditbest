const questions = [
    {
        text: "In moments of crisis, the universe has a way of revealing the heroes among us.",
        speaker: "Kamala Harris"
    },
    {
        text: "Together, we will launch a new era of safety, prosperity, and freedom.",
        speaker: "Donald Trump"
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.innerText = questions[currentQuestionIndex].text;
}

function checkAnswer(selectedSpeaker) {
    const resultElement = document.getElementById('result');
    const correctSpeaker = questions[currentQuestionIndex].speaker;

    if (selectedSpeaker === correctSpeaker) {
        score++;
        resultElement.innerText = "Correct!";
        resultElement.style.color = "green";
    } else {
        resultElement.innerText = "Incorrect.";
        resultElement.style.color = "red";
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            resultElement.innerText = "";
            displayQuestion();
        }, 1000);
    } else {
        setTimeout(() => {
            resultElement.innerText = `Quiz Over! Your score is ${score}/${questions.length}`;
        }, 1000);
    }
}

displayQuestion();
