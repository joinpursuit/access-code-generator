# Access Code Generator

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f347722d5b6b48d8943243bd1e282dc5)](https://www.codacy.com/app/nmadd/access-code-generator?utm_source=github.com&utm_medium=referral&utm_content=C4Q/access-code-generator&utm_campaign=badger)

Welcome to the Access Code Generator! This is a scaffolding built using Node, Express, React, and Sequelize.

## Database Setup
You'll first need to setup a database for the project. Then, in the `back/env/development.js` file you'll need to change the 'DATABASE_URI' to your specific database setup.

## Start
First: `npm install`
To start: `npm start`

## Testing
You can add new tests in the `test` folder.

To test: `npm test`

Your tests are also automatically called as part of `npm start`

## Authentication
Authentication (aka login) is mostly setup, but still missing a couple key parts: a `login` and `auth` route in your API. You will need to create them in order for login to fully work.

You can see AJAX calls for these routes in the `Login.jsx` and `App.jsx` components
