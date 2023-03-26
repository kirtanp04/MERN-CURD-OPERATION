
const Model = require("../model")


const addUser = async(req,res)=>{
    const {name, email, age, key} = req.body
    const datas = {
        name:name,
        email:email,
        age:age,
        key:key
    }
    try{
        const data = await Model.findOne({name:name,email:email})
        if(data){
            res.send({mess:"Data exist"}).status(404)
        }else{
            const secret = await Model.findOne({key:key})

            if(secret){
                res.send({mess:"Key is used"}).status(404)
            }else{
                await Model.insertMany(datas)
                res.send({mess:"Data stored"}).status(202)
            }
        }
    }catch(e){
        res.send({mess:e}).status(404)
    }
}

module.exports = addUser