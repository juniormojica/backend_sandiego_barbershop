// app.js
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {
  autRouter,
  clientRouter,
  paymentMethodRouter,
  paymentRouter,
  providedServiceRouter,
  userRouter,
  barberRouter,
  roleRouter, serviceRouter
} from './routes/index.js'

const app = express()

// Usa el router de clientes para manejar las rutas que comienzan con /clientes
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/clients', clientRouter)
app.use('/paymentmethods', paymentMethodRouter)
app.use('/payments', paymentRouter)
app.use('/providedservices', providedServiceRouter)
app.use('/providedservice', providedServiceRouter)
app.use('/auth', autRouter)
app.use('/user', userRouter)
app.use('/users', userRouter)
app.use('/barbers', barberRouter)
app.use('/barber', barberRouter)
app.use('/role', roleRouter)
app.use('/roles', roleRouter)
app.use('/services', serviceRouter)
export default app
