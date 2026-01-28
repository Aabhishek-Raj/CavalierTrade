import express from "express";
import stockRoutes from './presentation/routes/stockRoutes'

export const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use(stockRoutes);
  return app;
};
