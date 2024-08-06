// app.js
import express from 'express';
import morgan from 'morgan'
import clientRouter from './routes/clients.js';
import paymentMethodRouter from './routes/paymentMethodRoutes.js';
import paymentRouter from './routes/paymentRoutes.js';
import providedServiceRouter from './routes/providedServiceRoute.js';
import autRouter from './routes/authRoutes.js';
import { userRouter } from './routes/userRoute.js';
const app = express();

// Usa el router de clientes para manejar las rutas que comienzan con /clientes
app.use(morgan('dev'))
app.use(express.json())
app.use('/clients', clientRouter);
app.use('/paymentmethods', paymentMethodRouter)
app.use('/payments', paymentRouter)
app.use('/providedservices', providedServiceRouter)
app.use('/auth', autRouter)
app.use('/user', userRouter)


export default app;
