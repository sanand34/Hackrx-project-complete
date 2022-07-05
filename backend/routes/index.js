import express from 'express';
const router = express.Router();

import {home, product, test_connection} from '../controller/index.js';

const routes = app => {
  router.get('/', home);
  router.post('/product', product);
  router.get('/db', test_connection);
  app.use(router);
};
export {routes};
