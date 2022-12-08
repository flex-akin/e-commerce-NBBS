const Product = require('../models/products')
const dotenv = require('dotenv')
const connectDatabase = require('../config/database')
const products = require('../data/products')

dotenv.config()

connectDatabase()

const seedProducts = async () => {
    try {
        await Product.deleteMany();
        console.log('Products are deleted successfully');

        await Product.insertMany(products)
        console.log('Products are added successfully');

        process.exit();



    } catch(e) {
        console.log(e.message)
        process.exit();

    }
}


seedProducts()