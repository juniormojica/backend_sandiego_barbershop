import { Router } from "express";

const providedServiceRouter = Router()

providedServiceRouter
  .get('/', (req, res) => {
    res.send('Provided Service Route Working')
  })
export default providedServiceRouter