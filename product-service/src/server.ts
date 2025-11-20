import express from "express";
import productRoutes from './presentation/routes/productRoutes'

export const createServer = () => {
  const app = express();
  app.use(express.json());
  app.use(productRoutes);
  return app;
};
