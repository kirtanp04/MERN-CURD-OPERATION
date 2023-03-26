const mongoose = require("mongoose")


const newSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    key:{
        type:String,
        require:true
    }
})

const Model = mongoose.model("Data",newSchema)

module.exports = Model;