import express from 'express';
import cors from 'cors';
import { createTables } from './db_connecting.js';

export function createServer() {
  const app = express();

  app.use(cors());

  createTables();

  app.get('/', (req, res) => {
    res.send('simple request');
  });

  return app;
}
