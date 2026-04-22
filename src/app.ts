import express from "express";
import healthRouter from "./routes/health.route";
import { errorHandler } from "./middlewares/error.middleware";
const app = express();

app.use(express.json());
app.use("/health", healthRouter);
app.use(errorHandler);
export default app;