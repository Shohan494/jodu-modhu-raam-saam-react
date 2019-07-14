import { Server } from 'boardgame.io/server';
import { JMRS } from './game';

const PORT = process.env.PORT || 8000;

const server = Server({
  games: [JMRS]
});

server.run(PORT, () => {
    console.log(`Serving at: http://localhost:${PORT}/`);
  });
