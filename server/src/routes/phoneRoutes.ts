import express from 'express';
import { getAll } from '../controllers/phoneController.js';

export const phoneRouter = express.Router();

phoneRouter.get('/', getAll);
