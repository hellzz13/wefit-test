//  Menu

const botaoLista = document.getElementById("align-menu");
const elementoLista = document.getElementById("menu");

botaoLista.addEventListener("click", function () {
  const vertical = document.querySelector(".btn-group-vertical");

  if (vertical) {
    elementoLista.classList.add("btn-group-horizontal");
    elementoLista.classList.remove("btn-group-vertical");
  } else {
    elementoLista.classList.add("btn-group-vertical");
    elementoLista.classList.remove("btn-group-horizontal");
  }
});

//  Header
const botaoHeader = document.getElementById("header");
const backgroundElement = document.getElementById("background-card");

botaoHeader.addEventListener("click", function () {
  const fundoBg = document.querySelector(".jumbotron");

  if (fundoBg) {
    botaoHeader.classList.add("btn-success");
    botaoHeader.classList.remove("btn-primary");

    backgroundElement.classList.add("bg-grey");
    backgroundElement.classList.remove("jumbotron");
  } else {
    botaoHeader.classList.add("btn-primary");
    botaoHeader.classList.remove("btn-success");

    backgroundElement.classList.add("jumbotron");
    backgroundElement.classList.remove("bg-grey");
  }
});

//  Cards
const botaoCard = document.getElementById("button");
botaoCard.addEventListener("click", function () {
  if (botaoCard.classList.contains("btn-primary")) {
    botaoCard.classList.remove("btn-primary");
    botaoCard.classList.add("btn-success");
  } else {
    botaoCard.classList.remove("btn-success");
    botaoCard.classList.add("btn-primary");
  }
});

const botaoCard2 = document.getElementById("button-2");
botaoCard2.addEventListener("click", function () {
  if (botaoCard2.classList.contains("btn-primary")) {
    botaoCard2.classList.remove("btn-primary");
    botaoCard2.classList.add("btn-success");
  } else {
    botaoCard2.classList.remove("btn-success");
    botaoCard2.classList.add("btn-primary");
  }
});

const botaoCard3 = document.getElementById("button-3");
botaoCard3.addEventListener("click", function () {
  if (botaoCard3.classList.contains("btn-primary")) {
    botaoCard3.classList.remove("btn-primary");
    botaoCard3.classList.add("btn-success");
  } else {
    botaoCard3.classList.remove("btn-success");
    botaoCard3.classList.add("btn-primary");
  }
});

const botaoCard4 = document.getElementById("button-4");
botaoCard4.addEventListener("click", function () {
  if (botaoCard4.classList.contains("btn-primary")) {
    botaoCard4.classList.remove("btn-primary");
    botaoCard4.classList.add("btn-success");
  } else {
    botaoCard4.classList.remove("btn-success");
    botaoCard4.classList.add("btn-primary");
  }
});

// Listas
const novoItemInput = document.getElementById("novoItem");
const adicionarItemButton = document.getElementById("adicionarItem");
const listaItens = document.getElementById("listaItens");

function adicionarItem() {
  const novoTexto = novoItemInput.value;
  if (novoTexto.trim() === "") {
    return;
  }

  const novoItem = document.createElement("li");
  novoItem.innerText = novoTexto;
  novoItem.classList.add("list-group-item");
  novoItem.classList.add("cursor-pointer");
  novoItem.addEventListener("click", trocarClasse);

  listaItens.appendChild(novoItem);

  novoItemInput.value = "";
}

adicionarItemButton.addEventListener("click", adicionarItem);

function trocarClasse(event) {
  const novoItem = event.target;
  const antigoItem = document.querySelector(".active");

  if (novoItem && novoItem !== antigoItem) {
    if (antigoItem) {
      antigoItem.classList.remove("active");
    }
    novoItem.classList.add("active");
  }
}

const items = document.querySelectorAll("li");
items.forEach((item) => {
  item.addEventListener("click", trocarClasse);
});
