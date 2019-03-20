const mongoose = require("mongoose");


let newSchema = new mongoose.Schema({
    username:String,
    password: String
});

let newModel = mongoose.model("user", newSchema);

module.exports.createUser = (data)=>{
    return new Promise((resolve, reject)=>{
        newModel.create(data)
        .then((u)=>{
            resolve(u)
        }).catch(err=>{
            reject(err)
        })
    })
}



module.exports.readUser = (data)=>{
    return new Promise((resolve, reject)=>{
        newModel.findOne(data)
        .then((u)=>{
            resolve(u)
        }).catch(err=>{
            reject(err)
        })
    })
}
