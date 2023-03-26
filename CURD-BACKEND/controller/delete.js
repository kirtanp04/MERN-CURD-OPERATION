const Model = require("../model")


const deleteData = async(req,res)=>{
    const {id,prompts} = req.body
    try{
        const key = await Model.findOne({_id:id, key:prompts})
        if(key){
           const deletes = await Model.findByIdAndDelete({_id:id})
            res.send({mess:"Data is Deleted",deletes}).status(202)
        }else{
            res.send({mess:"Invalid key"}).status(404)
            
        }
    }catch(e){
        res.send({mess:"server error"}).status(404)
    }
}

module.exports = deleteData