
function checkAnswer() {
    var answers = document.getElementsByName('question-1');
    var answer;
    for (var i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            answer = answers[i].value;
        }
    }
    console.log(answer);
    if (answer === "boss") {
        const success = document.querySelector('.success');
        success.classList.remove("hide");

        const failed = document.querySelector('.failed');
        failed.classList.add("hide");

    }
    else {
        const failed = document.querySelector('.failed');
        failed.classList.remove("hide");

        const success = document.querySelector('.success');
        success.classList.add("hide");
    }

    const answerA = document.querySelector('#label-answer-a');
    answerA.classList.add("success-label");

    const answerB = document.querySelector('#label-answer-b');
    answerB.classList.add("failed-label");

    const answerC = document.querySelector('#label-answer-c');
    answerC.classList.add("failed-label");

}
