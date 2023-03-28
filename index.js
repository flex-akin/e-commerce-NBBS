const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')
const cors = require("cors");
const cookieParser = require('cookie-parser')
app.use(cors());

// Handle Uncaught exceptions
process.on('uncaughtException', err => {
  console.log(`ERROR: ${err.stack}`);
  console.log('Shutting down due to uncaught exception');
  process.exit(1)
})


const errorMiddleware = require('./middlewares/errors')
app.use(express.json());
app.use(cookieParser())

dotenv.config()
const port = process.env.PORT


// import all routes
const products = require("./routes/auth")
app.use("/api/v1", products)


const auth = require("./routes/product")
app.use("/api/v1", auth)

//Middelware to Handle Errors
app.use(errorMiddleware)

//connecting to database
connectDatabase()


const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port} in ${process.env.NODE_ENV}`)
})

process.on('unhandledRejection', err => {
  console.log(`ERROR: ${err.message}`);
  console.log('Shutting down the server due to Unhandled Promise rejection');
  server.close(() => {
      process.exit(1)
  })
})
