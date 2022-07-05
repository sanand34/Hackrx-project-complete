'use strict';
import express from 'express';
import {routes} from './routes/index.js';
console.log('Starting...');

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});
routes(app);
app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
