const express = require("express")
const addUser = require("../controller/add")
const deleteData = require("../controller/delete")
const getUser = require("../controller/getUser")
const Update = require("../controller/update")
// const Key = require("../controller/key")
const router = express.Router()



router.post('/add',addUser)
router.get("/getuser",getUser)
router.put("/update",Update)
router.post("/delete",deleteData)
// router.post("/getkey",Key)


module.exports = router