const router = require("express").Router()
const bcrypt = require("bcryptjs")

const {
    createUser,
    readUser
} = require("../model/schema")

router.post("/", (req,res)=>{

    let newPass = bcrypt.hashSync(req.body.password, 5)

        let obj = {
            username:req.body.username,
            password:newPass
        }
    
        createUser(obj)
        .then((userr)=>{
            res.json(userr)
        }).catch(err=>{
            res.status(500).send(err)
        })

    
})



router.get("/", (req,res)=>{
    return new Promise((resolve,reject)=>{
        readUser(req.query)
        .then((userr)=>{
            res.json(userr)
        }).catch(err=>{
            res.status(500).send(err)
        })
    })
})

module.exports = router
