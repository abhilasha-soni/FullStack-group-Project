import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  editProduct,
} from "../controllers/products";

const router = Router();

router.post("/", createProduct);
router.get("/:id", getProductById);
router.get("/", getAllProducts);
router.put("/:id", editProduct);

export default router;
