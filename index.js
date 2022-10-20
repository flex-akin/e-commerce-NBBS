const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config()
const port = process.env.PORT
app.use(express.json())


// import all routes
const products = require("./routes/product")
app.use("/api/v1", products)


app.listen(port, () => {
  console.log(`Example app listening on port ${port} in ${process.env.NODE_ENV}`)
})