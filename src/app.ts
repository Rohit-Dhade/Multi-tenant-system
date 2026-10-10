import cookieParser from 'cookie-parser';
import 'dotenv/config';
import express from 'express';
import { errorHandler } from './middleware/ErrorMiddleware.ts';
import registerRouter from "./routes/AuthRoutes.ts";
import requiredRoleRouter from './routes/requiredRoleRoute.ts';

const app = express();
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

app.use("/api/v1/auth", registerRouter);
app.use("/api/v1/role", requiredRoleRouter);
app.use(errorHandler);

export default app;