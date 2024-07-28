// Você irá criar um botão que, ao ser clicado, faz aparecer esta lista, 
// e também criará um segundo botão que, ao ser clicado,
// faz com que a lista de cores volte a sumir.

//usando hidden -> 

const botao = document.querySelectorAll('[data-botao]');
const lista = document.querySelector('[data-lista]');

var botaoAbre = document.querySelector('[data-botao="mostrar"]');
var botaoFecha = document.querySelector('[data-botao="esconder"]');

botao.forEach( (elemento)=> {
    elemento.addEventListener('click', (evento) => {
        visibilidade(evento.target.dataset.botao, lista);
        console.log(evento.target.dataset.botao);//operacao

    });
});

function visibilidade(operacao, elementoLista) {
    if (operacao === "esconder") {
        elementoLista.hidden = "true";
        botaoAbre.hidden = "";//vazio para deixar visível
        botaoFecha.hidden = "false";
    } else {
        elementoLista.hidden = "";
        botaoAbre.hidden = "true";//(true or false) *preenchido* para deixar invisível
        botaoFecha.hidden = "";
    }
}


// botao.addEventListener('click', () => {
//     lista.setAttribute('data-lista', 'mostrar');
// });

// botao.addEventListener('click', () => {
//     lista.setAttribute('data-lista', 'esconder');
// });