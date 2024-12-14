import express from "express";
import next from "next";
import { createServer } from "http";

import { mockServer } from "./mocks/node";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

let isServerListening = false;
app.prepare().then(() => {
  const server = express();

  // server.use((req, res, next) => {
  //   if (isServerListening) {
  //     console.log("MSW server .listen()");
  //     mockServer.events.on("request:start", ({ request }) => {
  //       console.log("Outgoing:", request.method, request.url);
  //     });
  //     mockServer.listen();
  //     isServerListening = true;
  //   }
  //   next();
  // });

  server.all("*", (req, res) => {
    // mockServer.listen();
    // isServerListening = true;
    return handle(req, res);
  });

  const httpServer = createServer(server);

  httpServer.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
