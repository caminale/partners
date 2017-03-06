'use strict';

require('dotenv').config();
const winston = require('winston');
const app = require('./controller/express-server.js');
const db = require('./db-init/index.js');

winston.level = process.env.LOG_LEVEL;

app.listen(process.env.SERVER_PORT, () => {
  db.init()
    .then(() => {
      winston.log('info', `App on: ${process.env.SERVER_IP}`);
    });
});
