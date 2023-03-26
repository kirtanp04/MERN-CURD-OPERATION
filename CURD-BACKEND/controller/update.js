const Model = require("../model")

const Update = async (req, res) => {
    const { name, email, age, prompts, id } = req.body



    try {
        const ids = await Model.findOne({ _id: id, key: prompts })
        if (ids) {
            await Model.findByIdAndUpdate({ _id: id }, {
                $set: {
                    name: name,
                    email: email,
                    age: age
                }
            })
            res.send({ mess: "Data updated" }).status(202)

        } else {
            res.send({ mess: "Key doesn't match" }).status(404)
        }

    }
    catch (e) {
        res.send({ mess: "server error", e }).status(404)
    }

}

module.exports = Update