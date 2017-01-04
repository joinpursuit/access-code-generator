const app = require('./back/server');
const db = require('./back/db').sequelize;

db
.authenticate()
.then(() => {
  //this if statement will prevent our express server and test server (using supertest) from trying to access the same port at the same time
  if (!module.parent) {
      app.set('port', process.env.PORT || 3000);
     app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));
  };
})
.catch((err) => console.log('Unable to connect to the database:', err));
