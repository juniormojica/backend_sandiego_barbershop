// app.js
import express from 'express';
import morgan from 'morgan'
import clientRouter from './routes/clients.js';
import paymentMethodRouter from './routes/paymentMethodRoutes.js';
import paymentRouter from './routes/paymentRoutes.js';
const app = express();

// Usa el router de clientes para manejar las rutas que comienzan con /clientes
app.use(morgan('dev'))
app.use(express.json())
app.use('/clientes', clientRouter);
app.use('/paymentmethods', paymentMethodRouter)
app.use('/payment', paymentRouter)



export default app;
