// index.js
import 'dotenv/config'
import app from './app.js'
import sequelize from './database/db.js'
import { injectSeeds } from './seeds/dbSeed.js'

const SERVER_PORT = process.env.SERVER_PORT || 3000

try {
  await sequelize.sync({ logging: false, force: true })
  // await injectSeeds()
  app.listen(SERVER_PORT, () => {
    console.log(`Running on port ${SERVER_PORT}`)
  })
} catch (error) {
  console.log(error)
}
