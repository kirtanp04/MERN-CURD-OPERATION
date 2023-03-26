const Model = require("../model")


const getUser = async(req,res)=>{
    try{
      const data =  await Model.find({})
      res.send(data).status(202)
    }
    catch(e){
        res.send(e).status(404)
    }
}



module.exports = getUser