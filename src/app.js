// app.js
import express from 'express';
import morgan from 'morgan'
import clientRouter from './routes/clients.js';

const app = express();

// Usa el router de clientes para manejar las rutas que comienzan con /clientes
app.use(morgan('dev'))
app.use(express.json())
app.use('/clientes', clientRouter);

export default app;
