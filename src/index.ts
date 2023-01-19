/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import urlRoutes from "./routes/url.router";
import ErrorMiddleware from "./middleware/ErrorMiddleware";

dotenv.config({ path: "./config/.env"});

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/v1/shortUrl', urlRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  ErrorMiddleware.handleError(err, res);
  next(err);
})

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});