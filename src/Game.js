import { Game } from 'boardgame.io/core';

const Card = function (name) {
  this.name = name;
};


const createDeck = function () {
  let names = ["jodu", "modhu", "raam", "shaam"];
  let deck = [];
  names.forEach(name => {
    for (let i = 1; i <= 4; i++) {
      deck.push(new Card(name));
    }
  });
  return deck;
}



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const distributeCards = function (deck) {
  let serve = [];
  for (let i = 1; i <= 4; i++) {
    let random = getRandomInt(deck.length);
    serve.push(deck[random]);
    deck.splice(random, 1);
  }
  return serve;
}


const JMRS = Game({
  name: 'jodu-modhu-raam-shaam',

  setup: (ctx) => {

    let deckOfCards = createDeck();
    let playersCards = [];

    playersCards.push(distributeCards(deckOfCards));
    playersCards.push(distributeCards(deckOfCards));
    playersCards.push(distributeCards(deckOfCards));
    playersCards.push(distributeCards(deckOfCards));

    const G = {
      playersCards: {
        0: playersCards[0],
        1: playersCards[1],
        2: playersCards[2],
        3: playersCards[3],
      }
    };
    return G;
  },

  moves: {
    passCard:function(G, ctx, index) {

      let cards = G.playersCards;
      let currentPlayer = ctx.currentPlayer;
      let nextPlayer = '0';

      if(Number(currentPlayer) <3 ){
        nextPlayer = (Number(ctx.currentPlayer) + 1).toString();
      }
      

      cards[nextPlayer].push(cards[currentPlayer][index]);
      cards[currentPlayer].splice(index, 1);

    },
  },
  flow: {
    movesPerTurn: 1
  },

});



export default JMRS;
