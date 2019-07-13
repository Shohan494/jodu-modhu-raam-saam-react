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
    const G = {
     player1: distributeCards(deckOfCards),
     player2: distributeCards(deckOfCards),
     player3: distributeCards(deckOfCards),
     player4: distributeCards(deckOfCards)
    };
    return G;
  },

  moves: {

  },

  flow: {
    movesPerTurn: 1,
  },

});

export default JMRS;
