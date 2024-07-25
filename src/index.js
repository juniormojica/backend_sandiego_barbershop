// index.js
import 'dotenv/config';
import app from './app.js';
import sequelize from './database/db.js';

const PORT = process.env.PORT || 3000;


try {
  await sequelize.sync({ logging: false, force: true })
  console.log('All models were created');
  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
  });


} catch (error) {
  console.log(error);
}

