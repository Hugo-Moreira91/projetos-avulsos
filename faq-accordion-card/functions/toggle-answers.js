function toggleAnswer(questionNumber){
    var answerId = 'a' + questionNumber;
    var arrowId = 'arrow' + questionNumber;
    var questionId = 'q' + questionNumber;
    var answerElement = document.getElementById(answerId);
    var arrowElement = document.getElementById(arrowId);
    var questionElement = document.getElementById(questionId);
    var currentDisplay = answerElement.style.display;

    answerElement.style.display = (currentDisplay === 'none') ? 'block' : 'none';

    if(answerElement.style.display === 'none'){
        arrowElement.src = 'images/icon-arrow-down.svg';
        questionElement.style.color = 'hsl(237, 12%, 33%)';
        questionElement.style.fontWeight = '400';
    }

    if(answerElement.style.display === 'block'){
        arrowElement.src = 'images/icon-arrow-up.svg';
        questionElement.style.color = 'hsl(238, 29%, 16%)';
        questionElement.style.fontWeight = '700';
    }

}