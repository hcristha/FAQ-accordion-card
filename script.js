// contador de cliques inicia em 0
let c = 0;

//resposta zero
function jsAnswer0(img){
    // rotacionar ícone
    img.style.transform = "rotateX(180deg)";

    // questão em negrito
    let question0 = document.getElementsByClassName("js-question0")[0];
    question0.style.fontWeight = 700;

    // mostrar a resposta
    let answer0 = document.getElementsByClassName("js-answer0")[0];
    answer0.style.display = "inline";

    // somar número de cliques no contador
    c++;
    
    // se o contador de cliques for divisível por 2 executa a função
    if (c % 2 === 0){
        function hideAnswer(){
            // rotacionar ícone a posição inicial
            img.style.transform = "rotateX(360deg)";

            // estilo da questão normal
            question0.style.fontWeight = 400;

            // esconder resposta
            answer0.style.display = "none";
        }
        
        hideAnswer();
    }
}

//resposta um
function jsAnswer1(img){
    // rotacionar ícone
    img.style.transform = "rotateX(180deg)";

    // questão em negrito
    let question1 = document.getElementsByClassName("js-question1")[0];
    question1.style.fontWeight = 700;

    // mostrar a resposta
    let answer1 = document.getElementsByClassName("js-answer1")[0];
    answer1.style.display = "inline";

    // somar número de cliques no contador
    c++;
    
    // se o contador de cliques for divisível por 2 executa a função
    if (c % 2 === 0){
        function hideAnswer(){
            // rotacionar ícone a posição inicial
            img.style.transform = "rotateX(0deg)";

            // estilo da questão normal
            question1.style.fontWeight = 400;

            // esconder resposta
            answer1.style.display = "none";
        }
        
        hideAnswer();
    }
}

// resposta dois
function jsAnswer2(img){
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