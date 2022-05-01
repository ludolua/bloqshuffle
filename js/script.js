const btnSortear = document.querySelector(".botaoSortear");
const textarea = document.querySelector("textarea");
const tagResultado = document.querySelector(".resultado p");
const popUpResultado = document.querySelector(".resultado");
const btnFechar = document.querySelector(".fechar");
const popUpResultadoVazio = document.querySelector(".resultadovazio");
const tagResultadoVazio = document.querySelector(".resultadovazio p");

function pegarDadosFormulario() {
  const values = textarea.value;
  const array = values.split(",");
  const movies = array.filter((movie) => movie.trim().length > 0);
  const results = [];
  if (movies.length > 0) {
    for (let index = 0; index < movies.length; index++) {
      results.push(movies[index].trim());
    }
    const num = gerarNumeroAleatorio(results.length);
    mostrarResultado(results[num]);
  } else {
    mostrarResultado("Digite algo!");
    setTimeout(() => {
      let a = document.getElementById("mySound2").play();
    }, 100);
  }
}

btnSortear.addEventListener("click", pegarDadosFormulario);

function gerarNumeroAleatorio(tamanhoArray) {
  return Math.floor(Math.random() * (tamanhoArray - 0) + 0);
}

function mostrarResultado(nome) {
  tagResultado.innerText = `${nome}`;
  popUpResultado.classList.add("mostrarResultado");
}

function fecharPopUp() {
  popUpResultado.classList.remove("mostrarResultado");
}
btnFechar.addEventListener("click", fecharPopUp);
