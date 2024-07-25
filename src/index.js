// index.js
import 'dotenv/config';
import app from './app.js';
import database from './database/db.js';
import { Client } from './models/clientModel.js';
const PORT = process.env.PORT || 3000;


try {
  await database.sync()
  console.log('All models were created');
  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
  });


} catch (error) {
  console.log(error);
}

