import express from "express";
import formidable from "express-formidable";

import {
  addProductController,
  addToCartController,
  allProductsController,
  deleteProductController,
  newCollectionProductsController,
  popularProductsController,
  relatedProductsController,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/addProduct", addProductController);
router.get("/getProducts", allProductsController);
router.delete("/deleteProduct/:pid", deleteProductController);
router.get("/getNewCollection", newCollectionProductsController);
router.get("/getPopularProducts", popularProductsController);
router.get("/getRelatedProducts", relatedProductsController);
router.post("/addToCart", addToCartController);

export default router;
