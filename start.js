const server = require('./back/server');
const db = require('./back/db/models').sequelize;

db
.authenticate()
.then(() => {
  //this if statement will prevent our express server and test server (using supertest) from trying to access the same port at the same time
  if (!module.parent) {
     server.listen(3000, () => console.log(`Listening on port 3000`));
  };
})
.catch((err) => console.log('Unable to connect to the database:', err));
