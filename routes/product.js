const express = require("express")
const router = express.Router()

const { getProducts } = require('../controllers/productController')

router.route("/products").get(getProducts);
//router.get("/products", getProducts)


module.exports = router