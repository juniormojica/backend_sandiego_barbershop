// routes/clientes.js
import express from 'express';
import { getClientsHandler, postClientHandler, patchClientHandler } from '../handlers/clientsHandlers.js';
const clientRouter = express.Router();

clientRouter
  .get('/', getClientsHandler)
  .get('/:id', getClientsHandler)
  .post('/', postClientHandler)
  .patch('/:id', patchClientHandler)

export default clientRouter;
