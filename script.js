var lastAnswer;
var lastQuestion;
var lastImg;

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
    lastImg = img; // última imagem clicada

    // questão em negrito
    let question0 = document.getElementsByClassName("js-question0")[0];
    lastQuestion = question0; // última questão clicada
    question0.style.fontWeight = 700;

    // mostrar a resposta
    let answer0 = document.getElementsByClassName("js-answer0")[0];
    lastAnswer = answer0; // última resposta mostrada
    answer0.style.display = "inline";
}


// ao clicar na prox img esconder resposta anterior


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
    lastImg = img; // última imagem clicada

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
    // aqui! substituir para answer2

    // rotacionar ícone
    img.style.transform = "rotateX(180deg)";

    // questão em negrito
    let question2 = document.getElementsByClassName("js-question2")[0];
    question2.style.fontWeight = 700;

    // mostrar a resposta
    let answer2 = document.getElementsByClassName("js-answer2")[0];
    answer2.style.display = "inline";

    // somar número de cliques no contador
    c++;
    
    // se o contador de cliques for divisível por 2 executa a função
    if (c % 2 === 0){
        function hideAnswer(){
            // rotacionar ícone a posição inicial
            img.style.transform = "rotateX(0deg)";

            // estilo da questão normal
            question2.style.fontWeight = 400;

            // esconder resposta
            answer2.style.display = "none";
        }
        
        hideAnswer();
    }
}

// resposta três
function jsAnswer3(img){
    // rotacionar ícone
    img.style.transform = "rotateX(180deg)";

    // questão em negrito
    let question3 = document.getElementsByClassName("js-question3")[0];
    question3.style.fontWeight = 700;

    // mostrar a resposta
    let answer3 = document.getElementsByClassName("js-answer3")[0];
    answer3.style.display = "inline";

    // somar número de cliques no contador
    c++;
    
    // se o contador de cliques for divisível por 2 executa a função
    if (c % 2 === 0){
        function hideAnswer(){
            // rotacionar ícone a posição inicial
            img.style.transform = "rotateX(0deg)";

            // estilo da questão normal
            question3.style.fontWeight = 400;

            // esconder resposta
            answer3.style.display = "none";
        }
        
        hideAnswer();
    }
}

// resposta quatro
function jsAnswer4(img){
    // rotacionar ícone
    img.style.transform = "rotateX(180deg)";

    // questão em negrito
    let question4 = document.getElementsByClassName("js-question4")[0];
    question4.style.fontWeight = 700;

    // mostrar a resposta
    let answer4 = document.getElementsByClassName("js-answer4")[0];
    answer4.style.display = "inline";

    // somar número de cliques no contador
    c++;
    
    // se o contador de cliques for divisível por 2 executa a função
    if (c % 2 === 0){
        function hideAnswer(){
            // rotacionar ícone a posição inicial
            img.style.transform = "rotateX(0deg)";

            // estilo da questão normal
            question4.style.fontWeight = 400;

            // esconder resposta
            answer4.style.display = "none";
        }
        
        hideAnswer();
    }
}