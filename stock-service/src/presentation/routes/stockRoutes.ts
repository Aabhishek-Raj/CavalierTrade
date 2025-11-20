import express from "express";
import { expressAdapter } from "../adapters/expressAdapter";
import { createStockController, findStockController } from "../../app";

const router = express.Router();

router.post("/api/stocks", expressAdapter(createStockController));
router.get("/api/stocks/:id", expressAdapter(findStockController)); // ✅ New GET endpoint

export default router;
