const express =require('express')
require('dotenv').config()
require('./database/connection')

const cors = require('cors')
const morgan = require('morgan')

const app = express()
const port= process.env.PORT

const categoryRoute = require('./routes/categoryRoute')

app.use(express.json())
app.use(cors())
app.use(categoryRoute)


   app.listen(port, ()=>{
      console.log("app started sucessfully.")
   }
)