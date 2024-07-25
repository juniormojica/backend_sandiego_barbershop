// routes/clientes.js
import express from 'express';
import { getClientsHandler, postClientHandler } from '../handlers/clientHandlers.js';
const clientRouter = express.Router();

clientRouter
  .get('/', getClientsHandler)
  .post('/', postClientHandler)

export default clientRouter;
