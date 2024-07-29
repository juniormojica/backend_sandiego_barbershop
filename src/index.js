// index.js
import 'dotenv/config';
import app from './app.js';
import sequelize from './database/db.js';
import { injectSeeds } from './seeds/dbSeed.js'

const PORT = process.env.PORT || 3000;


try {
  await sequelize.sync({ logging: false, alter: true })
  // await injectSeeds()
  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
  });


} catch (error) {
  console.log(error);
}

