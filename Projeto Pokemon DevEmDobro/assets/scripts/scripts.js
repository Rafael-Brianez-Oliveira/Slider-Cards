const cartoes = document.querySelectorAll(".cartao");
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let   cartaoAtual = 1;
const cartaoSelecionado = document.querySelector(".selecionado");

const Cards = [
  {
    id:'1',
    name: 'Pikachu',
    hp: 'HP 300',
    img: 'assets/img/pikachu.png',
    background: 'assets/img/fundo-card-1.png',
    description: `Os Pikachus são pequenos roedores de quarenta centímetros e de
    seis quilogramas, com um corpo redondo, pernas curtas e uma longa
    cauda, quando macho, a cauda tem um formato de um raio, mas se o
    Pikachu for fêmea sua cauda ganha um coração na ponta.`
  },
  {
    id:'2',
    name: 'Charizard',
    hp: 'HP 800',
    img: 'assets/img/charizard.png',
    description: `Geralmente, um Charizard é competitivo. Ele adora a batalha e seu
    espírito competitivo também é notável, uma vez que nunca vai
    cuspir fogo em um inimigo mais fraco a menos que provocado ou
    ordenado. Quando fica muito irritado, as chamas em sua cauda se
    tornam branco-azuladas.`
  },
  {
    id:'3',
    name: 'Mewtwo',
    hp: 'HP 1200',
    img: 'assets/img/mewtwo.png',
    description: `Mewtwo foi criado geneticamente em um laboratório, sendo um clone
    do misterioso antigo Pokémon Mew. É uma criatura com uma postura
    humanóide, mas tem algumas características felinas.`
  }
];

mostrarCartao(cartaoAtual)

function mostrarCartao(indiceCartao) {
  let idcard = Cards.find(idcard => idcard.id == indiceCartao) 

  cartaoSelecionado.classList.add('selecionado');
  cartaoSelecionado.classList.add(`fundo-${idcard.id}`);

  /* name */ 
  const FieldValueName  = document.querySelector('.nome')
  FieldValueName.innerHTML = idcard.name

  /* hp */
  const FieldValuehp  = document.querySelector('.vida')
  FieldValuehp.innerHTML = idcard.hp

  /* description */
  const FieldValuedescription  = document.querySelector('.texto')
  FieldValuedescription.innerHTML = idcard.description
  
  /* img */ 
  document.querySelector('.imagem-pokemon').src= idcard.img
}

btnAvancar.addEventListener("click", function () {
  AltCard("next");
});

btnVoltar.addEventListener("click", function () {
  AltCard("back");
});

async function AltCard(funcB){
  
  cartaoSelecionado.classList.remove('selecionado');
  await sleep(300);
  cartaoSelecionado.classList.remove(`fundo-${cartaoAtual}`);
  
  if(funcB == "next"){
    if(cartaoAtual==Cards.length){
      cartaoAtual = 1;
    }else{
      cartaoAtual++
    }
  }else{
    if(cartaoAtual==1){
      cartaoAtual = Cards.length
    }else{
      cartaoAtual--;
    }
  }

  mostrarCartao(cartaoAtual);
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}

