const mongoose=require("mongoose")
let schema=mongoose.Schema({

    "FirstName":{type:String,require:true},
    "MiddleName":{type:String,require:true},
    "LastName":{type:String,require:true},
    "Email":{type:String,require:true},
    "Password":{type:String,require:true}
})
let alertmodel=mongoose.model("alert",schema)

module.exports={alertmodel}