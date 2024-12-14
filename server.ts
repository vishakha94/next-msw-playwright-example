import express from 'express';
import next from 'next';
import { createServer } from 'http';

import { mockServer  } from './mocks/node';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

console.log('***:', process.env.NODE_ENV);

app.prepare().then(() => {
  const server = express();

  mockServer.listen();

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  const httpServer = createServer(server)

  httpServer.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
});
