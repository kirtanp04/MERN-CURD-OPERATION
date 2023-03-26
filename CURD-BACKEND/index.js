const express = require("express")
const cors = require("cors")
require('dotenv').config()
const createDatabase = require("./db")
const router = require("./routes/add")
const app = express()
// dotenv.config()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 8000;
createDatabase()


app.use("/",router)





app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})