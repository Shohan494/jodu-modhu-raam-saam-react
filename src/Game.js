import { Game } from 'boardgame.io/core';

const Card = function(name){
  this.name = name; 
};


const createDeck = function(){
  let names = ["jodu", "modhu", "raam", "shaam"];
  let deck = [];
  names.forEach(name => {
    for(let i=1; i<=4; i++){
      deck.push(new Card(name));
    }
  });
  return deck;
}



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const distributeCards = function(deck)
{
  let serve = [];
  for(let i=1; i<=4; i++){
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
      playersCards : playersCards
    };
    return G;
  },

  moves: {
    passCard(G, ctx, index)
    {
      const pCards = [...G.playersCards];

      pCards[0].push(new Card("ADDDEDDDD"));
      console.log(pCards);

      //console.log(pCards[ctx.currentPlayer]);



      return { ...G, pCards };

      // if(ctx.currentPlayer < 3) {
      //   G.playersCards[ctx.currentPlayer + 1].push(G.playersCards[currentPlayer][index]);
      // }
      // else {
      //   G.playersCards[0].push(G.playersCards[currentPlayer][index]);
      // }
      // G.playersCards.splice(index, 1);
    },
  },
  flow: {
    movesPerTurn: 1,
  },

});



export default JMRS;
