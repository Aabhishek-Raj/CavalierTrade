import express from "express";
import { expressAdapter } from "../adapters/expressAdapter";
import { createProductController, findProductController } from "../../app";

const router = express.Router();

router.post("/api/products", expressAdapter(createProductController));
router.get("/api/products/:id", expressAdapter(findProductController)); // ✅ New GET endpoint

export default router;
