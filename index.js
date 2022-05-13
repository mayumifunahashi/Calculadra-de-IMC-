
 
const firstDiv = document.querySelector('#container-introdutorio');
    const secondDiv = document.querySelector('#container-principal');
    

    function go(currentStep,nextStep)
    {
        let dNone, dBlock;
        if(currentStep == 1)
        {
            dNone = firstDiv;
        }
        else if(currentStep == 2)
        {
            dNone = secondDiv;
        }
        
        
        dNone.style.display = 'none';

        if(nextStep == 1)
        {
            dBlock = firstDiv;
        }
        else if(nextStep == 2)
        {
            dBlock = secondDiv;
        }
        
        dBlock.style.display = 'block';
    }










































/*function go (comeco, final) {
    let = dNone, dBlcock;

    if (comeco == 1){
        dNone = primeiraTela;

    } else (comeco == 2) {
        dNone = segundaTela;
    }

    dNone.style.display = 'none';


    if (final == 1){
        dBlock = primeiraTela;

    } else (final == 2) {
        dBlock = segundaTela;
    }

    dBlock.style.display = 'block';


    const primeiraTela = document.getElementById('container-introdutorio');
const segundaTela = document.getElementById('container-princial');
}*/












/*function go (divAtual, divSeguinte) {
    let = displayNone, displayBlock;

    /if(divAtual ==1) {
        displayNone = segundaTela;
    } else  (divAtual == 2) {
        displayBlock = divSeguinte;
    }
    
    displayNone.style.display = 'none';
     
    if(divSeguinte ==2) {
        displayBlock = primeiraTela;
    } else  (divSeguinte ==2) {
        displayBlock = divSeguinte;
    }

    displayBlock.style.display = 'block'
}

function validacao {
   const nome = document.getElementById('nome');
   const altura = document.getElementById('altura');
   
} */
