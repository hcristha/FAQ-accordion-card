var lastAnswer; // última resposta mostrada
var lastQuestion; // última questão clicada
var lastImg; // último ícone clicado

//resposta zero
function jsAnswer0(img){
    // esconder resposta anterior se for diferente de undefined
    if(lastImg !== undefined && lastQuestion !== undefined && lastAnswer !== undefined){
        function hideLastAnswer(){
            // rotacionar ícone anterior a posição inicial
            lastImg.style.transform = "rotateX(360deg)";

            // estilo da questão anterior normal
            lastQuestion.style.fontWeight = 400;

            // esconder resposta anterior
            lastAnswer.style.display = "none";
        }

        hideLastAnswer();
    }

    // rotacionar ícone
    img.style.transform = "rotateX(180deg)";
    lastImg = img; // última ícone clicado

    // questão em negrito
    let question0 = document.getElementsByClassName("js-question0")[0];
    lastQuestion = question0; // última questão clicada
    question0.style.fontWeight = 700;

    // mostrar a resposta
    let answer0 = document.getElementsByClassName("js-answer0")[0];
    lastAnswer = answer0; // última resposta mostrada
    answer0.style.display = "inline";
}

//resposta um
function jsAnswer1(img){
    // esconder resposta anterior se for diferente de undefined
    if(lastImg !== undefined && lastQuestion !== undefined && lastAnswer !== undefined){
        function hideLastAnswer(){
            // rotacionar ícone anterior a posição inicial
            lastImg.style.transform = "rotateX(360deg)";

            // estilo da questão anterior normal
            lastQuestion.style.fontWeight = 400;

            // esconder resposta anterior
            lastAnswer.style.display = "none";
        }

        hideLastAnswer();
    }

    // rotacionar ícone
    img.style.transform = "rotateX(180deg)";
    lastImg = img; // última ícone clicado

    // questão em negrito
    let question1 = document.getElementsByClassName("js-question1")[0];
    lastQuestion = question1; // última questão clicada
    question1.style.fontWeight = 700;

    // mostrar a resposta
    let answer1 = document.getElementsByClassName("js-answer1")[0];
    lastAnswer = answer1; // última reposta mostrada

    answer1.style.display = "inline";
}

// resposta dois
function jsAnswer2(img){
    // esconder resposta anterior se for diferente de undefined
    if(lastImg !== undefined && lastQuestion !== undefined && lastAnswer !== undefined){
        function hideLastAnswer(){
            // rotacionar ícone anterior a posição inicial
            lastImg.style.transform = "rotateX(360deg)";

            // estilo da questão anterior normal
            lastQuestion.style.fontWeight = 400;

            // esconder resposta anterior
            lastAnswer.style.display = "none";
        }

        hideLastAnswer();
    }

    // rotacionar ícone
    img.style.transform = "rotateX(180deg)";
    lastImg = img; // último ícone clicado

    // questão em negrito
    let question2 = document.getElementsByClassName("js-question2")[0];
    lastQuestion = question2; // última questão clicada
    question2.style.fontWeight = 700;

    // mostrar a resposta
    let answer2 = document.getElementsByClassName("js-answer2")[0];
    lastAnswer = answer2; // última resposta mostrada
    answer2.style.display = "inline";
}

// resposta três
function jsAnswer3(img){
    // esconder resposta anterior se for diferente de undefined
    if(lastImg !== undefined && lastQuestion !== undefined && lastAnswer !== undefined){
        function hideLastAnswer(){
            // rotacionar ícone anterior a posição inicial
            lastImg.style.transform = "rotateX(360deg)";

            // estilo da questão anterior normal
            lastQuestion.style.fontWeight = 400;

            // esconder resposta anterior
            lastAnswer.style.display = "none";
        }

        hideLastAnswer();
    }

    // rotacionar ícone
    img.style.transform = "rotateX(180deg)";
    lastImg = img; // último ícone clicado

    // questão em negrito
    let question3 = document.getElementsByClassName("js-question3")[0];
    lastQuestion = question3; // última questão clicada
    question3.style.fontWeight = 700;

    // mostrar a resposta
    let answer3 = document.getElementsByClassName("js-answer3")[0];
    lastAnswer = answer3; // última resposta mostrada
    answer3.style.display = "inline";
}

// resposta quatro
function jsAnswer4(img){
    // esconder resposta anterior se for diferente de undefined
    if(lastImg !== undefined && lastQuestion !== undefined && lastAnswer !== undefined){
        function hideLastAnswer(){
            // rotacionar ícone anterior a posição inicial
            lastImg.style.transform = "rotateX(360deg)";

            // estilo da questão anterior normal
            lastQuestion.style.fontWeight = 400;

            // esconder resposta anterior
            lastAnswer.style.display = "none";
        }

        hideLastAnswer();
    }

    // rotacionar ícone
    img.style.transform = "rotateX(180deg)";
    lastImg = img; // último ícone clicado

    // questão em negrito
    let question4 = document.getElementsByClassName("js-question4")[0];
    lastQuestion = question4; // última questão clicada
    question4.style.fontWeight = 700;

    // mostrar a resposta
    let answer4 = document.getElementsByClassName("js-answer4")[0];
    lastAnswer = answer4; // última resposta mostrada
    answer4.style.display = "inline";
}