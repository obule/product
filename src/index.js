/* eslint-disable no-console */

import express, { Router } from 'express';
import constants from './config/constants';
import './config/database';
import middlewareConfig from './config/middleware';
import apiRoutes from './modules';
var cors = require('cors');

const app = express();
middlewareConfig(app);

app.use(express.static('public'));
app.get('/', (req, res) => {
  console.log(__dirname);
  res.send('Hello World');
});

app.disable('etag');

app.use(cors());

apiRoutes(app);
app.use((err, req, res, next) => {
  return res.status(err.status).json(err);
});
app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
        Server running on port: ${constants.PORT}
        -------
        Running on ${process.env.NODE_ENV}
        ------
        Make something great
        `);
  }
});
