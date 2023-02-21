const ProductModel = require("../models/product/product.model");

const createProduct = async (req, res) => {
  try {
    const productController = await ProductModel.create(req.body);

    return res.status(200).send({ productController, status: "ok" });
  } catch (error) {
    return res.status(404).json({ status: "error" });
  }
};
const findProduct = async (req, res) => {
  try {
    const findProductController = await ProductModel.find().lean().exec();

    return res.status(200).send({ findProductController, status: "ok" });
  } catch (error) {
    return res.status(404).json({ status: "error" });
  }
};

const deleteproduct = async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndDelete(req.params.id);

    return res.status(200).send(product);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

module.exports = { createProduct, findProduct, deleteproduct };
