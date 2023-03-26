const mongoose = require("mongoose")


const createDatabase = async() =>{
    try{
        await mongoose.connect(process.env.DB_URL)
        .then(()=>{
            console.log("Database is created")
        })
    }
    catch(e){
        console.log(e)
    }
}

module.exports = createDatabase