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
        player0: [0, 0, 0, 0],
        player1: [1, 1, 1, 1],
        player2: [2, 2, 2, 2],
        player3: [3, 3, 3, 3],
      }
    };
    return G;
  },

  moves: {
    passCard:function(G, ctx, index) {


      switch (ctx.currentPlayer) {
        case '0':
          G.playersCards.player1.push(G.playersCards.player0[index]);
          G.playersCards.player0.splice(index, 1);
          break;
        case '1':
          G.playersCards.player2.push(G.playersCards.player1[index]);
          G.playersCards.player1.splice(index, 1);
          break;
        case '2':
          G.playersCards.player3.push(G.playersCards.player2[index]);
          G.playersCards.player2.splice(index, 1);
          break;
        case '3':
          G.playersCards.player0.push(G.playersCards.player3[index]);
          G.playersCards.player3.splice(index, 1);
          break;
      }



      // if (ctx.currentPlayer < 3) {
      //   arr.playersCards[ctx.currentPlayer + 1].push(arr.playersCards[currentPlayer][index]);
      // }
      // else {
      //   arr.playersCards[0].push(arr.playersCards[currentPlayer][index]);
      // }



      // G.playersCards.push(new Card("Aziz"));
      //console.log(G);
      // let next;
      // if(ctx.currentPlayer < 3) next = ctx.currentPlayer + 1;
      // else next = 0;

      // let a = Object.assign([...G]);
      // console.log(a);
      // return { ...G };

      // let pCards = [...G.playersCards];

      // let arr = pCards.slice();

      //pCards[0].push(new Card("ADDDEDDDD"));
      //console.log(arr);

      //console.log(pCards[ctx.currentPlayer]);



      //return { ...G, pCards };

      // if(ctx.currentPlayer < 3) {
      //   console.log( original(G));
      // }
      // else {
      //   G.playersCards[0].push(G.playersCards[currentPlayer][index]);
      // }
      // G.playersCards.splice(index, 1);
    },
  },
  flow: {
    movesPerTurn: 1
  },

});



export default JMRS;
