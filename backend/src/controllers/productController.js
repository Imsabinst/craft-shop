import productModel from "../models/productModel.js";
import fs from "fs";

export const addProductController = async (req, res) => {
  try {
    const { name, category, new_price, old_price } = req.fields;
    const { image } = req.files;

    switch (true) {
      case !name:
        return res.status(500).send({
          error: "Name is required!",
        });
      case !new_price:
        return res.status(500).send({
          error: "New price is required!",
        });
      case !old_price:
        return res.status(500).send({
          error: "Old price is required!",
        });
      case !category:
        return res.status(500).send({
          error: "Category is required!",
        });

      case image && image.size >= 1000000:
        return res.status(500).send({
          error: "Image is required! and less than 1 mb",
        });
    }
    const products = new productModel({
      ...req.fields,
    });

    if (image) {
      products.image.data = fs.readFileSync(image.path);
      products.image.contentType = image.type;
    }

    await products.save();
    res.status(200).send({
      success: true,
      message: "Product created",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error creating product",
      error,
    });
  }
};

export const allProductsController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      .select("-image")
      .limit(28)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      totalProductsCount: products.length,
      message: "Successfully products are listed",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Failed",
      error: error.message,
    });
  }
};

export const singleProductController = async (req, res) => {
  try {
    const product = await productModel
      .findOne({ _id: req.params._id })
      .select("-image")
      .populate("category");
    res.status(200).send({
      success: true,
      message: "Single product fetched",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error",
      error,
    });
  }
};

export const productImageController = async (req, res) => {
  try {
    const productImage = await productModel
      .findById(req.params.pid)
      .select("image");
    if (productImage.image.data) {
      res.set("Content-type", productImage.image.contentType);
      return res.status(200).send(productImage.image.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error",
      error,
    });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const { pid } = req.params;
    await productModel.findByIdAndDelete(pid).select("-image");
    res.status(200).send({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Could not delete the product!",
      error: error.message,
    });
  }
};
export const newCollectionProductsController = async (req, res) => {
  try {
    const products = await productModel.find({}).select("-image");
    const newCollection = products.slice(1).slice(-8);
    res.status(200).send({
      success: true,
      message: "New collection are successfully listed",
      newCollection,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Could not load the products!",
      error: error.message,
    });
  }
};
export const relatedProductsController = async (req, res) => {
  try {
    const products = await productModel.find({}).select("-image");
    const newCollection = products.slice(1).slice(-8);
    res.status(200).send({
      success: true,
      message: "New collection are successfully listed",
      newCollection,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Could not load the products!",
      error: error.message,
    });
  }
};
