let c = 0; // contador de cliques

//resposta zero
function jsAnswer0(img){
    // rotacionar ícone
    img.style.transform = "rotateX(180deg)";

    // mostrar a resposta
    let answer0 = document.getElementsByClassName("js-answer0")[0];
    answer0.style.display = "inline";

    // somar número de cliques no contador
    c++;
    
    // se o contador de cliques for divisível por 2 executa a função
    if (c % 2 == 0){
        function hideAnswer(){
            // rotacionar ícone a posição inicial
            img.style.transform = "rotateX(0deg)";

            // esconder resposta
            answer0.style.display = "none";
        }
        
        hideAnswer();
    }
}

function jsAnswer1(img){
    // rotacionar ícone
    img.style.transform = "rotateX(180deg)";

    // mostrar a resposta
    let answer1 = document.getElementsByClassName("js-answer1")[0];
    answer1.style.display = "inline";

    // somar número de cliques no contador
    c++;
    
    // se o contador de cliques for divisível por 2 executa a função
    if (c % 2 == 0){
        function hideAnswer(){
            // rotacionar ícone a posição inicial
            img.style.transform = "rotateX(0deg)";

            // esconder resposta
            answer1.style.display = "none";
        }
        
        hideAnswer();
    }
}

function jsAnswer2(img){
    // rotacionar ícone
    img.style.transform = "rotateX(180deg)";

    // mostrar a resposta
    let answer2 = document.getElementsByClassName("js-answer2")[0];
    answer2.style.display = "inline";

    // somar número de cliques no contador
    c++;
    
    // se o contador de cliques for divisível por 2 executa a função
    if (c % 2 == 0){
        function hideAnswer(){
            // rotacionar ícone a posição inicial
            img.style.transform = "rotateX(0deg)";

            // esconder resposta
            answer2.style.display = "none";
        }
        
        hideAnswer();
    }
}

function jsAnswer3(img){
    // rotacionar ícone
    img.style.transform = "rotateX(180deg)";

    // mostrar a resposta
    let answer3 = document.getElementsByClassName("js-answer3")[0];
    answer3.style.display = "inline";

    // somar número de cliques no contador
    c++;
    
    // se o contador de cliques for divisível por 2 executa a função
    if (c % 2 == 0){
        function hideAnswer(){
            // rotacionar ícone a posição inicial
            img.style.transform = "rotateX(0deg)";

            // esconder resposta
            answer3.style.display = "none";
        }
        
        hideAnswer();
    }
}

function jsAnswer4(img){
    // rotacionar ícone
    img.style.transform = "rotateX(180deg)";

    // mostrar a resposta
    let answer4 = document.getElementsByClassName("js-answer4")[0];
    answer4.style.display = "inline";

    // somar número de cliques no contador
    c++;
    
    // se o contador de cliques for divisível por 2 executa a função
    if (c % 2 == 0){
        function hideAnswer(){
            // rotacionar ícone a posição inicial
            img.style.transform = "rotateX(0deg)";

            // esconder resposta
            answer4.style.display = "none";
        }
        
        hideAnswer();
    }
}