const primeiraTela = document.getElementById('container-introdutorio')
const segundaTela = document.getElementById('container-princial')


function go (divAtual, divSeguinte) {
    let = displayNone, displayBlock;
    if(divAtual ==1) {
        displayNone = primeiraTela;
    } else  (divAtual ==2) {
        displayNone = divSeguinte;
    }
    
    displayNone.style.display = 'none'
     
    if(divSeguinte ==2) {
        displayBlock = primeiraTela;
    } else  (divSeguinte ==2) {
        displayBlock = divSeguinte;
    }

    displayBlock.style.display = 'block'
}

function validacao {
   const nome = document.getElementById('nome');
   const altura = document.getElementById('altura')
   
}
