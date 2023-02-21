const mongoose = require("mongoose");

const ProductModelSchema = mongoose.Schema({
  productname: { type: "string", required: true },
  currentprice: { type: "string", required: true },
  mrpprice: { type: "string", required: true },
  discount: { type: "string", required: true },
  image: { type: "string", required: true },
});

module.exports = mongoose.model("ProductModel", ProductModelSchema);
