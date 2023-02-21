const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const connect = require("./db/db");

const {
  createProduct,
  findProduct,
  deleteproduct,
} = require("./controllers/product.controller");

app.get("/findproduct", findProduct);

app.post("/createproduct", createProduct);

app.delete("/deleteproduct/:id", deleteproduct);

app.listen(process.env.PORT || 8080, async () => {
  try {
    await connect();
    console.log("server is running on port 8080");
  } catch (e) {
    console.log(e);
  }
});
