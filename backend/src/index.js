const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors")

const app = express();

dotenv.config();
const PORT = process.env.PORT;
app.use(cors())
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.send("Hello World, this API");
});

const productController = require("./products/product.controller");
app.use("/products", productController);

app.listen(PORT, () => {
    console.log(`Server API running on port ${PORT}`);
});