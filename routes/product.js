const express = require("express")
const router = express.Router()

const { getProducts, newProduct, getSingleProducts, updateProduct, deleteProduct } = require('../controllers/productController')

// get request parameters
router.route("/products").get(getProducts);
router.route("/products/:id").get(getSingleProducts);
router.route("/admin/products/:id")
                .put(updateProduct)
                .delete(deleteProduct);


// post request parameters
router.route("/admin/products/new").post(newProduct);




module.exports = router