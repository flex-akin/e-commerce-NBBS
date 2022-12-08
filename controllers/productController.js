const Product = require('../models/products')


// add products to databse
exports.newProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        message: "product created successfully",
    
    })
    

}

// get products from database
exports.getProducts = async (req, res, next ) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        message: "all products found",
        count: products.length,
        products
    })
}

// get single product
exports.getSingleProducts = async (req, res, next) => {
    const products = await Product.findById(req.params.id);
    if (!products){
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    res.status(200).json({
        success: true,
        products: products
    });
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    