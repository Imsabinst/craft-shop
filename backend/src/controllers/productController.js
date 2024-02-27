import productModel from "../models/productModel.js";

export const addProductController = async (req, res) => {
  try {
    let products = await productModel.find({});
    let id;
    if (products.length > 0) {
      let last_item_array = products.slice(-1); //only get the last product
      let last_item = last_item_array[0]; //can access with index 0
      id = last_item.id + 1;
    } else {
      id = 1;
    }
    const product = new productModel({
      id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await product.save();
    console.log(product);
    res.json({
      success: true,
      message: "Product created",
      product,
    });
  } catch (error) {
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
      .select("-image");
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
    const products = await productModel.find({});
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
export const popularProductsController = async (req, res) => {
  try {
    const products = await productModel.find({});
    const popularProducts = products.slice(0, 4);
    res.status(200).send({
      success: true,
      message: "Popular collection are successfully listed",
      popularProducts,
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
    const products = await productModel.find({});
    const relatedProducts = products.slice(1).slice(-8);
    res.status(200).send({
      success: true,
      message: "Related Products are successfully listed",
      relatedProducts,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Could not load the products!",
      error: error.message,
    });
  }
};

export const addToCartController = async (req, res) => {
  console.log(req.body);
};
