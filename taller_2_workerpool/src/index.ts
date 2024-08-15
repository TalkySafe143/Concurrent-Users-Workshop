import { Elysia } from "elysia";
import { pool } from 'workerpool'

const myPool = pool();

const handler = () => "Hola"

const app = new Elysia().get("/asyncRequest", () => myPool.exec(handler)).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
