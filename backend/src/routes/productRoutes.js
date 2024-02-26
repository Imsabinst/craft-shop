import express from "express";
import formidable from "express-formidable";

import {
  addProductController,
  allProductsController,
  deleteProductController,
  newCollectionProductsController,
  productImageController,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/addProduct", formidable(), addProductController);
router.get("/getProducts", allProductsController);
router.delete("/deleteProduct/:pid", deleteProductController);
router.get("/productImage/:pid", productImageController);
router.get("/getNewCollection", newCollectionProductsController);
router.get("/getRelatedProducts", newCollectionProductsController);

export default router;
