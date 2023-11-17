function toggleAnswer(questionNumber){
    var answerId = 'a' + questionNumber;
    var arrowId = 'arrow' + questionNumber;
    var questionId = 'q' + questionNumber;
    var answerElement = document.getElementById(answerId);
    var arrowElement = document.getElementById(arrowId);
    var questionElement = document.getElementById(questionId);
    var currentDisplay = answerElement.style.display;

    var currentDisplay = window.getComputedStyle(answerElement).display;

    answerElement.style.display = (currentDisplay === 'none') ? 'block' : 'none';

    if(answerElement.style.display === 'none'){
        arrowElement.src = 'images/icon-arrow-down.svg';
        questionElement.classList.remove('visible-answer');
    }else{
        arrowElement.src = 'images/icon-arrow-up.svg';
        questionElement.classList.add('visible-answer');
    }
}