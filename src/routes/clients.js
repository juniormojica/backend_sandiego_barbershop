// routes/clientes.js
import express from 'express';
import { getClientsHandler, postClientHandler } from '../handlers/clientsHandlers.js';
const clientRouter = express.Router();

clientRouter
  .get('/', getClientsHandler)
  .get('/:id', getClientsHandler)
  .post('/', postClientHandler)

export default clientRouter;
