import { Elysia } from "elysia";
const handleThread = require('./workers/handleRequestWorker');
const app = new Elysia()
    .get("/asyncRequest", async () => await handleThread())
    .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
