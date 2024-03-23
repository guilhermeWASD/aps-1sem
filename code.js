document.addEventListener("DOMContentLoaded", () =>{

    const botoes = document.querySelectorAll('.botao');
    const culturas = document.querySelectorAll('.cultura');

    botoes.forEach((botao, indice) => {
        botao.addEventListener("click", () =>{
            
            desmarcarBtn();
            desmarcarCult();
            
            botao.classList.add("selecionado");
            culturas[indice].classList.add("ativa");
        });
    });
});

function desmarcarBtn(){
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

function desmarcarCult(){
     const cultSelecionada = document.querySelector(".cultura.ativa");
     cultSelecionada.classList.remove("ativa");
 }