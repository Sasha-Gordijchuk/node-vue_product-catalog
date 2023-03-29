import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import { syncTables } from './db.js';
import { phoneRouter } from './routes/phoneRoutes.js';

const FILENAME = fileURLToPath(import.meta.url);
const DIRNAME = path.dirname(FILENAME);

export function createServer() {
  const app = express();

  app.use(cors());

  syncTables();

  app.use(express.static(`${DIRNAME}/`));
  app.use('/phones', phoneRouter);

  return app;
}
