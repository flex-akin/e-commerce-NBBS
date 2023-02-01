const Product = require('../models/products')
const ErrorHandler  = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsynErrors');
const APIFeatures = require('../utils/apiFeatures')

// add products to databse
exports.newProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        message: "product created successfully",
    
    })
    

}

// get products from database
exports.getProducts = catchAsyncErrors( async (req, res, next ) => {

    const  resPerPage = 10
    const productCount = await Product.countDocuments()

    const apiFeatures = new APIFeatures(Product.find(), req.query)
            .search()
            .filter()
            .pagination(resPerPage)

    const products = await apiFeatures.query;

    setTimeout(() => { 
        res.status(200).json({
            success: true,
            message: "all products found",
            count: products.length,
            productCount,
            products
        })
     }, 2000);
   
})
// get single product
exports.getSingleProducts = catchAsyncErrors( async (req, res, next) => {
    const products = await Product.findById(req.params.id);
    if (!products){
        return next(new ErrorHandler('Product Not Found', 404))
    }

    res.status(200).json({
        success: true,
        products: products,

    });
})

// Update product
exports.updateProduct = catchAsyncErrors(async (res, req, next) => {
    let product = await Product.findById(req.params.id);

    if (!product){
        return next(new ErrorHandler('Product Not Found', 404))
        
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })

    res.status(200).json({
        success: true,
        product
    })


})


//delete product
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await product.findById(req.params.id);

    if (!product){
        return next(new ErrorHandler('Product Not Found', 404))

    }

    await product.deleteOne()
    res.status(200).json({
        success : true,
        message: "Product deleted successfully"
    })



    })