import express from 'express';
import 'dotenv/config';
import { errorHandler } from './middleware/ErrorMiddleware.ts';

const app = express();

app.use(errorHandler);

export default app;