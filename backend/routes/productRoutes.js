import express from "express";
const router = express.Router();
import { protect, admin } from "../middleware/authMiddleware.js";

import {
  getProducts,
  getProductByIdgetProductById,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview,
  getTopProduct,
} from "../controllers/productControllers.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/top").get(getTopProduct);
router
  .route("/:id")
  .get(getProductByIdgetProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);
router.route("/:id/reviews").post(protect, createProductReview);

export default router;
