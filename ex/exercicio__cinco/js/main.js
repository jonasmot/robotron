
const robo = document.querySelector("#robotron");

const robos = [
    "/img/Robotron 2000 - Rosa/Robotron 2000 - Rosa.png",
    "/img/Robotron 2000 - Azul/Robotron 2000 - Azul.png",
    "/img/Robotron 2000 - Amarelo/Robotron 2000 - Amarelo.png",
    "/img/Robotron 2000 - Preto/Robotron 2000 - Preto.png",
    "/img/Robotron 2000 - Vermelho/Robotron 2000 - Vermelho.png",
    "/img/Robotron 2000 - Branco/Robotron 2000 - Branco.png"
]


// robo.addEventListener('click', (elemento) => {
//     elemento.target.src = "/img/Robotron 2000 - Branco/Robotron 2000 - Branco.png";
// })


robo.addEventListener('click', (elemento) => {
    elemento.target.src = trocaRobo();

});

var indice = 0;
function trocaRobo () { 
    const imagemSrc = robos[indice];
    indice++;
    
    if(indice >= robos.length){
        indice = 0;
    }
    return imagemSrc; 
}

