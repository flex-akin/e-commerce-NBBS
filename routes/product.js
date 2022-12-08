const express = require("express")
const router = express.Router()

const { getProducts, newProduct, getSingleProducts } = require('../controllers/productController')

// get request parameters
router.route("/products").get(getProducts);
router.route("/products/:id").get(getSingleProducts);


// post request parameters
router.route("/products/new").post(newProduct);



//router.get("/products", getProducts)


module.exports = router