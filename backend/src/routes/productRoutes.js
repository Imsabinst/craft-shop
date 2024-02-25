import express from "express";
import formidable from "express-formidable";

import {
  addProductController,
  allProductsController,
  deleteProductController,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/addProduct", formidable(), addProductController);
router.get("/getProducts", allProductsController);
router.delete("/deleteProduct/:pid", deleteProductController);

export default router;
