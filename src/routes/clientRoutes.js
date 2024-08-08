// routes/clientes.js
import express from 'express'
import { getClientsHandler, postClientHandler, patchClientHandler, deleteClientHandler } from '../handlers/clientHandlers.js'
const clientRouter = express.Router()

clientRouter
  .get('/', getClientsHandler)
  .get('/:id', getClientsHandler)
  .post('/', postClientHandler)
  .patch('/:id', patchClientHandler)
  .delete('/:id', deleteClientHandler)

export default clientRouter
