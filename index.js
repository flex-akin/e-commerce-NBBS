const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')
const cors = require("cors");
app.use(cors());



app.use(express.json());

dotenv.config()
const port = process.env.PORT


// import all routes
const products = require("./routes/product")
app.use("/api/v1", products)

//connecting to database
connectDatabase()


app.listen(port, () => {
  console.log(`Example app listening on port ${port} in ${process.env.NODE_ENV}`)
})

