import express from "express";
import formidable from "express-formidable";

import {
  addProductController,
  addToCartController,
  allProductsController,
  deleteProductController,
  getCartData,
  newCollectionProductsController,
  popularProductsController,
  relatedProductsController,
  removeCartData,
} from "../controllers/productController.js";
import { authMiddleware, requireLogin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/addProduct", addProductController);
router.get("/getProducts", allProductsController);
router.delete("/deleteProduct/:pid", deleteProductController);
router.get("/getNewCollection", newCollectionProductsController);
router.get("/getPopularProducts", popularProductsController);
router.get("/getRelatedProducts", relatedProductsController);
router.post("/addToCart", authMiddleware, addToCartController);
router.post("/removeCartData", authMiddleware, removeCartData);
router.post("/getCart", authMiddleware, getCartData);

export default router;
